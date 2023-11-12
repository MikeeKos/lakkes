import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

function StartingCard() {
  const { data: session } = useSession();

  const link = session ? "/add" : "/auth";

  const starSVG = (
    <motion.svg
      animate={{
        scale: [1, 1.05],
        rotate: [0, 20],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-12 h-12"
    >
      <path
        stroke="#383434"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92l-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92l1.697 1.697"
      ></path>
    </motion.svg>
  );

  const starSVG2 = (
    <motion.svg
      animate={{
        scale: [1, 1.2],
        rotate: [0, 30],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3.5,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-12 h-12"
    >
      <path
        stroke="#383434"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92l-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92l1.697 1.697"
      ></path>
    </motion.svg>
  );

  const starSVG3 = (
    <motion.svg
      animate={{
        scale: [1.05, 0.95],
        rotate: [0, 15],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-12 h-12"
    >
      <path
        stroke="#383434"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92l-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92l1.697 1.697"
      ></path>
    </motion.svg>
  );

  return (
    <div className="w-full h-[60rem] lg:h-[30rem] bg-page1 border-2 border-pageMenu shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
      <div className="w-full h-full lg:grid lg:grid-cols-2">
        <div className="w-full h-1/2 lg:h-full lg:col-span-1 border-pageMenu p-3">
          <div className="relative w-full h-full border-pageMenu p-3">
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 right-20 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.4],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  delay: 2.5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.2],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-14 h-14"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 right-7 top-20 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.2],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  delay: 1.5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-2/5">
                <div className="w-full h-1/3 flex items-end md:items-center">
                  <span className="md:ps-0 hover:scale-105 hover:text-page3 duration-200 font-page font-extrabold text-pageMenu text-4xl sm:text-6xl lg:text-6xl tracking-wide">
                    hi there &
                  </span>
                </div>
                <div className="w-full h-1/3 flex items-center">
                  <span className="ps-4 md:ps-10 hover:scale-105 hover:text-page3 duration-200 font-page font-extrabold text-pageMenu text-4xl sm:text-6xl lg:text-6xl tracking-wide">
                    welcome to
                  </span>
                </div>
                <div className="ps-8 md:ps-20 w-full h-1/3 flex items-start md:items-center flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-54 -22.077 47 22"
                    fill="#383434"
                    className="h-[2.2rem] sm:h-[2.9rem] hover:scale-105 hover:fill-page4 duration-200"
                  >
                    <path d="M-7-11c-14-3-14-12-17-11s-5 3-8 6c3-2 7-4 8-3 3 3 3 6 17 8m-18 0c-6-3-6-6-11-6-5.333 2.667-6 7-18 11 12-3 12-3 17-7 2-2 5 0 12 2m-16 8c12 7 13 0 18-6 3-3 7-1 9 0-1-1-7-5-10-3-8 6-6 11-17 9"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -22 107 22"
                    fill="#383434"
                    className="sm:ps-16 md:ps-20 h-[2.2rem] sm:h-[2.9rem] hover:scale-105 hover:fill-page3 duration-200"
                  >
                    <path d="M0 0v-22h3v19h10v3H0m16 0l9-22 9 22h-3l-6-15-6 15h-3m21-11l9 11h4l-9-11 9-11h-4l-9 11m16 0l9 11h4l-9-11 9-11h-4l-9 11M70 0h15v-3H70v3m0-10h12v-3H70v3m0-9h15v-3H70v3M98 0c12 0 12-12 0-12-8 0-9-9 6-6l2-2s-2-2-8-2C86-22 86-9 98-9c8 0 8 6 0 6-6 0-8-2-8-2l-2 2s4 3 10 3M0 0"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-0 md:pt-5 w-full h-2/5 p-3">
                <span className="pt-2 sm:pt-1 pe-3 float-left font-extrabold text-3xl font-page text-pageMenu">
                  If
                </span>
                <span className="font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] leading-[0px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                  {" "}
                  you want to discover beautiful places in your area, you've
                  come to the right place. Find the perfect spot to spend an
                  evening by the lake without the hassle of dealing with crowds
                  of people. Share your experiences, tips, and thoughts on any
                  lake by leaving comment. Join this amazing community today and
                  start exploring the beauty of lakes around the world.
                </span>
              </div>
              <div className="relative pt-4 sm:pt-0 w-full h-1/5 flex items-center justify-center">
                <Link
                  href={link}
                  className="absolute w-full h-full flex justify-center items-center z-50"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-2/3 h-2/3 sm:w-3/5 sm:h-4/5 bg-page2 flex items-center justify-center border-4 border-pageMenu hover:cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <span className="font-body font-extrabold text-pageMenu leading-[0px] text-2xl sm:text-4xl">
                      get started
                    </span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-1/2 lg:h-full lg:col-span-1 flex items-center justify-center">
          <div className="absolute w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
            <div className="col-span-6 row-span-4">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0 p-2 sm:p-3">
                <div className="col-span-8 row-span-6 border-4 border-pageMenu z-10">
                  <div className="w-full h-full bg-page1 shadow-2xl">
                    <div className="relative w-full h-1/5 border-b-4 border-pageMenu bg-page2 flex items-center justify-center">
                      <span className="absolute bottom-[9px] sm:bottom-[5px] md:bottom-[2px] font-page font-extrabold tracking-wide text-page1 text-xl sm:text-2xl md:text-3xl">
                        search
                      </span>
                      <span className="absolute font-page font-extrabold tracking-wide text-pageMenu text-xl sm:text-2xl md:text-3xl">
                        search
                      </span>
                    </div>
                    <div className="w-full h-4/5 p-1 sm:p-2 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 float-right"
                      >
                        <path
                          stroke="#383434"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
                        ></path>
                      </svg>
                      <span className="font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] leading-[0px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                        <span>
                          use the map or a list of lakes to find a place that
                          interests you. Navigate to{" "}
                        </span>
                        <span className="underline text-page4 hover:text-page3 hover:decoration-2 duration-100">
                          <Link href="/list">all lakes</Link>
                        </span>
                        <span> to browse the full list of locations.</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-4 col-start-9 border-b-4 border-pageMenu z-10"></div>
                <div className="col-span-4 row-span-2 col-start-9 row-start-5"></div>
              </div>
            </div>
            <div className="col-span-6 row-span-4 col-start-7">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0 p-2 sm:p-3">
                <div className="col-span-4 row-span-2 border-b-4 border-pageMenu z-50"></div>
                <div className="col-span-4 row-span-4 col-start-1 row-start-3"></div>
                <div className="col-span-8 row-span-6 col-start-5 row-start-1 border-4 border-pageMenu z-50 bg-page1">
                  <div className="w-full h-full bg-page1 shadow-2xl">
                    <div className="relative w-full h-1/5 border-b-4 border-pageMenu bg-page2 flex items-center justify-center">
                      <span className="absolute bottom-[9px] sm:bottom-[5px] md:bottom-[2px] font-page font-extrabold tracking-wide text-page1 text-xl sm:text-2xl md:text-3xl">
                        add
                      </span>
                      <span className="absolute font-page font-extrabold tracking-wide text-pageMenu text-xl sm:text-2xl md:text-3xl">
                        add
                      </span>
                    </div>
                    <div className="w-full h-4/5 p-1 sm:p-2 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 float-right"
                      >
                        <g fill="#383434">
                          <path d="M11 8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8z"></path>
                          <path
                            fillRule="evenodd"
                            d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      <span className="font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] leading-[0px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                        <span>
                          add a place you've discovered using the form available
                          on the website. Go to{" "}
                        </span>
                        <span className="underline text-page4 hover:text-page3 hover:decoration-2 duration-100">
                          <Link href="/add">add lake</Link>
                        </span>
                        <span> to share your discovery.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 row-span-2 col-start-7 row-start-1">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
                <div className="col-span-4 row-span-6 flex items-center">
                  <span className="ps-2 rotate-12">{starSVG2}</span>
                </div>
                <div className="col-span-4 row-span-6 col-start-5 flex items-center justify-center">
                  <span className="pb-12">{starSVG}</span>
                </div>
                <div className="col-span-4 row-span-6 col-start-9 flex items-end justify-center overflow-hidden">
                  <span className="pb-3 rotate-45">{starSVG3}</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 row-span-2 row-start-5">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
                <div className="col-span-3 row-span-6 flex justify-start items-center">
                  <span className="ps-2">{starSVG}</span>
                </div>
                <div className="col-span-3 row-span-6 col-star flex justify-center items-start">
                  <span className="pt-5">{starSVG2}</span>
                </div>
                <div className="col-span-6 row-span-6 col-start-7 flex items-end justify-center">
                  <span className="pe-5">{starSVG3}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
              className="absolute z-30"
              animate={{
                y: [-11, 11],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
              }}
            >
              <Image
                src={"/floatphone.png"}
                alt="Image"
                placeholder="blur"
                height={1750}
                width={1290}
                blurDataURL={"/floatphone.png"}
                className="w-[15rem]"
              />
            </motion.div>
            <motion.div
              className="absolute top-[14.5rem] z-30"
              animate={{
                scale: [1.14, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
              }}
            >
              <Image
                src={"/floatblob.png"}
                alt="Image"
                placeholder="blur"
                height={1750}
                width={1290}
                blurDataURL={"/floatblob.png"}
                className="w-[15rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingCard;
