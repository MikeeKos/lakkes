import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function Display() {
  const [offset, setOffset] = useState(0);
  const [dragField, setDragField] = useState(0);

  const wrapperRef = useRef(null);
  const dragFieldRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(dragFieldRef);

  if (isInView) {
    console.log("isInView Fired");
  } else {
    console.log("is not in view now");
  }

  useEffect(() => {
    const updateOffset = () => {
      if (wrapperRef.current && contentRef.current) {
        const { width } = wrapperRef.current.getBoundingClientRect();

        const offSetWidth = contentRef.current.scrollWidth;
        const newOffset = offSetWidth - width;

        setOffset(newOffset);
        setDragField(offSetWidth);
      }
    };

    // Set Initial Value
    updateOffset();

    // Check for resizing Events.
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center shadow-[inset_0_-12px_24px_rgba(0,0,0,0.2)]">
      <AnimatePresence>
        {!isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.25 }}
            className="absolute w-full h-full bg-page1 z-20 flex items-center justify-center shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]"
          >
            <div className="w-full h-full grid grid-rows-2 grid-cols-2">
              <div className="w-full h-full col-span-2 row-span-1 border-b-4 border-pageMenu flex items-center justify-center">
                <span className="font-body text-pageMenu text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wide font-extrabold">
                  how to contribute?
                </span>
              </div>
              <div className="w-full h-full col-span-1 row-span-1 border-e-4 border-pageMenu bg-page2 flex items-center justify-center shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
                <motion.span
                  animate={{
                    scale: [1, 0.95],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 0.8,
                  }}
                  className="font-body text-pageMenu text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wide font-extrabold"
                >
                  3... 2... 1...
                </motion.span>
              </div>
              <div className="w-full h-full col-span-1 row-span-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-24 h-24 sm:w-48 sm:h-48"
                >
                  <path
                    stroke="#383434"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 16.584V19a2 2 0 104 0v-2.416M12 3v1m6.364 1.636l-.707.707M5.636 5.636l.707.707M4 12H3m18 0h-1m-3 0a5 5 0 11-10 0 5 5 0 0110 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={wrapperRef} className="w-full overflow-hidden relative">
        <div
          ref={dragFieldRef}
          className="h-full absolute top-0 left-0 pointer-events-none"
          style={{
            left: `-${offset}px`,
            width: `${dragField}px`,
          }}
        ></div>
        <motion.div
          ref={contentRef}
          drag={offset > 0 ? "x" : undefined}
          dragConstraints={dragFieldRef}
          className="flex gap-4 relative hover:cursor-grab px-2"
        >
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-pageMenu m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="relative w-full h-full row-span-2"></div>
              <div className="relative w-full h-full row-span-2">
                <span className="hover:scale-105 duration-150 w-full font-page text-4xl text-page1 font-extrabold tracking-wider flex items-center justify-center text-center">
                  how to contribute?
                </span>
              </div>
              <div className="relative w-full h-full row-span-2">
                <div className="absolute w-full h-full flex items-center justify-center bottom-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#F1F0E8"
                    className="w-24 h-24 rotate-[10deg] hover:rotate-[-15deg] hover:scale-95 duration-200"
                  >
                    <path d="M1.294 5.292l4-4a1 1 0 011.413 1.415L4.414 5H9a1 1 0 010 2H4.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 01.001-1.415zm19.15 3.315A5.025 5.025 0 0017.98 8h-3.947V4.111a3.088 3.088 0 00-2.51-3.071 3.055 3.055 0 00-2.033.38 1 1 0 001.02 1.721 1 1 0 01.694-.126 1.088 1.088 0 01.829 1.1V9a1 1 0 001 1h4.947a3.024 3.024 0 011.484.351 2.946 2.946 0 011.507 2.994l-.422 2.942a6.824 6.824 0 01-1.925 3.839 2.985 2.985 0 01-2.118.874h-6.068a2.985 2.985 0 01-2.118-.874L5.294 17.11a1 1 0 01.134-1.526 1.1 1.1 0 011.37.19l1.514 1.509a1 1 0 001.706-.708V10a1 1 0 00-2 0v4.182a3.087 3.087 0 00-3.756-.223 3 3 0 00-.38 4.567l3.027 3.016A4.966 4.966 0 0010.438 23h6.068a4.972 4.972 0 003.53-1.458 8.833 8.833 0 002.492-4.972l.422-2.942a4.931 4.931 0 00-2.506-5.021z"></path>
                  </svg>
                </div>
              </div>
            </span>
          </motion.div>
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-page2 m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="w-full h-full row-span-4 p-3">
                <div className="relative w-full h-full bg-pageMenu rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-24 h-24"
                    >
                      <path
                        stroke="#F1F0E8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 16.584V19a2 2 0 104 0v-2.416M12 3v1m6.364 1.636l-.707.707M5.636 5.636l.707.707M4 12H3m18 0h-1m-3 0a5 5 0 11-10 0 5 5 0 0110 0z"
                      ></path>
                    </svg>
                  </div>
                  <Image
                    src="/homepage1.jpg"
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={"/homepage1.jpg"}
                    className="absolute w-full h-full object-cover hue-rotate-[10deg] saturate-[0.7] brightness-[90%] scale-105 grayscale-[50%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-full row-span-2">
                <span className="w-full font-page text-2xl text-pageMenu font-extrabold tracking-wide flex items-center justify-center">
                  title
                </span>
                <span className="absolute px-5 w-full h-full font-page text-[12px] text-pageMenu">
                  Find a suitable name for the place you have discovered. Title
                  should briefly describe your lake. Use few words only.
                </span>
              </div>
            </span>
          </motion.div>
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-page2 m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="w-full h-full row-span-4 p-3">
                <div className="relative w-full h-full bg-pageMenu rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-16 h-16"
                    >
                      <g>
                        <g
                          fill="#F1F0E8"
                          fillRule="evenodd"
                          stroke="none"
                          strokeWidth="1"
                        >
                          <g fill="#F1F0E8" transform="translate(-60 -4999)">
                            <g transform="translate(56 160)">
                              <path d="M10 4843h4v-2h-4v2zm8 7a1 1 0 01-1 1H7a1 1 0 01-1-1v-4a1 1 0 011-1h10a1 1 0 011 1v4zm4-11H5a1 1 0 000 2h3v2H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2v-2h4.997c.554 0 1.003.449 1.003 1.003V4858a1 1 0 002 0v-17a2 2 0 00-2-2z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <Image
                    src="/homepage2.jpg"
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={"/homepage2.jpg"}
                    className="absolute w-full h-full object-cover hue-rotate-[10deg] saturate-[0.7] brightness-[90%] scale-105 grayscale-[75%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-full row-span-2">
                <span className="w-full font-page text-2xl text-pageMenu font-extrabold tracking-wide flex items-center justify-center">
                  location
                </span>
                <span className="absolute px-5 w-full h-full font-page text-[12px] text-pageMenu">
                  Then, use a few words to describe to describe the lake's
                  location. It should only provide a general place of where it
                  is. You will specify the exact coordinates in next step.
                </span>
              </div>
            </span>
          </motion.div>
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-page2 m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="w-full h-full row-span-4 p-3">
                <div className="relative w-full h-full bg-pageMenu rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-16 h-16"
                    >
                      <g
                        stroke="#F1F0E8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z"></path>
                        <path d="M12 22c4-4 8-7.582 8-12a8 8 0 10-16 0c0 4.418 4 8 8 12z"></path>
                      </g>
                    </svg>
                  </div>
                  <Image
                    src="/homepage3.jpg"
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={"/homepage3.jpg"}
                    className="absolute w-full h-full object-cover hue-rotate-[10deg] saturate-[0.7] brightness-[90%] scale-105 grayscale-[50%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-full row-span-2">
                <span className="w-full font-page text-2xl text-pageMenu font-extrabold tracking-wide flex items-center justify-center">
                  point
                </span>
                <span className="absolute px-5 w-full h-full font-page text-[12px] text-pageMenu">
                  Using the map, pinpoint the exact location of the lake. The
                  coordinates of the marker will be automatically added to form.
                  Try to place the marker accurately at the spot of your lake.
                </span>
              </div>
            </span>
          </motion.div>
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-page2 m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="w-full h-full row-span-4 p-3">
                <div className="relative w-full h-full bg-pageMenu rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F1F0E8"
                      viewBox="0 0 24 24"
                      className="w-16 h-16"
                    >
                      <path d="M21 2H3a1 1 0 00-1 1v18a1 1 0 001 1h18a1 1 0 001-1V3a1 1 0 00-1-1zM4 4h16v2H4zm16 16H4V8h16zM6 12a1 1 0 011-1h10a1 1 0 010 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 010 2H7a1 1 0 01-1-1z"></path>
                    </svg>
                  </div>
                  <Image
                    src="/homepage4.jpg"
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={"/homepage4.jpg"}
                    className="absolute w-full h-full object-cover hue-rotate-[10deg] saturate-[0.7] brightness-[90%] scale-105 grayscale-[80%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-full row-span-2">
                <span className="w-full font-page text-2xl text-pageMenu font-extrabold tracking-wide flex items-center justify-center">
                  description
                </span>
                <span className="absolute px-5 w-full h-full font-page text-[12px] text-pageMenu">
                  Provide a detailed description of the place you visited. The
                  more information, the better. For instance, describe size of
                  the lake, is it visited by many people and if any wildlife can
                  be observed there.
                </span>
              </div>
            </span>
          </motion.div>
          <motion.div className="min-w-[18rem] min-h-[24rem] bg-page2 m-2 rounded-2xl shadow-md">
            <span className="relative w-full h-full grid grid-rows-6">
              <div className="w-full h-full row-span-4 p-3">
                <div className="relative w-full h-full bg-pageMenu rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute z-10 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-20 h-20"
                    >
                      <g
                        stroke="#F1F0E8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 16a3 3 0 100-6 3 3 0 000 6z"></path>
                        <path d="M3 16.8V9.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 6 5.08 6 6.2 6h1.055c.123 0 .184 0 .24-.006a1 1 0 00.725-.448c.03-.048.058-.103.113-.213.11-.22.165-.33.228-.425a2 2 0 011.447-.895C10.123 4 10.245 4 10.492 4h3.018c.246 0 .37 0 .482.013a2 2 0 011.448.895c.063.095.118.205.228.425.055.11.082.165.113.213a1 1 0 00.724.447c.057.007.118.007.241.007H17.8c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 7.52 21 8.08 21 9.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C19.48 20 18.92 20 17.8 20H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 18.48 3 17.92 3 16.8z"></path>
                      </g>
                    </svg>
                  </div>
                  <Image
                    src="/small1.jpg"
                    alt="Image"
                    placeholder="blur"
                    height={1000}
                    width={1000}
                    blurDataURL={"/small2.jpg"}
                    className="absolute w-full h-full object-cover hue-rotate-[10deg] saturate-[0.7] brightness-[90%] scale-105 grayscale-[50%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-full row-span-2">
                <span className="w-full font-page text-2xl text-pageMenu font-extrabold tracking-wide flex items-center justify-center">
                  photos
                </span>
                <span className="absolute px-5 w-full h-full font-page text-[12px] text-pageMenu">
                  Try to capture the atmosphere of the place and what sets it
                  apart from others. You can upload up to 10 photos. Remember
                  that each lake you add must have at least one photo.
                </span>
              </div>
            </span>
          </motion.div>
          <div className="min-w-[2px] min-h-[24rem]"></div>
        </motion.div>
      </div>
    </div>
  );

  // return (
  //   <div className="w-full h-full bg-page1 p-10">
  //     <motion.div
  //       ref={carousel}
  //       className="relative w-full h-full bg-page4 overflow-hidden"
  //     >
  //       <motion.div
  //         drag="x"
  //         dragConstraints={{ right: 0, left: -carouselWidth }}
  //         key={JSON.stringify(width)}
  //         className="w-full h-full flex items-center bg-page2"
  //       >
  //         <motion.div className="min-w-[15rem] min-h-[22.5rem] bg-pageMenu m-2 rounded-lg"></motion.div>
  //         <motion.div className="min-w-[15rem] min-h-[22.5rem] bg-pageMenu m-2 rounded-lg"></motion.div>
  //         <motion.div className="min-w-[15rem] min-h-[22.5rem] bg-pageMenu m-2 rounded-lg"></motion.div>
  //         <motion.div className="min-w-[15rem] min-h-[22.5rem] bg-pageMenu m-2 rounded-lg"></motion.div>
  //       </motion.div>
  //       <div ref={ref} className="w-full h-full"></div>
  //     </motion.div>
  //   </div>
  // );
}

export default Display;
