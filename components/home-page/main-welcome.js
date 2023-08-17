import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function MainWelcome() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-full grid place-items-center"
      >
        <motion.div
          // initial={{
          //   rotate: -7,
          //   x: -12,
          //   y: 0,
          // }}
          // animate={{
          //   rotate: -18,
          //   x: -95,
          //   y: 12,
          // }}
          animate={{
            rotate: [-7, -18],
            x: [-12, -95],
            y: [0, 12],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
          }}
          className="shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)] hue-rotate-[-15deg] saturate-[0.40] absolute rounded-xl h-[60%] sm:h-[35%] md:h-[55%] lg:h-[80%] aspect-[25/35] bg-slate-950"
        >
          <Image
            src="/homepage1.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage1.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: -2,
          //   x: -6,
          //   y: 0,
          // }}
          // animate={{
          //   rotate: -6,
          //   x: -40,
          //   y: 2,
          // }}
          animate={{
            rotate: [-2, -6],
            x: [-6, -40],
            y: [0, 2],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
          }}
          className="shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)] hue-rotate-[15deg] saturate-[0.8] absolute rounded-xl h-[60%] sm:h-[35%] md:h-[55%] lg:h-[80%] aspect-[25/35] bg-slate-700 transform translate-x-[-6%] rotate-[-1deg]"
        >
          <Image
            src="/homepage2.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage2.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 2,
          //   x: 6,
          //   y: 0,
          // }}
          // animate={{
          //   rotate: 6,
          //   x: 18,
          //   y: 2,
          // }}
          animate={{
            rotate: [2, 6],
            x: [6, 18],
            y: [0, 2],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
          }}
          className="shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)] hue-rotate-[-10deg] saturate-[0.9] brightness-90  absolute rounded-xl h-[60%] sm:h-[35%] md:h-[55%] lg:h-[80%] aspect-[25/35] bg-slate-500 transform rotate-[2deg]"
        >
          <Image
            src="/homepage3.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage3.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 8,
          //   x: 6,
          //   y: 0,
          // }}
          // animate={{
          //   rotate: 15,
          //   x: 78,
          //   y: 14,
          // }}
          animate={{
            rotate: [10, 15],
            x: [16, 78],
            y: [0, 14],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
          }}
          className="shadow-[0px_4px_16px_rgba(56,52,52,0.3),_0px_8px_24px_rgba(56,52,52,0.3)] hue-rotate-[-15deg] saturate-[0.40] brightness-90 absolute rounded-xl h-[60%] sm:h-[35%] md:h-[55%] lg:h-[80%] aspect-[25/35] bg-slate-300"
        >
          <Image
            src="/homepage4.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage4.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 0,
          //   x: 0,
          //   y: 0,
          //   opacity: 0,
          // }}
          // animate={{
          //   rotate: -28,
          //   x: 95,
          //   y: -70,
          //   opacity: 1,
          // }}
          // transition={{ delay: 3 }}
          animate={{
            rotate: [0, -28],
            x: [0, 95],
            y: [0, -70],
            opacity: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
            delay: 2,
          }}
          className="shadow-[0px_4px_16px_rgba(227,244,244,0.2),_0px_8px_24px_rgba(227,244,244,0.2),_0px_16px_56px_rgba(227,244,244,0.2)] absolute rounded-lg h-[20%] sm:h-[15%] md:h-[22%] lg:h-[24%] aspect-[25/35]"
        >
          <Image
            src="/small1.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/small1.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 0,
          //   x: 0,
          //   y: 0,
          //   opacity: 0,
          // }}
          // animate={{
          //   rotate: 25,
          //   x: 65,
          //   y: 90,
          //   opacity: 1,
          // }}
          // transition={{ delay: 3 }}
          animate={{
            rotate: [0, 25],
            x: [0, 65],
            y: [0, 90],
            opacity: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
            delay: 2.5,
          }}
          className="shadow-[0px_4px_16px_rgba(227,244,244,0.2),_0px_8px_24px_rgba(227,244,244,0.2),_0px_16px_56px_rgba(227,244,244,0.2)] absolute rounded-lg h-[20%] sm:h-[15%] md:h-[22%] lg:h-[24%] aspect-[25/35]"
        >
          <Image
            src="/small2.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/small2.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 0,
          //   x: 0,
          //   y: 0,
          //   opacity: 0,
          // }}
          // animate={{
          //   rotate: 15,
          //   x: 0,
          //   y: -20,
          //   opacity: 1,
          // }}
          // transition={{ delay: 3 }}
          animate={{
            rotate: [0, 15],
            x: [0, 2],
            y: [0, -20],
            opacity: [0, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
            delay: 3,
          }}
          className="shadow-[0px_4px_16px_rgba(227,244,244,0.2),_0px_8px_24px_rgba(227,244,244,0.2),_0px_16px_56px_rgba(227,244,244,0.2)] hue-rotate-[15deg] saturate-[0.40] absolute rounded-lg h-[20%] sm:h-[15%] md:h-[22%] lg:h-[24%] aspect-[25/35]"
        >
          <Image
            src="/small3.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage4.jpg"}
            sizes="100px"
          />
        </motion.div>
        <motion.div
          // initial={{
          //   rotate: 0,
          //   x: 0,
          //   y: 0,
          //   opacity: 0,
          //   scale: 1
          // }}
          // animate={{
          //   rotate: 110,
          //   x: 60,
          //   y: 5,
          //   opacity: 1,
          //   scale: 1.5
          // }}
          // transition={{ delay: 3 }}
          animate={{
            rotate: [0, 110],
            x: [0, 60],
            y: [0, 5],
            opacity: [0, 1],
            scale: [1, 1.5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 9,
            type: "spring",
            delay: 3,
          }}
          className="absolute h-[20%] sm:h-[15%] md:h-[22%] lg:h-[24%] aspect-[25/35]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            version="1.1"
            viewBox="0 0 368.138 368.138"
          >
            <g>
              <path d="M41.085 33.082c-12.24-3.06-26.316 1.836-38.556 3.06-3.06 0-3.672 4.896 0 5.508 12.24.612 26.928 0 38.556-3.06 2.449-1.224 2.449-4.896 0-5.508zM114.525 49.606c-8.568-8.568-22.032-10.404-33.048-9.792-2.448 0-2.448 3.672 0 3.672a77.493 77.493 0 0117.136 3.672c4.896 1.836 9.18 4.284 14.076 6.12 1.836 1.224 3.672-1.836 1.836-3.672zM178.786 97.342c-2.448-5.508-7.344-10.404-12.24-14.076-4.284-4.284-9.792-7.956-14.688-11.016-1.836-1.224-3.672 1.224-1.836 2.448 4.896 3.672 9.18 7.956 12.852 12.24 4.284 4.284 7.344 9.792 11.628 14.076 1.835 2.448 5.507-.612 4.284-3.672zM191.026 135.286c-1.836-3.06-6.121-.612-4.284 2.448 1.224 3.06 3.06 6.732 4.284 9.792 1.224 4.284.611 8.568 2.447 12.24.612 1.836 3.672 1.836 4.284 0 3.061-6.732-3.059-17.748-6.731-24.48zM207.549 211.786c0-6.12 0-12.24-1.224-17.748-.612-3.06-4.284-3.06-4.284 0-.612 5.508-.612 10.404-.612 15.912s-1.224 11.016.612 16.524c.612 2.447 4.896 2.447 5.508 0 1.225-4.896.613-9.792 0-14.688zM192.862 265.642c-2.448 6.12-4.896 12.239-8.568 18.359-3.06 5.509-7.344 11.017-7.956 17.137-.612 3.06 3.672 3.672 5.508 2.447 4.896-4.283 7.345-11.628 9.792-17.748 3.061-6.12 4.896-12.239 6.12-18.359.612-3.672-4.285-4.896-4.896-1.836zM165.321 312.766c-3.672 4.283-7.344 9.18-11.016 12.852-1.836 1.836-4.284 3.672-6.732 4.896-2.448 1.224-3.672 1.224-5.508 3.672-1.224 1.836 0 4.284 1.836 4.896 5.508 1.225 10.404-4.284 14.076-7.956 4.284-4.896 7.344-10.403 10.404-16.523.613-1.837-1.836-3.673-3.06-1.837zM118.197 328.066c-3.06 2.448-6.732 4.284-10.404 4.284-3.06 0-6.732-.612-9.18 1.836-1.224 1.224-1.224 3.06 0 4.284 6.12 6.119 18.36-2.448 22.032-7.345 1.225-1.835-.611-4.284-2.448-3.059zM79.029 315.213c-4.896-.611-10.404-1.836-15.3-3.672-5.508-2.447-7.956-6.731-11.016-11.628-1.836-2.448-5.508-1.836-6.12 1.836-.612 16.524 20.196 19.584 32.436 17.748 1.836-.611 1.836-4.284 0-4.284zM48.429 274.822c-4.896-9.18-3.672-18.36-5.508-28.152-.612-2.447-4.284-2.447-4.896 0-1.836 10.404 1.224 21.42 7.344 29.988 1.224 1.836 3.673.612 3.06-1.836zM50.877 169.558c-11.016 10.404-13.464 25.705-12.852 39.78 0 2.448 4.284 2.448 4.284 0 .612-12.852 4.284-25.704 12.24-36.107 2.449-2.449-1.223-6.121-3.672-3.673zM86.374 125.494c-11.016 5.508-19.584 15.912-26.316 26.316-1.836 2.448 2.448 4.896 3.672 2.448 7.344-9.18 16.524-16.524 25.092-24.48 2.448-2.448-.001-5.508-2.448-4.284zM122.481 89.998c-8.568 0-18.36 7.344-23.868 13.464-2.448 2.448 1.224 6.12 3.672 3.672 3.06-3.06 6.732-5.508 10.404-7.344 3.672-1.836 7.956-3.06 11.628-5.508 1.836-1.224 0-4.284-1.836-4.284zM204.49 64.294c-4.896 0-9.792 1.836-14.688 2.448-6.12 1.224-12.24 1.836-17.748 4.284-3.06 1.224-1.836 5.508 1.224 4.896 5.508-1.224 11.628-1.836 17.136-2.448 4.896-.612 11.016-.612 15.3-3.672 3.06-1.224 1.835-5.508-1.224-5.508zM258.958 58.174c-7.956-1.836-17.748 0-26.316.612-3.06 0-3.06 4.284 0 4.284 8.568.612 17.748 2.448 26.316.612 3.059-.612 3.059-4.896 0-5.508zM315.874 61.234c-4.284-1.224-8.568-.612-12.853-.612-4.283 0-9.18 0-13.464.612-3.06 0-3.06 4.896 0 4.896 4.284 0 9.181 0 13.464.612 4.284 0 8.568.612 12.853-.612 2.448 0 2.448-3.672 0-4.896z"></path>
              <path d="M366.669 63.07c-7.956-7.956-15.912-15.3-24.479-22.032-6.12-4.896-15.301-14.076-23.257-13.464-3.06 0-5.508 3.672-3.672 6.732 3.672 6.12 12.24 9.792 17.748 13.464 6.732 4.896 13.464 11.016 20.196 17.136-12.24 4.896-24.48 11.628-36.108 17.748-3.672 1.836-1.224 8.568 3.061 7.344 15.3-4.896 28.764-14.688 44.676-17.748 3.671-.612 4.284-6.12 1.835-9.18z"></path>
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
}

// pageLight: "#E3F4F4",
// pageMedium: "#D2E9E9",
// pageStrong: "#C4DFDF",
// pageSuperStrong: "#A3CDCD",

export default MainWelcome;
