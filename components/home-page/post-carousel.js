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

// import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// function PostCarousel() {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();

//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     // const handleResize = () => {
//     //   console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     // };
//     // handleResize();
//     // window.addEventListener("resize", handleResize);
//     // return () => {
//     //   window.removeEventListener("resize", handleResize);
//     // };
//   }, []);

//   function dragHandler() {
//     console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }

//   return (
//     <motion.div
//       ref={carousel}
//       className="bg-page2 w-full h-full cursor-grab overflow-hidden"
//       whileDrag={{ cursor: "grabbing" }}
//     >
//       <motion.div
//         onMouseMove={dragHandler}
//         drag="x"
//         dragConstraints={{ right: 0, left: -width }}
//         className="relative bg-page4 w-full h-full flex"
//       >
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//         <motion.div className="min-h-[20rem] min-w-[15rem] w-1/3 p-10">
//           <img
//             className="pointer-events-none w-full h-full rounded-[2rem]"
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80"
//           ></img>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default PostCarousel;

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function PostCarousel(props) {
  // const carouselArray = props.lakes.slice(0, 3);
  // console.log(carouselArray);
  return (
    <React.Fragment>
      <div className="w-full h-full grid grid-cols-12 grid-rows-2">
        <div className="p-[2%] col-span-12 row-span-1 sm:col-span-6 sm:row-span-2 border-2 border-pageMenu">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-page">
            <div className="relative overflow-hidden row-span-8 col-span-5 sm:row-span-5 sm:col-span-8 bg-page3">
              <div className="absolute w-full h-full bg-pageBlack">
                {/* <Image src="/homepage1.jpg" width={1000} height={1000} style={{objectFit:"cover"}} className="w-[100%] h-[100%]"/> */}
              </div>
            </div>
            <div className="row-span-8 col-span-3 sm:row-span-3 sm:col-span-8 bg-page4"></div>
          </div>
        </div>
        <div className="p-[2%] col-span-6 row-span-1 sm:col-span-6 sm:row-span-1 border-2 border-pageMenu">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-page">
            <div className="col-span-8 row-span-5 md:col-span-5 md:row-span-8 bg-page3"></div>
            <div className="col-span-8 row-span-3 md:col-span-3 md:row-span-5 bg-page4"></div>
          </div>
        </div>
        <div className="p-[2%] col-span-6 row-span-1 sm:col-span-6 sm:row-span-1 border-2 border-pageMenu">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-page">
            <div className="col-span-8 row-span-5 md:col-span-5 md:row-span-8 bg-page3"></div>
            <div className="col-span-8 row-span-3 md:col-span-3 md:row-span-5 bg-page4"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostCarousel;
