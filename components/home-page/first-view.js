import React, { useState } from "react";
import CluserMap from "./cluser-map";
import MainWelcome from "./main-welcome";
import PostCarousel from "./post-carousel";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import FeaturedText from "./featured-text";
import Display from "./display";
// import CarouselSwitch from "./carousel-switch";
// import TestCarousel from "./carousel-element";
// import DefaultCarousel from "./default-carousel";

function FirstView(props) {
  const [arrowClicked, setArrowClicked] = useState("left");

  // const CluserMap = dynamic(() => import("./cluser-map"), {
  //   ssr: false,
  //   loading: () => (
  //     <div className="bg-page1 flex items-center justify-center text-pageBlack font-bold text-4xl h-full">
  //       Loading...
  //     </div>
  //   ),
  // });

  function leftArrowHandler() {
    setArrowClicked("left");
    console.log("Left arrow clicked");
  }

  function rightArrowHandler() {
    setArrowClicked("right");
    console.log("Right arrow clicked");
  }

  const leftArrow = (
    <motion.div
      onClick={leftArrowHandler}
      whileTap={{ scale: 0.7 }}
      whileHover={{ scale: 1.1 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg
        className="absolute w-full h-full right-5 opacity-0 sm:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
        ></path>
      </svg>
      <svg
        className="absolute w-full h-full opacity-100 sm:opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
        ></path>
      </svg>
      <svg
        className="absolute w-full h-full left-5 opacity-0 sm:opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M14.29 5.707a1 1 0 00-1.415 0L7.988 10.6a2 2 0 000 2.828l4.89 4.89a1 1 0 001.415-1.414l-4.186-4.185a1 1 0 010-1.415l4.182-4.182a1 1 0 000-1.414z"
        ></path>
      </svg>
    </motion.div>
  );

  const rightArrow = (
    <motion.div
      onClick={rightArrowHandler}
      whileTap={{ scale: 0.7 }}
      whileHover={{ scale: 1.1 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <svg
        className="absolute w-full h-full sm:left-5 opacity-0 sm:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M9.71 18.293a1 1 0 001.415 0l4.887-4.892a2 2 0 000-2.828l-4.89-4.89a1 1 0 00-1.415 1.414l4.186 4.185a1 1 0 010 1.415L9.71 16.879a1 1 0 000 1.414z"
        ></path>
      </svg>
      <svg
        className="absolute w-full h-full opacity-100 sm:opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M9.71 18.293a1 1 0 001.415 0l4.887-4.892a2 2 0 000-2.828l-4.89-4.89a1 1 0 00-1.415 1.414l4.186 4.185a1 1 0 010 1.415L9.71 16.879a1 1 0 000 1.414z"
        ></path>
      </svg>
      <svg
        className="absolute w-full h-full right-5 opacity-0 sm:opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#383434"
          d="M9.71 18.293a1 1 0 001.415 0l4.887-4.892a2 2 0 000-2.828l-4.89-4.89a1 1 0 00-1.415 1.414l4.186 4.185a1 1 0 010 1.415L9.71 16.879a1 1 0 000 1.414z"
        ></path>
      </svg>
    </motion.div>
  );

  return (
    <React.Fragment>
      <div className="w-full h-[30rem] bg-page1 border-2 border-pageMenu"></div>
      <div className="grid grid-cols-12 grid-row-2 h-[45rem] md:h-[30rem] w-full">
        <div className="bg-page1 col-span-12 md:col-span-4 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden h-full">
          <MainWelcome />
        </div>
        <div className="col-span-12 md:col-span-8 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden h-full">
          <CluserMap lakes={props.lakes} />
        </div>
      </div>
      <div className="grid grid-cols-12 grid-row-7 h-[45rem] w-full">
        <div className="row-span-1 col-span-12 h-full w-full">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="bg-page2 col-span-8 w-full h-full border-2 border-pageMenu overflow-hidden">
              <FeaturedText />
            </div>
            <div className="bg-page3 col-span-2 w-full h-full border-2 border-pageMenu">
              {leftArrow}
            </div>
            <div className="bg-page3 col-span-2 w-full h-full border-2 border-pageMenu">
              {rightArrow}
            </div>
          </div>
        </div>
        <div className="bg-page1 row-span-6 col-span-12 h-full w-full overflow-hidden">
          {/* <CarouselSwitch lakes={props.lakes} arrow={arrowClicked} /> */}
          <PostCarousel lakes={props.lakes} arrow={arrowClicked}/>
        </div>
      </div>
      <div className="w-full h-[40rem] border-2 border-pageMenu bg-page2">
        <Display />
      </div>
    </React.Fragment>
  );
}

export default FirstView;
