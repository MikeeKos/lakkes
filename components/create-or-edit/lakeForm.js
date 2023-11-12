
import React, { useState, useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import NotificationContext from "../../store/notification-context";
import axios from "axios";
import Image from "next/image";
import FormMap from "./formMap";
import { AnimatePresence, motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { Switch } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";

function LakeForm(props) {
  const { data: session, status } = useSession();

  const fileInputRef = useRef();

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
  const [errorArray, setErrorArray] = useState([]);

  const [form, setForm] = useState({
    title: lakeForm.title,
    description: lakeForm.description,
    location: lakeForm.location,
    longitude: lakeForm.longitude,
    latitude: lakeForm.latitude,
  });

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

      notificationCtx.showNotification({
        title: "success!",
        message: "successfully created new object",
        status: "success",
      });
      router.push(`/list/${imageResponse.data.data._id}`);
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when creating lake",
        status: "error",
      });
    }
  }

  //for editing existing lake object (PUT)
  async function putData(form) {
    const { lakeId } = router.query;

    notificationCtx.showNotification({
      title: "sending...",
      message: "sending lake data for verification",
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

      notificationCtx.showNotification({
        title: "success!",
        message: "successfully edited object",
        status: "success",
      });

      router.push(`/list/${lakeId}`);
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: error.response.data.message,
        status: "error",
      });
    }
  }

  function submitFormHandler(event) {
    event.preventDefault();
    setErrorArray([]);
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
      notificationCtx.showNotification({
        title: "Error!",
        message: "Invalid data, please correct your form",
        status: "error",
      });
      
      Object.keys(errors).forEach((key) => {
        setErrorArray((prev) => [...prev, { type: key, message: errors[key] }]);
      });
    }
  }

  const checkboxChangeHandler = (event) => {
    const checkboxValue = event.target.value;
    setCheckboxArray((prevArray) => [...prevArray, checkboxValue]);
  };

  const changeFormHandler = (event) => {
    const files = event.target.files;
    if (files.length > 10) {
      event.target.value = null;
      setfilesArray(null);
      notificationCtx.showNotification({
        title: "Error!",
        message: "You cannot add more than 10 files",
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
      err.latitude = "Latitude is required";
    }
    if (!form.longitude) {
      err.longitude = "Longitude is required";
    }

    if (forNewLake) {
      if (!filesArray || filesArray.length === 0) {
        err.images = "Images are required";
      }
    }
    if (form.title.length < 1 || form.title.length > 30) {
      err.titleLength = "Title should be between 1 and 30 characters";
    }
    if (form.description.length < 1 || form.description.length > 5000) {
      err.descriptionLength =
        "Description should be between 1 and 5000 characters";
    }
    if (form.location.length < 1 || form.location.length > 30) {
      err.locationLength = "Location should be between 1 and 30 characters";
    }
    return err;
  };

  const handleDataFromMap = (data) => {
    setForm({
      ...form,
      longitude: data.lng,
      latitude: data.lat,
    });
  };

  const changeStyleHandler = (event) => {
    event.preventDefault();
    setSateliteMap((prevState) => {
      return !prevState;
    });
  };

  const deletePreviewImagesHandler = () => {
    fileInputRef.current.value = null;
    setImagesForPreview(null);
    setPreviews([]);
  };

  const handleText = forNewLake
    ? "↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓ add ↓"
    : "↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓ edit ↓";

  return (
    <React.Fragment>
      <form
        autoComplete="off"
        id={formId}
        onSubmit={submitFormHandler}
        encType="multipart/form-data"
      >
        <div className="w-full h-[6rem] overflow-hidden border-2 border-pageMenu bg-page2">
          <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
            <motion.span
              animate={{
                x: [-1000, 1000],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 90,
                delay: 5,
              }}
              className="whitespace-nowrap absolute bottom-[1px] text-7xl font-page font-[1000] tracking-tight text-page1 overflow-hidden"
            >
              {handleText}
            </motion.span>
            <motion.span
              animate={{
                x: [-1000, 1000],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 90,
                delay: 5,
              }}
              className="opacity-90 whitespace-nowrap absolute text-7xl font-page font-[1000] tracking-tight text-pageBlack overflow-hidden"
            >
              {handleText}
            </motion.span>
          </div>
        </div>
        {errorArray.length !== 0 && (
          <div className="w-full h-[15rem] bg-page1 border-2 border-pageMenu">
            <div className="w-full h-full grid grid-cols-12">
              <div className="w-full h-full col-span-3 bg-pageMenu border-e-4 border-pageMenu p-3 text-center flex items-center justify-center">
                <span className="font-body text-page1 font-bold text-xl">
                  What's wrong with your form?
                </span>
              </div>
              <div className="w-fll h-full p-5 col-span-9 overflow-hidden">
                <div className="w-full h-full bg-page1 p-5 overflow-y-scroll shadow-lg border-4 border-pageMenu">
                  <ul>
                    {errorArray.map((error, index) => (
                      <li
                        className="font-page text-base tracking-wide text-pageMenu p-1"
                        key={index}
                      >
                        <span className="text-2xl font-page text-pageMenu">
                          •
                        </span>{" "}
                        {error.message}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {!session && (
          <div className="flex justify-center items-center w-full bg-page1 h-[15rem] border-2 border-pageMenu">
            <div className="w-full h-full grid grid-cols-12">
              <div className="w-full h-full border-e-4 border-pageMenu col-span-4 bg-page1 flex items-center justify-center sm:border-b-4 sm:p-5">
                <div className="w-full h-full bg-page2 flex items-center justify-center sm:border-4 border-b-4 border-pageMenu sm:border-pageMenu shadow-lg">
                  <div className="w-4/5 sm:w-3/5 lg:w-1/2 h-1/3 flex items-center justify-center">
                    <Link href="/auth" className="w-full h-full">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="tracking-tight text-pageMenu text-xl md:text-3xl lg:text-4xl font-extrabold font-page shadow-xl w-full h-full bg-page3 border-4 border-pageMenu flex items-center justify-center hover:cursor-pointer"
                      >
                        log in
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full h-full col-span-8 flex items-center justify-center p-5">
                <div className="flex items-center justify-center py-24 w-full h-[3rem] bg-page1 text-sm sm:text-lg border-4 border-pageMenu shadow-lg p-5">
                  You are not logged in. You can test the form, but you cannot
                  add your own lake. Please log in.
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-12 grid-row-2 h-[100rem] sm:h-[90rem] md:h-[50rem] w-full overflow-hidden">
          <div className="bg-page1 min-h-[20rem] col-span-12 row-span-1 md:col-span-5 md:row-span-2 border-2 border-pageMenu w-full h-full overflow-hidden">
            <div className="w-full h-full p-[4%] shadow-xl overflow-hidden">
              <div className="relative grid grid-rows-6 w-full h-full overflow-hidden shadow-lg">
                <div className="flex justify-center items-center w-full h-full row-span-1 font-page font-[1000] tracking-tight text-pageMenu text-2xl sm:text-3xl md:text-3xl lg:text-4xl border-t-4 border-x-4 border-pageMenu overflow-hidden">
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1.5 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 40 5"
                    className="absolute h-[16%] overflow-hidden opacity-25"
                  >
                    <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
                  </motion.svg>
                  <span className="absolute overflow-hidden">
                    1. click on the map
                  </span>
                </div>
                <div className="w-full h-full row-span-5">
                  <FormMap
                    sateliteMap={sateliteMap}
                    sendDataToForm={handleDataFromMap}
                    initialCoordsFromEditPage={{
                      lng: form.longitude,
                      lat: form.latitude,
                    }}
                  />
                </div>
                <span className="font-page font-extrabold tracking-tight flex items-center justify-center w-full h-full bg-page2 border-b-4 border-x-4 border-pageMenu text-pageMenu overflow-hidden text-xl sm:text-2xl md:text-2l lg:text-2xl">
                  enable satellite map
                  <Switch
                    onChange={changeStyleHandler}
                    className="m-2 saturate-50 grayscale-[60%]"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-page1 col-span-12 row-span-1 md:col-span-7 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden h-full">
            <div className="w-full h-full p-[4%] md:p-[3%] lg:p-[2.8%] shadow-xl overflow-hidden">
              <div className="relative grid grid-rows-6 w-full h-full overflow-hidden shadow-lg">
                <div className="flex justify-center items-center w-full h-full row-span-1 font-page font-[1000] tracking-tight text-pageMenu text-2xl sm:text-3xl md:text-3xl lg:text-4xl border-t-4 border-x-4 border-pageMenu overflow-hidden">
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1.5 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 40 5"
                    className="absolute h-[16%] overflow-hidden opacity-25"
                  >
                    <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
                  </motion.svg>
                  <span className="absolute overflow-hidden">
                    2. fill out the form
                  </span>
                </div>
                <div className="w-full h-full row-span-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full border-4 border-pageMenu">
                      <div className="w-full h-full grid grid-cols-2">
                        <div className="saturate-[0.2] brightness-125 col-span-2 sm:col-span-1 flex items-center justify-center">
                          <TextField
                            className="w-full border-pageBlack"
                            sx={{
                              marginTop: "10px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                            }}
                            required
                            id="outlined-basic"
                            label="title"
                            variant="outlined"
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            helperText="choose a title that best describes this place (1-30 characters)"
                          />
                        </div>
                        <div className="saturate-[0.2] brightness-125 col-span-2 sm:col-span-1 flex items-center justify-center">
                          <TextField
                            className="w-full border-pageBlack"
                            sx={{
                              marginTop: "10px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                            }}
                            required
                            id="outlined-basic"
                            label="location"
                            variant="outlined"
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            helperText="e.g. city / mountain range / national park (1-30 characters)"
                          />
                        </div>
                        <div className="saturate-[0.2] brightness-125 col-span-2 sm:col-span-1 flex items-center justify-center">
                          <TextField
                            className="w-full border-pageBlack"
                            sx={{
                              marginTop: "20px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                            }}
                            required
                            id="outlined-read-only-input"
                            label="latitude"
                            InputProps={{
                              readOnly: true,
                              type: "text",
                              id: "latitude",
                              name: "latitude",
                              value: form.latitude,
                            }}
                            helperText="select coordinates on the map"
                          />
                        </div>
                        <div className="saturate-[0.2] brightness-125 col-span-2 sm:col-span-1 flex items-center justify-center">
                          <TextField
                            className="w-full border-pageBlack"
                            sx={{
                              marginTop: "20px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                            }}
                            required
                            id="outlined-read-only-input"
                            label="longitude"
                            InputProps={{
                              readOnly: true,
                              type: "text",
                              id: "longitude",
                              name: "longitude",
                              value: form.longitude,
                            }}
                            helperText="select coordinates on the map"
                          />
                        </div>
                        <div className="saturate-[0.2] brightness-125 col-span-2 sm:col-span-2 flex items-center justify-center">
                          <TextField
                            maxRows={5}
                            className="w-full border-pageBlack"
                            sx={{
                              marginTop: "10px",
                              marginRight: "20px",
                              marginBottom: "10px",
                              marginLeft: "20px",
                            }}
                            required
                            id="outlined-basic"
                            label="desciption"
                            variant="outlined"
                            type="text"
                            name="description"
                            multiline
                            value={form.description}
                            onChange={handleChange}
                            helperText="describe this place, important information about it, whether it's visited by many people or not (1-5000 characters)"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-2 flex items-center justify-center">
                          <div className="flex items-center justify-center w-full">
                            <label
                              htmlFor="dropzone-file"
                              className="flex flex-row items-center justify-center w-full mt-6 mx-6 mb-8 h-[56px] border-2 border-pageMenu border-dashed rounded-lg cursor-pointer bg-page1 dark:hover:bg-bray-800 hover:bg-page2"
                            >
                              <div className="flex flex-row items-center justify-center pt-3">
                                <svg
                                  className="w-8 h-8 mb-4 text-pageMenu mx-2"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-pageMenu">
                                  <span className="font-page font-extrabold ps-2">
                                    click to upload photos
                                  </span>
                                  <span className="font-page ps-2">
                                    {`You have uploaded ${previews.length} images`}{" "}
                                  </span>
                                </p>
                              </div>
                              <input
                                ref={fileInputRef}
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                name="files"
                                multiple
                                accept="image/*"
                                onChange={changeFormHandler}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[4%] md:p-[1.5%] w-full overflow-hidden border-2 border-pageMenu bg-page1">
          <div className="w-full h-full overflow-hidden border-4 border-pageMenu shadow-xl">
            <span className="flex w-full h-[5rem] bg-page1 overflow-hidden">
              <div className="relative flex justify-center items-center w-full h-full row-span-1 font-page font-[1000] tracking-tight text-pageMenu text-2xl sm:text-3xl md:text-3xl lg:text-4xl border-b-4 border-pageMenu overflow-hidden">
                <svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ delay: 1.5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 40 5"
                  className="absolute h-full overflow-hidden opacity-20"
                >
                  <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
                </svg>
                <span className="absolute overflow-hidden">
                  3. check your photos
                </span>
              </div>
            </span>
            <div className="w-full h-full grid grid-cols-12">
              <AnimatePresence>
                {previews.map((preview, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ type: "spring", duration: 1.2 }}
                      className="shadow-xl relative m-10 sm:m-6 items-center justify-center flex col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-[20rem] sm:h-[15rem] lg:h-[17rem] bg-page2 border-4 border-pageMenu"
                    >
                      <img
                        key={index}
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <motion.div
                        onClick={deletePreviewImagesHandler}
                        initial={{
                          backgroundColor: "rgba(255, 255, 255)",
                          opacity: 0.5,
                        }}
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255)",
                          opacity: 1,
                        }}
                        className="absolute bottom-0 flex justify-center items-center w-full h-1/4 font-page tracking-tight"
                      >
                        click to delete
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            {previews.length === 0 && (
              <span className="flex items-center justify-center py-24 w-full h-[3rem] bg-page1 text-lg">
                add photos...
              </span>
            )}
          </div>
        </div>
        {!forNewLake && (
          <div className="p-[4%] md:p-[1.5%] w-full overflow-hidden border-2 border-pageMenu bg-page1">
            <div className="w-full h-full overflow-hidden border-4 border-pageMenu shadow-lg">
              <span className="flex w-full h-[5rem] bg-page1 overflow-hidden">
                <div className="relative flex justify-center items-center w-full h-full row-span-1 font-page font-[1000] tracking-tight text-pageMenu text-2xl sm:text-3xl md:text-3xl lg:text-4xl border-b-4 border-pageMenu overflow-hidden">
                  <svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ delay: 1.5 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 40 5"
                    className="absolute h-full overflow-hidden opacity-20"
                  >
                    <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
                  </svg>
                  <span className="absolute overflow-hidden">
                    4. delete images
                  </span>
                </div>
              </span>
              <div className="w-full h-full grid grid-cols-12">
                <AnimatePresence>
                  {props.images &&
                    props.images.map((image) => {
                      return (
                        <motion.div
                          key={image.filename}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ type: "spring", duration: 1.2 }}
                          className="shadow-xl relative m-10 sm:m-6 items-center justify-center flex col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-[20rem] sm:h-[15rem] lg:h-[17rem] bg-page2 border-4 border-pageMenu"
                        >
                          <Image
                            src={image.url}
                            alt="Hello"
                            width={1000}
                            height={1000}
                            placeholder="blur"
                            blurDataURL={"/image.png"}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            initial={{
                              backgroundColor: "#EEE0C9",
                              opacity: 1,
                            }}
                            whileHover={{
                              backgroundColor: "#F1F0E8",
                              opacity: 1,
                            }}
                            className="absolute bottom-0 flex justify-center items-center w-full h-1/6"
                          >
                            <input
                              className="w-6 h-6 mx-2 flex justify-center items-center saturate-[0.2] brightness-125"
                              onChange={checkboxChangeHandler}
                              value={image.filename}
                              id={image.filename}
                              type="checkbox"
                            />
                            <label
                              className="w-full h-full flex justify-start items-center font-page tracking-tight"
                              htmlFor={image.filename}
                            >
                              remove?
                            </label>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
        {session && (
          <div className="flex justify-center items-center w-full bg-page1 h-[10rem] border-2 border-pageMenu">
            <div className="flex justify-center items-center w-full mx-5 sm:mx-7 md:mx-4 lg:mx-5 h-[70%] bg-page2 border-4 border-pageMenu shadow-lg">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="tracking-tight text-pageMenu text-2xl md:text-3xl lg:text-4xl font-extrabold font-page shadow-xl w-1/2 sm:w-1/3 h-1/2 bg-page3 rounded-lg border-4 border-pageMenu"
              >
                upload
              </motion.button>
            </div>
          </div>
        )}
      </form>
    </React.Fragment>
  );
}

export default LakeForm;
