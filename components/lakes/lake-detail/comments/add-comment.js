import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import React, { useRef, useState, useContext } from "react";
import NotificationContext from "../../../../store/notification-context";

function AddComment(props) {
  const notificationCtx = useContext(NotificationContext);
  const [isInvalid, setIsInvalid] = useState(false);

  // const emailInputRef = useRef();
  // const nameInputRef = useRef();
  // const commentInputRef = useRef();
  const [commentText, setCommentText] = useState("");

  function sendCommentHandler(event) {
    event.preventDefault();

    // const enteredEmail = emailInputRef.current.value;
    // const enteredName = nameInputRef.current.value;
    // const enteredComment = commentInputRef.current.value;
    const enteredComment = commentText;

    console.log(enteredComment);

    //client side validation
    // if (
    //   !enteredEmail ||
    //   enteredEmail.trim() === "" ||
    //   !enteredEmail.includes("@") ||
    //   !enteredName ||
    //   enteredName.trim() === "" ||
    //   !enteredComment ||
    //   enteredComment.trim() === ""
    // ) {
    //   setIsInvalid(true);
    //   return;
    // }

    props.onAddComment({
      // email: enteredEmail,
      // name: enteredName,
      text: enteredComment,
    });

    setCommentText("");
  }

  const cancelHandler = () => {
    setCommentText("");
    // notificationCtx.showNotification({
    //   title: "success!",
    //   message: "successfully cancelled comment and added comment to database hello",
    //   status: "pending",
    // });
  };

  const changeHandler = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <React.Fragment>
      <form
        className="w-full h-[calc(100%-6rem)] flex flex-col items-center justify-center px-5"
        onSubmit={sendCommentHandler}
      >
        <TextField
          // maxRows={8}
          rows={8}
          className="w-full h-full border-pageBlack saturate-[0.2] brightness-125"
          sx={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "10px",
            marginLeft: "20px",
          }}
          required
          id="outlined-basic"
          label="add your comment"
          variant="outlined"
          type="text"
          multiline
          value={commentText}
          onChange={changeHandler}
          // inputRef={commentInputRef}
        />
        <div className="w-full h-full flex flex-row">
          <motion.span
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="me-2 hover:shadow-2xl duration-100 rounded-md border-4 border-pageMenu w-full py-4 mb-5 md:mb-8 flex justify-center bg-page2"
            onClick={cancelHandler}
          >
            <span className="text-center text-2xl md:text-xl lg:text-2xl font-page font-[1000] tracking-tight text-pageMenu hover:cursor-pointer">
              cancel
            </span>
          </motion.span>
          <motion.span
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="ms-2 hover:shadow-2xl duration-100 rounded-md border-4 border-pageMenu w-full py-4 mb-5 md:mb-8 flex justify-center bg-page4"
          >
            <button className="text-center text-2xl md:text-xl lg:text-2xl font-page font-[1000] tracking-tight text-pageMenu">
              comment
            </button>
          </motion.span>
        </div>
      </form>
    </React.Fragment>
  );
}

export default AddComment;

{
  /* <div className="w-full h-[calc(100%-6rem)] border-4 border-pageMenu"></div> */
}
