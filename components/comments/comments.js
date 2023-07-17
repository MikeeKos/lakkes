import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";

function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(null);

  async function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

    if (!showComments) {
      try {
        const response = await fetch(`/api/comments/${eventId}`);

        //if response is NOT 200-299
        if (!response.ok) {
          const text = await response.text();
          throw new Error(text);
        }

        //delete later
        const data = await response.json();
        console.log("POPULATING TEST");
        console.log(data.comments);
        setComments(data.comments);
      } catch (error) {
        console.log(error);
        notificationCtx.showNotification({
          title: "Error!",
          message: "Something went wrong, when catching comments",
          status: "error",
        });
      }
    }
  }

  async function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "sending comment...",
      message: "sending comment data for verification",
      status: "pending",
    });
    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //if response is NOT 200-299
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      const data = await response.json();
      //delete later
      console.log(data);
      notificationCtx.showNotification({
        title: "success!",
        message: "successfully created new object",
        status: "success",
      });
      console.log("DATA FROM POST REQUEST");
      console.log(data.comment);
      const newComment = data.comment;
      setComments(oldArray => [...oldArray, newComment]);
      console.log("IS LATEST CHANGE WORK?")
      console.log(comments)
    } catch (error) {
      console.log(error);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when creating comment",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {comments && showComments && (
        <NewComment onAddComment={addCommentHandler} />
      )}
      {comments && showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
