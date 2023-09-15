import React from "react";
import CluserMap from "../home-page/cluser-map";
import { motion } from "framer-motion";
import ImageCarousel from "./image-carousel";
import Link from "next/link";

function List(props) {
  const lakes = props.lakes;
  // lakes.map((el) => {
  //   return (
  //     el.images.map((imgs) => {
  //       return (
  //         console.log(imgs.url)
  //       )
  //     })
  //   )
  // })

  function extractLastWord(input) {
    const words = input.split(/\s+/);
    return words[words.length - 1];
  }

  const lakesInPoland = [];
  lakes.map((el) => {
    const country = extractLastWord(el.subtitle);
    if (country !== "Poland") {
      return;
    }
    lakesInPoland.push(country);
  });
  console.log(lakesInPoland);

  const handleText =
    "↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes ↓ all lakes";

  const listSlider = (
    <div className="w-full h-[6rem] overflow-hidden bg-page2">
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <motion.span
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 90,
            delay: 5,
          }}
          className="whitespace-nowrap absolute bottom-[1px] text-7xl font-page font-[1000] tracking-tight text-page1 overflow-hidden"
        >
          {handleText}
        </motion.span>
        <motion.span
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 90,
            delay: 5,
          }}
          className="opacity-90 whitespace-nowrap absolute text-7xl font-page font-[1000] tracking-tight text-pageBlack overflow-hidden"
        >
          {handleText}
        </motion.span>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {/* <div className="bg-page3 w-full h-[10rem] border-2 border-pageMenu">
        <span>Hello</span>
      </div> */}
      <div className="border-2 border-pageMenu">{listSlider}</div>
      <div className="w-full h-[30rem] md:h-[20rem] bg-page2 md:bg-page1 border-2 border-pageMenu">
        <div className="w-full h-full md:grid md:grid-cols-12">
          <div className="w-full h-[20rem] md:h-full md:col-span-11">
            <CluserMap lakes={props.lakes}/>
          </div>
          <div className="w-full h-[10rem] md:h-full md:col-span-1">
            <div className="flex w-full h-full md:grid md:grid-rows-2">
              <div className="flex items-center justify-center w-1/2 md:w-full h-full md:row-span-1 border-e-2 border-t-4 md:border-0 md:border-b-2 md:border-s-4 border-pageMenu">
                +
              </div>
              <div className="flex items-center justify-center w-1/2 md:w-full h-full md:row-span-1 border-s-2 border-t-4 md:border-0 md:border-t-2 md:border-s-4 border-pageMenu">
                -
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] grid grid-cols-12 grid-rows-6 border-b-2 border-t-2 border-pageMenu bg-page1">
        <div className="col-span-5 row-span-1 flex ps-3 justify-start items-center font-page tracking-wide text-pageMenu">
          {" "}
          / ⇨ /list
        </div>
        <div className="col-span-7 row-span-1"></div>
        <div className="col-span-8 row-span-2 font-page tracking-wider font-extrabold ps-3 text-pageMenu flex justify-start items-center">
          <span className="text-3xl sm:text-4xl">list of lakes</span>
        </div>
        <div className="col-span-4 row-span-2">
          <div className="w-full h-full p-3">
            <div className="hover:scale-105 duration-100 w-full h-full border-4 bg-page2 border-pageMenu flex justify-center items-center shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_24px_rgba(17,17,26,0.05),_0px_16px_56px_rgba(17,17,26,0.05)]">
              <Link
                href={"/add"}
                className="text-pageMenu font-page text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-2xl"
              >
                add lake
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-8 row-span-1 flex ps-3 justify-start items-center font-page tracking-wide text-pageMenu">
          number of lakes:{" "}
          <span className="font-bold ps-1">{lakes.length}</span>
        </div>
        <div className="col-span-4 row-span-1"></div>
        <div className="col-span-12 row-span-2 flex justify-center items-center underline font-page ">
          <span>lakes on page: &#40; {lakes.length} &#41;</span>
          <span className="ps-3">
            lakes in Poland: &#40; {lakesInPoland.length} &#41;
          </span>
        </div>
      </div>
      {/* <div className="w-full h-[25rem] border-2 border-pageMenu">
        <CluserMap lakes={lakes} />
      </div> */}
      <div className="w-full h-full bg-page2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-pageMenu">
          {lakes.map((el) => {
            return (
              <div
                key={el._id}
                className="bg-page2 shadow-[0px_4px_16px_rgba(17,17,26,0.2),_0px_8px_24px_rgba(17,17,26,0.2),_0px_16px_56px_rgba(17,17,26,0.2)] w-[full] aspect-[3/4] border-4 border-pageMenu my-8 mx-14 sm:my-6 sm:mx-8 md:mx-14 md:my-12 lg:my-9 lg:mx-14"
              >
                <ImageCarousel lake={el} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default List;
