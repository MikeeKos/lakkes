import AddComment from "./add-comment";
import ListOfComments from "./list-of-comments";
import React, { useState } from "react";
import NotificationContext from "../../../../store/notification-context";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CommentsBlock(props) {
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
      setComments((oldArray) => [...oldArray, newComment]);
      console.log("IS LATEST CHANGE WORK?");
      console.log(comments);
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
    <React.Fragment>
      <div
        className={`w-full h-[8rem] ${
          showComments ? "border-b-4" : "border-b-2"
        } border-x-4 border-pageMenu flex items-center justify-center bg-page1`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          onClick={toggleCommentsHandler}
          className="w-2/3 sm:w-1/2 md:w-1/3 h-[50%] bg-page4 border-4 border-pageMenu font-page font-extrabold text-base sm:text-xl lg:text-3xl tracking-wide text-pageMenu hover:shadow-md"
        >
          <div className="flex flex-row justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#383434"
              viewBox="0 -0.5 25 25"
              className="w-10 h-10"
            >
              <path
                fill="#383434"
                d="M8.382 10.234a.75.75 0 000 1.5v-1.5zm5.765 1.5a.75.75 0 100-1.5v1.5zm-5.047.608a.75.75 0 000 1.5v-1.5zm4.326 1.5a.75.75 0 100-1.5v1.5zm-5.53-7.07a.75.75 0 10.247 1.48l-.248-1.48zm.623.699l-.002.75h.002v-.75zm5.5 0l.006-.75h-.006v.75zm3.016 3.061l-.75-.005v.005h.75zm0 3.716h-.75.75zm-.786.418a.75.75 0 101.477.262l-1.477-.262zm-8.1-6.415a.75.75 0 10-.26-1.478l.26 1.478zM5.5 10.53h.75v-.004l-.75.004zM5.5 19h-.75a.75.75 0 001.117.654L5.5 19zm3.016-1.691v-.75a.75.75 0 00-.367.096l.367.654zm5.5 0v.75h.005l-.005-.75zm3.704-2.38a.75.75 0 00-1.478-.258l1.478.258zM7.28 7.384a.75.75 0 001.478.256L7.28 7.384zM10.987 5v-.75h-.004l.004.75zm5.5 0l.006-.75h-.006V5zM19.5 8.061l-.75-.005v.005h.75zm0 3.716h-.75v.005l.75-.005zm-2.65 2.284a.75.75 0 00.261 1.478l-.26-1.478zm-8.468-2.327h5.765v-1.5H8.382v1.5zm.718 2.108h4.326v-1.5H9.1v1.5zm-.957-5.59c.124-.021.249-.031.374-.031l.004-1.5c-.21 0-.419.017-.626.051l.248 1.48zm.376-.031h5.5v-1.5h-5.5v1.5zm5.494 0a2.289 2.289 0 012.272 2.306l1.5.01a3.789 3.789 0 00-3.76-3.816l-.012 1.5zm2.272 2.311v3.716h1.5v-3.716h-1.5zm0 3.717c0 .14-.012.28-.036.417l1.477.262c.04-.225.06-.453.059-.68h-1.5zM7.889 6.773a3.799 3.799 0 00-3.139 3.762l1.5-.008a2.299 2.299 0 011.9-2.276l-.261-1.478zM4.75 10.531V19h1.5v-8.469h-1.5zm1.117 9.123l3.016-1.69-.734-1.31-3.016 1.692.734 1.308zm2.649-1.595h5.5v-1.5h-5.5v1.5zm5.505 0a3.78 3.78 0 003.699-3.13l-1.478-.258a2.28 2.28 0 01-2.23 1.888l.009 1.5zM8.758 7.64a2.28 2.28 0 012.233-1.89l-.008-1.5A3.78 3.78 0 007.28 7.384l1.478.256zm2.229-1.89h5.5v-1.5h-5.5v1.5zm5.494 0a2.289 2.289 0 012.27 2.306l1.499.01a3.789 3.789 0 00-3.757-3.816l-.012 1.5zm2.269 2.311v3.716h1.5V8.061h-1.5zm0 3.721a2.299 2.299 0 01-1.9 2.28l.261 1.477a3.8 3.8 0 003.139-3.767l-1.5.01z"
              ></path>
            </svg>
            <span>{showComments ? "hide" : "show"} comments</span>
          </div>
        </motion.button>
      </div>
      <AnimatePresence>
        {comments && showComments && (
          <div className="relative w-full h-[57rem] md:h-[38rem] md:border-b-2 md:border-pageMenu bg-page2 flex justify-center items-center md:border-x-4">
            <svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1.5 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -5 40 5"
              className="z-10 top-0 absolute h-[0rem] md:h-[4rem] overflow-hidden opacity-20"
            >
              <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
            </svg>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[57rem] md:h-[30rem] bg-page1 md:grid md:grid-cols-12 md:border-t-4 md:border-pageMenu"
            >
              <div className="w-full h-[50%] md:h-full border-b-2 md:border-b-4 border-x-4 md:border-s-0 md:border-e-2 border-pageMenu md:col-span-4">
                <div className="relative w-full h-[6rem] bg-page4 border-b-4 border-pageMenu flex items-center justify-center">
                  <span className="absolute text-center whitespace-nowrap text-4xl md:text-[2rem] lg:text-[2.8rem] font-page font-[1000] tracking-tight text-page1 overflow-hidden">
                    add comment
                  </span>
                  <span className="absolute -top-[-19px] md:-top-[-20px] lg:-top-[-19px] text-center whitespace-nowrap text-4xl md:text-[2rem] lg:text-[2.8rem] font-page font-[1000] tracking-tight text-pageMenu overflow-hidden">
                    add comment
                  </span>
                </div>
                <div className="w-full h-full py-5 overflow-hidden">
                  <AddComment onAddComment={addCommentHandler} />

                  {/* <div className="w-full h-[calc(100%-6rem)] border-4 border-pageMenu"></div> */}
                </div>
              </div>
              <div className="w-full h-[50%] md:h-full border-y-2 md:border-b-4 border-x-4 md:border-s-2 md:border-e-0 md:border-t-0 border-pageMenu md:col-span-8">
                {/* <ListOfComments /> */}
                <ListOfComments items={comments} />
              </div>
            </motion.div>
            <svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1.5 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -5 40 5"
              className="z-10 bottom-0 absolute h-[0rem] md:h-[4rem] lg:h-[3.9rem] overflow-hidden opacity-20"
            >
              <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
            </svg>
          </div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default CommentsBlock;
