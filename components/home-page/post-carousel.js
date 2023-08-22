// import { motion, useAnimation } from "framer-motion";
// import { useState, useEffect } from "react";

// function PostCarousel() {
//   const [transformx, settransformx] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     async function pageSetting() {
//       await controls.start({ x: -transformx + "%" });
//     }
//     pageSetting().catch(console.error);
//   }, []);

//   async function clickHandler() {
//     if (transformx > 50) {
//       settransformx(0);
//       await controls.start({ x: -transformx + "%" });
//       return;
//     }
//     settransformx((prevState) => prevState + 20);
//     await controls.start({ x: -transformx + "%" });
//   }

//   return (
//     <div className="m-0 relative h-full w-full overflow-hidden">
//       <motion.div
//         animate={controls}
//         onMouseDown={clickHandler}
//         className="px-10 flex gap-[4vmin] absolute h-full items-center transform translate-y-[-50%] -translate-x-[50%]"
//         // style={{
//         //   transform: `translateX(-${transformx}%)`,
//         // }}
//       >
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check1
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check2
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check3
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check4
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check5
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check6
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check7
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check8
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check9
//         </div>
//         <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
//           Check10
//         </div>

//       </motion.div>
//     </div>
//   );
// }

// export default PostCarousel;

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function PostCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // const handleResize = () => {
    //   console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
    //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // };
    // handleResize();
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  function dragHandler() {
    console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }

  return (
    <motion.div
      ref={carousel}
      className="bg-page2 w-full h-full cursor-grab overflow-hidden"
      whileDrag={{ cursor: "grabbing" }}
    >
      <motion.div
        onMouseMove={dragHandler}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="relative bg-page4 w-full h-full flex"
      >
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
        <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
          <img
            className="pointer-events-none w-full h-full rounded-[2rem]"
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
          ></img>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PostCarousel;

// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// function PostCarousel() {
//   return (
//     // App
//     <div className="w-full h-full border-8 overflow-hidden flex justify-center items-center">
//       {/* Row */}
//       <div className="relative">
//         {/* container */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ rotate: 0, scale: 1, left: "-30vw" }}
//           transition={{ type: "spring", stiffness: 260, damping: 20 }}
//           className="w-[60vw] h-[90vh] top-[-45vh] overflow-hidden absolute"
//         >
//           <img
//             className="w-full h-full"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default PostCarousel;
