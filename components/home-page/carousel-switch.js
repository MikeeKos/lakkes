// import PostCarousel from "./post-carousel";
// import { AnimatePresence, motion } from "framer-motion";
// import SecondElement from "./second-element";

// function CarouselSwitch(props) {
//   const direction = props.arrow;
//   return (
//     <div className="w-full h-full border-2 border-pageMenu">
//       {direction === "left" && (
//         <div className="w-full h-full">
//           <motion.div
//             className="w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 2 }}
//           >
//             <PostCarousel lakes={props.lakes} />
//           </motion.div>
//         </div>
//       )}
//       {direction === "right" && (
//         <div className="w-full h-full">
//           <motion.div
//             className="w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 3 }}
//           >
//             <SecondElement />
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CarouselSwitch;
