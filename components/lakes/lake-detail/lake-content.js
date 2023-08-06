import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import classes from "./lake-content.module.css";
// import Notification from "../../ui/notification";
// import { useState, useEffect } from "react";
import { useContext } from "react";
import NotificationContext from "../../../store/notification-context";
import Comments from "../../comments/comments";

function LakeContent(props) {
  console.log("___WHOLE LAKE OBJECT___");
  console.log(props.lake);
  // console.log(props.lake.images.map((el) => el.filename));
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const lakeId = router.query.lakeId;
  // const [requestStatus, setRequestStatus] = useState();
  // const [requestError, setRequestError] = useState();

  // useEffect(() => {
  //   if (requestStatus === "success" || requestStatus === "error") {
  //     const timer = setTimeout(() => {
  //       setRequestStatus(null);
  //       setRequestError(null);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [requestStatus]);

  async function deleteHandler() {
    // setRequestStatus("pending");
    notificationCtx.showNotification({
      title: "deleting...",
      message: ". . .",
      status: "pending",
    });
    try {
      const response = await fetch(`/api/user/${lakeId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      // setRequestStatus("success");
      notificationCtx.showNotification({
        title: "success!",
        message: "successfully removed object",
        status: "success",
      });
      router.push("/");
    } catch (error) {
      console.log("___client side try catch error___");
      console.log(error);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when deleting lake",
        status: "error",
      });
      // setRequestError(error.message);
      // setRequestStatus("error");
    }
  }

  // let notification;

  // if (requestStatus === "pending") {
  //   notification = {
  //     status: "pending",
  //     title: "Sending message...",
  //     message: "Your message is on its way!",
  //   };
  // }

  // if (requestStatus === "success") {
  //   notification = {
  //     status: "success",
  //     title: "Success!",
  //     message: "Message sent successfully!",
  //   };
  // }

  // if (requestStatus === "error") {
  //   notification = {
  //     status: "error",
  //     title: "Error!",
  //     message: requestError,
  //   };
  // }

  return (
    <article className={classes.content}>
      <Link href={`/list/${lakeId}/edit`}>Edit page</Link>
      <div>
        <button onClick={deleteHandler}>DELETE</button>
      </div>
      <Image
        src="/image.png"
        alt="Hello"
        width={300}
        height={200}
        placeholder="blur"
        blurDataURL={"/image.png"}
      />
      <div>
        <h2>Author: {props.lakeAuthorName}</h2>
      </div>
      <div className={classes.content}>
        <div>{props.lake.title}</div>
        <div>{props.lake.description}</div>
        <div>{props.lake.location}</div>
        <div>{props.lake.subtitle}</div>
      </div>
      {/* <div>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </div> */}
      {props.lake.images.map((image) => {
        return (
          <li key={image.filename}>
            <article>{image.filename}</article>
            <Image
              src={image.url}
              alt="Hello"
              width={300}
              height={200}
              placeholder="blur"
              blurDataURL={"/image.png"}
            />
          </li>
        );
      })}
      <Comments eventId={lakeId} />
    </article>
  );
}

export default LakeContent;
