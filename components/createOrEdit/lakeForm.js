// props.lakeForm is:
//   title: "...",
//   description: "...",
//   location: "...",
// if forNewLake is equal to true, then this form is used for creating new object
// otherwise it renders data in <input />'s elements and functions as edit form

import { useState, useEffect } from "react";
import classes from "./lakeForm.module.css";
import Notification from "../ui/notification";
import { useRouter } from "next/router";
import { mutate } from "swr";

function LakeForm(props) {
  const router = useRouter();
  const formId = props.formId;
  const lakeForm = props.lakeForm;
  const forNewLake = props.forNewLake; // true or false

  const [form, setForm] = useState({
    title: lakeForm.title,
    description: lakeForm.description,
    location: lakeForm.location,
  });

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  //clear notification after 3 seconds
  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //for creating new lake object (POST)
  async function postData(form) {
    setRequestStatus("pending");
    try {
      const response = await fetch("/api/user/lake-functions", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      //delete later
      const data = await response.json();
      console.log(data);
      setRequestStatus("success");
      router.push(`/list/${data.data._id}`);
    } catch (error) {
      console.log(JSON.parse(error.message).message.message);
      setRequestError("Something went wrong, when creating lake");
      setRequestStatus("error");
    }
  }

  //for editing existing lake object (PUT)
  async function putData(form) {
    const { lakeId } = router.query;

    try {
      const response = await fetch(`/api/user/${lakeId}`, {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      const { data } = await response.json();
      mutate(`/api/user/${lakeId}`, data, false); // Update the local data without a revalidation
      router.push(`/list/${lakeId}`);
    } catch (error) {
      console.log(JSON.parse(error.message).message);
      setRequestError("Something went wrong, when editing lake");
      setRequestStatus("error");
    }
  }

  //if there aren't any errors, then depending on forNewLake prop decide if it is for creating or editing
  function submitHandler(event) {
    event.preventDefault();
    const errors = formValidate();
    if (Object.keys(errors).length === 0) {
      forNewLake ? postData(form) : putData(form);
    } else {
      setRequestError("Bad user data");
      setRequestStatus("error");
    }
  }

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
    return err;
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending...",
      message: "Creating lake",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Lake has been created successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Lake form</h1>
      <form className={classes.form} id={formId} onSubmit={submitHandler}>
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
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default LakeForm;
