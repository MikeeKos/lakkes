import { useState, useEffect } from "react";
import classes from "./create-lake.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/user/add-lake", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function CreateLakeForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("image.png");
  const [enteredExcerpt, setEnteredExcerpt] = useState("Lorem ipsum dolor");
  const [enteredDate, setEnteredDate] = useState("2022-02-10");
  const [enteredSlug, setEnteredSlug] = useState("");

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendFormHandler(event) {
    event.preventDefault();

    //add client side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        title: enteredTitle,
        image: enteredImage,
        excerpt: enteredExcerpt,
        date: enteredDate,
        slug: enteredSlug,
      });
      setRequestStatus("success");
      setEnteredTitle("");
      setEnteredImage("image.png");
      setEnteredExcerpt("Lorem ipsum dolor");
      setEnteredDate("2022-02-10");
      setEnteredSlug("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
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
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendFormHandler}>
        <div className={classes.controls}>
          {/* title: enteredTitle,
        image: enteredImage,
        excerpt: enteredExcerpt,
        date: enteredDate,
        slug: enteredSlug, */}
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              required
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              required
              value={enteredImage}
              onChange={(event) => setEnteredImage(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="excerpt">Excerpt</label>
            <input
              type="text"
              id="excerpt"
              required
              value={enteredExcerpt}
              onChange={(event) => setEnteredExcerpt(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              required
              value={enteredDate}
              onChange={(event) => setEnteredDate(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              id="slug"
              required
              value={enteredSlug}
              onChange={(event) => setEnteredSlug(event.target.value)}
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

export default CreateLakeForm;
