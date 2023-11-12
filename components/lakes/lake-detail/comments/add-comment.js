import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import React, { useState } from "react";

function AddComment(props) {
  const [commentText, setCommentText] = useState("");

  function sendCommentHandler(event) {
    event.preventDefault();
    const enteredComment = commentText;
    props.onAddComment({
      text: enteredComment,
    });
    setCommentText("");
  }

  const cancelHandler = () => {
    setCommentText("");
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
