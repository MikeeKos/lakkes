// props.lakeForm is:
//   title: "...",
//   description: "...",
//   location: "...",
// if forNewLake is equal to true, then this form is used for creating new object
// otherwise it renders data in <input />'s elements and functions as edit form

import { useState, useContext, useEffect } from "react";
import classes from "./lakeForm.module.css";
import { useRouter } from "next/router";
import { mutate } from "swr";
import NotificationContext from "../../store/notification-context";
import axios from "axios";
import Image from "next/image";
import FormMap from "./formMap";

function LakeForm(props) {
  const router = useRouter();

  const formId = props.formId;
  const lakeForm = props.lakeForm;
  const forNewLake = props.forNewLake; // true or false

  const notificationCtx = useContext(NotificationContext);
  const [filesArray, setfilesArray] = useState("");
  const [imagesForPreview, setImagesForPreview] = useState();
  const [previews, setPreviews] = useState([]);
  const [checkboxArray, setCheckboxArray] = useState([]);
  const [sateliteMap, setSateliteMap] = useState(false);

  const [form, setForm] = useState({
    title: lakeForm.title,
    description: lakeForm.description,
    location: lakeForm.location,
    longitude: lakeForm.longitude,
    latitude: lakeForm.latitude,
  });

  console.log("___WHAT CAME FROM FORM ROUTE___");
  console.log(form);

  useEffect(() => {
    const createPreviews = () => {
      const previewPromises = imagesForPreview.map((image) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(image);
        });
      });

      Promise.all(previewPromises).then((results) => {
        setPreviews(results);
      });
    };

    if (imagesForPreview && imagesForPreview.length > 0) {
      createPreviews();
    } else {
      setPreviews([]);
    }
  }, [imagesForPreview]);

  //for creating new lake object (POST)
  async function postData(form) {
    notificationCtx.showNotification({
      title: "sending...",
      message: "sending lake data for verification",
      status: "pending",
    });
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const imageResponse = await axios.post(
        "/api/user/lake-upload",
        form,
        config
      );

      console.log("___AXIOS API RESPONSE___");
      console.log("response", imageResponse);
      notificationCtx.showNotification({
        title: "success!",
        message: "successfully created new object",
        status: "success",
      });
      router.push(`/list/${imageResponse.data.data._id}`);
    } catch (error) {
      console.log("___ERROR___");
      console.log(error);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when creating lake",
        status: "error",
      });
    }
  }

  //for editing existing lake object (PUT)
  async function putData(form) {
    console.log("____IS FORM EVEN SEND FOR EDITING?____");
    console.log(form);
    console.log("___Show values___");
    for (const value of form.values()) {
      console.log(value);
    }
    const { lakeId } = router.query;

    notificationCtx.showNotification({
      title: "sending...",
      message: "sending lake data for verification (EDITING) ",
      status: "pending",
    });

    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const imageResponse = await axios.put(
        `/api/user/${lakeId}`,
        form,
        config
      );

      console.log("___AXIOS API RESPONSE___");
      console.log("response", imageResponse);
      notificationCtx.showNotification({
        title: "success!",
        message: "successfully edited object",
        status: "success",
      });

      // MAKE IT WORK
      // mutate(`/api/user/${lakeId}`, imageResponse, false); // Update the local data without a revalidation
      router.push(`/list/${lakeId}`);
    } catch (error) {
      console.log(error);
      // console.log(JSON.parse(error.message).message);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when editing lake",
        status: "error",
      });
    }
  }

  function submitFormHandler(event) {
    event.preventDefault();
    const errors = formValidate();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();

      if (filesArray && filesArray.length > 0) {
        Array.from(filesArray).forEach((file) => {
          formData.append("files", file);
        });
      }

      formData.append("JSONPayload", JSON.stringify(form));

      if (!forNewLake) {
        formData.append("JSONImagesArray", JSON.stringify(checkboxArray));
      }

      forNewLake ? postData(formData) : putData(formData);
    } else {
      console.log("___FRONT END VALIDATION ERRORS___");
      console.log(errors);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Invalid user data (FORMVALIDATE FAILED)",
        status: "error",
      });
    }
  }

  const checkboxChangeHandler = (event) => {
    const checkboxValue = event.target.value;
    setCheckboxArray((prevArray) => [...prevArray, checkboxValue]);
  };

  const changeFormHandler = (event) => {
    const files = event.target.files;
    //ADD MAX LENGTH
    console.log(files.length);
    if (files.length > 5) {
      event.target.value = null;
      setfilesArray(null);
      notificationCtx.showNotification({
        title: "Error!",
        message: "You cannot add more than 5 files",
        status: "error",
      });
      return;
    }

    setfilesArray(files);

    let filesArray = [];
    let areAllTypesCorrect = true;
    if (files) {
      Array.from(files).forEach((file) => {
        if (file.type.substring(0, 5) !== "image") {
          areAllTypesCorrect = false;
        }
        filesArray.push(file);
      });
    }

    if (files && areAllTypesCorrect) {
      setImagesForPreview(filesArray);
    } else {
      setImagesForPreview(null);
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //client side validation
  const formValidate = () => {
    let err = {};
    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    if (!form.location) {
      err.location = "Location is required";
    }
    if (!form.latitude) {
      err.latitude = "Latitude is required"
    }
    if (!form.longitude) {
      err.longitude = "Longitude is required"
    }
    //add allowed formats
    if (forNewLake) {
      if (!filesArray || filesArray.length === 0) {
        err.images = "Images are required";
      }
    }
    return err;
  };

  const handleDataFromMap = (data) => {
    setForm({
      ...form,
      longitude: data.lng,
      latitude: data.lat,
    })
    console.log(data);
    console.log("CHANGING MAP")
    console.log(form);
  };

  const changeStyleHandler = (event) => {
    event.preventDefault();
    setSateliteMap((prevState) => {
      return !prevState;
    });
  };

  return (
    <section className={classes.contact}>
      <div>
        <h1>Toggle map style</h1>
        <button onClick={changeStyleHandler}>Change map style</button>
      </div>
      <h1>Lake form</h1>
      <form
        className={classes.form}
        id={formId}
        onSubmit={submitFormHandler}
        encType="multipart/form-data"
      >
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className={classes.control}>
            <div>Set location</div>
            <div>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                required
                readOnly
                value={form.latitude}
              />
            </div>
            <div>
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                required
                readOnly
                value={form.longitude}
              />
            </div>
            <FormMap
              sateliteMap={sateliteMap}
              sendDataToForm={handleDataFromMap}
              initialCoordsFromEditPage={{lng: form.longitude,lat: form.latitude}}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="location">Location</label>
            <input
              type="file"
              name="files"
              multiple
              accept="image/*"
              onChange={changeFormHandler}
            />
            <div>
              {props.images &&
                props.images.map((image) => {
                  return (
                    <li key={image.filename}>
                      <Image
                        src={image.url}
                        alt="Hello"
                        width={300}
                        height={200}
                        placeholder="blur"
                        blurDataURL={"/image.png"}
                      />
                      <div>
                        <input
                          onChange={checkboxChangeHandler}
                          value={image.filename}
                          id={image.filename}
                          type="checkbox"
                        />
                        <label htmlFor={image.filename}>Delete?</label>
                      </div>
                    </li>
                  );
                })}
              {previews.map((preview, index) => {
                return (
                  <li key={index}>
                    <img
                      key={index}
                      src={preview}
                      alt={`Preview ${index + 1}`}
                    />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </section>
  );
}

export default LakeForm;
