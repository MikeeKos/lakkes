import React, { useState } from "react";
import CluserMap from "../home-page/cluser-map";
import { motion } from "framer-motion";
import ImageCarousel from "./image-carousel";
import Link from "next/link";
import ListClusterMap from "./list-cluster-map";

function List(props) {
  // const [zoomLevel, setZoomLevel] = useState(5);
  const [sateliteMap, setSateliteMap] = useState(false);

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
    <div className="w-full h-[5rem] overflow-hidden bg-page2">
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
          className="whitespace-nowrap absolute bottom-[-3px] text-7xl font-page font-[1000] tracking-tight text-page1 overflow-hidden"
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

  // const zoomInHandler = () => {
  //   setZoomLevel((prevLevel) => prevLevel + 1);
  // }

  const normalMapSVG = (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="#383434"
    //   viewBox="0 0 24 24"
    //   className="hover:scale-110 duration-100 w-[80%] h-[80%] sm:w-[70%] sm:h-[70%] md:w-[70%] md:h-[70%]"
    // >
    //   <g fill="#000" fillRule="evenodd" clipRule="evenodd">
    //     <path d="M4 11a7 7 0 1114 0 7 7 0 01-14 0zm7-9a9 9 0 105.618 16.032l3.675 3.675a1 1 0 001.414-1.414l-3.675-3.675A9 9 0 0011 2z"></path>
    //     <path d="M10 14a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8a1 1 0 10-2 0v2H8a1 1 0 100 2h2v2z"></path>
    //   </g>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="hover:scale-110 duration-100 w-[80%] h-[80%] sm:w-[70%] sm:h-[70%] md:w-[70%] md:h-[70%] hover:cursor-pointer"
      onClick={() => setSateliteMap(false)}
    >
      <g stroke="#383434" strokeLinecap="round">
        <path
          strokeWidth={2}
          d="M8.574 20.352l3.381-6.763a.05.05 0 01.09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 00-.05 0l-3.332 1.904c-.043.025-.091-.021-.07-.066zM20.5 18.5l-4-15M3.5 18.5l4-15M12 10.5v-2M12 5.5v-2"
        ></path>
      </g>
    </svg>
  );

  const sateliteMapSVG = (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="#383434"
    //   viewBox="0 0 20 20"
    //   className="hover:scale-110 duration-100 w-[80%] h-[80%] sm:w-[70%] sm:h-[70%] md:w-[70%] md:h-[70%]"
    // >
    //   <path
    //     fill="#000"
    //     fillRule="evenodd"
    //     d="M9 4a5 5 0 100 10A5 5 0 009 4zM2 9a7 7 0 1112.6 4.2.999.999 0 01.107.093l3 3a1 1 0 01-1.414 1.414l-3-3a.999.999 0 01-.093-.107A7 7 0 012 9zm10.5 0a1 1 0 00-1-1h-5a1 1 0 100 2h5a1 1 0 001-1z"
    //   ></path>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="hover:scale-110 duration-100 w-[80%] h-[80%] sm:w-[70%] sm:h-[70%] md:w-[70%] md:h-[70%] hover:cursor-pointer"
      onClick={() => setSateliteMap(true)}
      fill="#383434"
    >
      <path d="M18 10a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zm-1.15 8.47a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 22h18a1 1 0 00.85-1.53zM10.45 20H4.74L10 11l2.94 5-1.25 2zm2.35 0l1.49-2.37.71-1.06 1-1.68L19.2 20z"></path>
    </svg>
  );

  return (
    <React.Fragment>
      {/* <div className="bg-page3 w-full h-[10rem] border-2 border-pageMenu">
        <span>Hello</span>
      </div> */}
      <div className="border-2 border-pageMenu">{listSlider}</div>
      <div className="w-full h-[48.1rem] md:h-[38.1rem] bg-page1 border-2 border-pageMenu p-5 overflow-hidden">
        <div className="w-full h-full border-2 border-pageMenu shadow-xl">
          <div className="w-full h-[30rem] md:h-[20rem] grid grid-cols-12">
            <div className="relative w-full h-full col-span-2 border-2 border-pageMenu flex items-center justify-center lg:hover:bg-pageMenu lg:duration-700">
              <span className="underline underline-offset-6 absolute w-full h-full flex items-center justify-center rotate-[270deg] font-page tracking-wide font-extrabold text-2xl sm:text-3xl md:text-xl text-pageMenu whitespace-nowrap lg:opacity-0">
                find your perfect place
              </span>
              <span className="absolute w-full h-full flex items-center justify-center font-page tracking-wider font-extrabold lg:text-4xl text-pageMenu opacity-0 lg:opacity-100 px-5 hover:text-page1 lg:duration-700">
                find your perfect place
              </span>
            </div>
            <div className="w-full h-full col-span-10 border-2 border-pageMenu">
              <div className="w-full h-[30rem] md:h-[20rem] bg-page2 md:bg-page1">
                <div className="w-full h-full md:grid md:grid-cols-12">
                  <div className="w-full h-[25rem] md:h-full md:col-span-11 bg-page1 md:border-b-2 md:border-pageMenu">
                    {/* <CluserMap lakes={props.lakes} /> */}
                    <ListClusterMap
                      lakes={props.lakes}
                      sateliteMap={sateliteMap}
                    />
                  </div>
                  <div className="w-full h-[5rem] md:h-full md:col-span-1">
                    <div className="flex w-full h-full md:grid md:grid-rows-2">
                      <div className="flex items-center justify-center w-1/2 md:w-full h-full md:row-span-1 border-e-2 border-t-4 md:border-0 md:border-b-2 md:border-s-4 border-pageMenu">
                        {normalMapSVG}
                      </div>
                      <div className="flex items-center justify-center w-1/2 md:w-full h-full md:row-span-1 border-s-2 border-t-4 md:border-0 md:border-t-2 md:border-s-4 border-pageMenu">
                        {sateliteMapSVG}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[15rem] grid grid-cols-12">
            <div className="w-full h-full col-span-2 border-2 border-pageMenu border-b-4 flex items-center justify-center bg-page1 hover:bg-page2 md:bg-page2 duration-500 border-t-4">
              <Link href="#lakes">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 0 20 20"
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                >
                  <g>
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g fill="#383434" transform="translate(-420 -760)">
                        <g transform="translate(56 160)">
                          <path d="M369.277 604c.583 0 1.055-.448 1.055-1v-2c0-.552-.472-1-1.055-1-.582 0-1.055.448-1.055 1v2c0 .552.473 1 1.055 1m4.02 10.464l-1.915 1.683c-.332.315-1.05.092-1.05-.354v-5.136c0-.553-.472-1-1.055-1-.582 0-1.055.447-1.055 1v5.134c0 .446-.419.669-.75.354l-1.746-1.681a1.02 1.02 0 00-1.431 0c-.413.39-.382 1.024.03 1.415l3.37 3.18.385.356c.824.78 2.166.78 2.989 0l3.739-3.537a.963.963 0 00.012-1.414 1.138 1.138 0 00-1.523 0m9.48-6.104l-4.123 2.156a1.088 1.088 0 01-1.33-.122.973.973 0 01.137-1.524l1.259-.87h-8.963c-.582 0-1.059-.414-1.059-.967 0-.71.679-.967 1.05-.967l5.314-.007.404-4.318c.337-.957 1.284-1.526 2.327-1.328l3.744.332c.986.187 1.456 1.008 1.456 1.961v4.835c0 .329.07.633-.217.819"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </motion.svg>
              </Link>
            </div>
            <div className="w-full h-full col-span-10 border-2 border-pageMenu">
              <div className="w-full h-[15rem] grid grid-cols-12 grid-rows-6 border-b-2 border-t-2 border-pageMenu bg-page1">
                <div className="col-span-5 row-span-1 flex ps-3 justify-start items-center font-page tracking-wide text-pageMenu">
                  {" "}
                  / ⇨ /list
                </div>
                <div className="col-span-7 row-span-1"></div>
                <div className="col-span-8 row-span-2 font-page tracking-wider font-extrabold ps-3 text-pageMenu flex justify-start items-center">
                  <span className="text-2xl sm:text-4xl">list of lakes</span>
                </div>
                <div className="col-span-4 row-span-2">
                  <div className="w-full h-full p-3">
                    <Link
                      href={"/add"}
                      className="hover:scale-105 active:scale-95 duration-300 w-full h-full border-4 bg-page2 border-pageMenu flex justify-center items-center shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_24px_rgba(17,17,26,0.05),_0px_16px_56px_rgba(17,17,26,0.05)]"
                    >
                      <div className="text-pageMenu font-page text-md sm:text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-2xl">
                        add
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-span-8 row-span-1 flex ps-3 justify-start items-center font-page tracking-wide text-pageMenu">
                  number of lakes:{" "}
                  <span className="font-bold ps-1">{lakes.length}</span>
                </div>
                <div className="col-span-4 row-span-1"></div>
                <div className="col-span-12 row-span-2 flex justify-center items-center underline font-page text-xs sm:text-base">
                  <span>lakes on page: &#40; {lakes.length} &#41;</span>
                  <span className="ps-3">
                    lakes in Poland: &#40; {lakesInPoland.length} &#41;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[25rem] border-2 border-pageMenu">
        <CluserMap lakes={lakes} />
      </div> */}
      <div className="w-full h-full bg-page2" id="lakes">
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
      <div className="w-full h-[0rem] md:h-[5rem] md:border-y-2 md:border-x-2 md:border-pageMenu bg-page1 overflow-hidden flex justify-center items-center">
        <svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -5 40 5"
          className="absolute h-[0rem] md:h-[5rem] overflow-hidden opacity-20"
        >
          <path d="M0 0l2-5h2L2 0H0m4 0l2-5h2L6 0H4m4 0l2-5h2l-2 5H8m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2m4 0l2-5h2l-2 5h-2"></path>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default List;
