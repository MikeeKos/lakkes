import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";

function CarouselElement(props) {
  const num = props.lakeNumber;
  // const firstObj = [];
  // props.lakes[num].images.map((img) => {
  //   firstObj.push(img.url);
  // });

  // const lakeObj = props.lakes[num];
  const firstObj = [];
  props.lakes[num].images.map((img) => {
    firstObj.push(img.url);
  });

  // console.log(firstObj.length);
  // console.log("___Object___");
  // console.log(lakeObj);

  // props.lakes[1].images.map((img) => {
  //   secondObj.push(img.url)
  // });

  // props.lakes[2].images.map((img) => {
  //   thirdObj.push(img.url)
  // });

  // console.log(firstObj);

  const [count, setCount] = useState(0);
  const [ref, { width }] = useMeasure();
  const [tuple, setTuple] = useState([null, count]);

  if (tuple[1] !== count) {
    setTuple([tuple[1], count]);
  }

  const prev = tuple[0];

  const direction = count > prev ? "increasing" : "decreasing";

  function increaseCounter() {
    if (count >= 0 && count < firstObj.length - 1) {
      setCount(count + 1);
    } else {
      setCount(firstObj.length - 1);
    }
  }

  function decreaseCounter() {
    if (count > 0 && count < firstObj.length) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="relative text-4xl text-pageMenu w-full h-full">
      <div className="absolute z-10 flex justify-between w-full h-full">
        <button
          className={` ${
            count > 0 && count < firstObj.length ? "opacity-100" : "opacity-0"
          } flex items-center justify-start h-full w-1/2`}
          onClick={decreaseCounter}
        >
          <motion.div
            whileTap={{ scale: 1.5 }}
            className="mx-1 sm:mx-2 w-8 h-8 bg-page2 rounded-full flex justify-center items-center shadow-2xl"
          >
            <svg
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
        </button>
        <button
          className={` ${
            count >= 0 && count < firstObj.length - 1
              ? "opacity-100"
              : "opacity-0"
          } flex items-center justify-end h-full w-1/2`}
          onClick={increaseCounter}
        >
          <motion.div
            whileTap={{ scale: 1.5 }}
            className="mx-1 sm:mx-2 w-8 h-8 bg-page2 rounded-full flex justify-center items-center shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#383434"
                d="M9.71 18.293a1 1 0 001.415 0l4.887-4.892a2 2 0 000-2.828l-4.89-4.89a1 1 0 00-1.415 1.414l4.186 4.185a1 1 0 010 1.415L9.71 16.879a1 1 0 000 1.414z"
              ></path>
            </svg>
          </motion.div>
        </button>
      </div>
      <div className="flex justify-center w-full h-full">
        <div
          ref={ref}
          className="relative flex w-full h-full bg-page3 items-center justify-center overflow-hidden"
        >
          <AnimatePresence custom={{ direction, width }}>
            <motion.div
              key={count}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              //whatever you pass in custom will end up in variants
              custom={{ direction, width }}
              // transition={{ duration: 0.5 }}
              className="contrast-[0.80] grayscale-[15%] brightness-110 absolute flex justify-center items-center w-full h-full"
            >
              <Image
                src={firstObj[count]}
                alt="Image"
                placeholder="blur"
                height={1000}
                width={1000}
                blurDataURL={firstObj[count]}
                className="w-full h-full object-cover"
              />
              {/* <Image
            src="/homepage2.jpg"
            alt="Image"
            placeholder="blur"
            fill={true}
            style={{ borderRadius: "10px", overflow: "hidden" }}
            blurDataURL={"/homepage2.jpg"}
            sizes="1000px"
            // sizes="100px"
          /> */}
              {/* <img className="w-full h-full object-cover" src={firstObj[count]} alt="..."/> */}
              {/* {count} */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({
    x: direction === "increasing" ? width : -width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction === "increasing" ? -width : width,
  }),
};

let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];

export default CarouselElement;
