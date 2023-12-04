import Link from "next/link";
import { useSession } from "next-auth/react";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const { data: session, status } = useSession();

  const link = session ? "/add" : "/auth";

  return (
    <React.Fragment>
      <div className="w-full h-[20rem] sm:h-[25rem] border-2 border-pageMenu bg-pageMenu overflow-hidden">
        <div className="w-full h-full grid grid-cols-12">
          <div className="w-full h-full col-span-7">
            <div className="w-full h-full grid grid-cols-12">
              <div className="font-page w-full h-full col-span-4 md:col-span-2 flex justify-center items-center text-xs sm:text-sm text-page1 tracking-wider px-1 sm:px-2">
                begin your adventure →
              </div>
              <div className="relative w-full h-full col-span-4 md:col-span-8 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-54 -22.077 161 22.08"
                  className="absolute w-[200%] md:w-[100%] rotate-90 md:rotate-0"
                  fill="#F1F0E8"
                >
                  <path d="M0 0v-22h3v19h10v3H0m16 0l9-22 9 22h-3l-6-15-6 15h-3m21-11l9 11h4l-9-11 9-11h-4l-9 11m16 0l9 11h4l-9-11 9-11h-4l-9 11M70 0h15v-3H70v3m0-10h12v-3H70v3m0-9h15v-3H70v3M98 0c12 0 12-12 0-12-8 0-9-9 6-6l2-2s-2-2-8-2C86-22 86-9 98-9c8 0 8 6 0 6-6 0-8-2-8-2l-2 2s4 3 10 3M-7-11c-14-3-14-12-17-11s-5 3-8 6c3-2 7-4 8-3 3 3 3 6 17 8m-18 0c-6-3-6-6-11-6-5.333 2.667-6 7-18 11 12-3 12-3 17-7 2-2 5 0 12 2m-16 8c12 7 13 0 18-6 3-3 7-1 9 0-1-1-7-5-10-3-8 6-6 11-17 9"></path>
                </svg>
              </div>
              <div className="w-full h-full col-span-4 md:col-span-2 flex justify-center items-center">
                <Link
                  href={link}
                  className="w-full h-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[50%]"
                    fill="#383434"
                  >
                    <motion.path
                      initial={{ pathLength: 1, scale: 1 }}
                      whileHover={{ pathLength: [0, 1], scale: 1.15 }}
                      transition={{ type: "spring", duration: 1.5 }}
                      stroke="#F1F0E8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></motion.path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full col-span-5 bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
            <div className="w-full h-full grid grid-rows-2 grid-cols-2">
              <div className="flex justify-center items-center w-full h-full col-span-1 row-span-1">
                <Link href="/list">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 mx-2 sm:px-4 sm:mx-4 font-page tracking-wide"
                  >
                    find the right place for you
                  </motion.span>
                </Link>
              </div>
              <div className="flex justify-center items-center w-full h-full col-span-1 row-span-1">
                <Link href="/add">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 mx-2 sm:px-4 sm:mx-4 font-page tracking-wide"
                  >
                    add the place you have found
                  </motion.span>
                </Link>
              </div>
              <div className="flex justify-center items-center w-full h-full col-span-1 row-span-1">
                <Link href="/">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 mx-2 sm:px-4 sm:mx-4 font-page tracking-wide"
                  >
                    check homepage
                  </motion.span>
                </Link>
              </div>
              <div className="flex justify-center items-center w-full h-full col-span-1 row-span-1">
                <a href="https://github.com/MikeeKos" target="_blank">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 mx-2 sm:px-4 sm:mx-4 font-page tracking-wide"
                  >
                    check github
                  </motion.span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
