"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MainNavigation() {
  const { data: session, status } = useSession();
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }

  const [homepageAnimationStarted, setHomePageAnimationStarted] =
    useState(false);
  const [homepageIsHovered, setHomepageIsHovered] = useState(false);
  const [homepageIsClicked, setHomepageIsClicked] = useState(false);

  const [alllakesAnimationStarted, setAlllakesAnimationStarted] =
    useState(false);
  const [alllakesIsHovered, setAlllakesIsHovered] = useState(false);
  const [alllakesIsClicked, setAlllakesIsClicked] = useState(false);

  const [addlakeAnimationStarted, setAddlakeAnimationStarted] = useState(false);
  const [addlakeIsHovered, setAddlakeIsHovered] = useState(false);
  const [addlakeIsClicked, setAddlakeIsClicked] = useState(false);

  const [authpageAnimationStarted, setAuthPageAnimationStarted] =
    useState(false);
  const [authpageIsHovered, setAuthpageIsHovered] = useState(false);
  const [authpageIsClicked, setAuthpageIsClicked] = useState(false);

  const [logoutAnimationStarted, setLogoutAnimationStarted] = useState(false);
  const [logoutIsHovered, setLogoutIsHovered] = useState(false);
  const [logoutIsClicked, setLogoutIsClicked] = useState(false);

  const homepageOnClickHandler = () => {
    setHomepageIsClicked(true);
  };

  const homepageHandleMouseEnter = () => {
    setHomePageAnimationStarted(true);
    setHomepageIsHovered(true);
  };

  const homepageHandleMouseLaeve = () => {
    setHomePageAnimationStarted(false);
    setHomepageIsHovered(false);
  };

  const alllakesOnClickHandler = () => {
    setAlllakesIsClicked(true);
  };

  const alllakesHandleMouseEnter = () => {
    setAlllakesAnimationStarted(true);
    setAlllakesIsHovered(true);
  };

  const alllakesHandleMouseLeave = () => {
    setAlllakesAnimationStarted(false);
    setAlllakesIsHovered(false);
  };

  const addlakeOnClickHandler = () => {
    setAddlakeIsClicked(true);
  };

  const addlakeHandleMouseEnter = () => {
    setAddlakeAnimationStarted(true);
    setAddlakeIsHovered(true);
  };

  const addlakeHandleMouseLeave = () => {
    setAddlakeAnimationStarted(false);
    setAddlakeIsHovered(false);
  };

  const authpageOnClickHandler = () => {
    setAuthpageIsClicked(true);
  };

  const authpageHandleMouseEnter = () => {
    setAuthPageAnimationStarted(true);
    setAuthpageIsHovered(true);
  };

  const authpageHandleMouseLeave = () => {
    setAuthPageAnimationStarted(false);
    setAuthpageIsHovered(false);
  };

  const logoutOnClickHandler = () => {
    setLogoutIsClicked(true);
  };

  const logoutHandleMouseEnter = () => {
    setLogoutAnimationStarted(true);
    setLogoutIsHovered(true);
  };

  const logoutHandleMouseLeave = () => {
    setLogoutAnimationStarted(false);
    setLogoutIsHovered(false);
  };

  useEffect(() => {
    const handleRouterPath = (pathname) => {
      switch (pathname) {
        case "/":
          setHomepageIsClicked(true);

          // setHomePageAnimationStarted(false);
          // setHomepageIsClicked(false);
          // setHomepageIsHovered(false);

          setAlllakesAnimationStarted(false);
          setAlllakesIsClicked(false);
          setAlllakesIsHovered(false);

          setAuthPageAnimationStarted(false);
          setAuthpageIsClicked(false);
          setAuthpageIsHovered(false);

          setAddlakeAnimationStarted(false);
          setAddlakeIsClicked(false);
          setAddlakeIsHovered(false);

          setLogoutAnimationStarted(false);
          setLogoutIsClicked(false);
          setLogoutIsHovered(false);
          break;
        case "/list":
          setAlllakesIsClicked(true);

          setHomePageAnimationStarted(false);
          setHomepageIsClicked(false);
          setHomepageIsHovered(false);

          // setAlllakesAnimationStarted(false);
          // setAlllakesIsClicked(false);
          // setAlllakesIsHovered(false);

          setAuthPageAnimationStarted(false);
          setAuthpageIsClicked(false);
          setAuthpageIsHovered(false);

          setAddlakeAnimationStarted(false);
          setAddlakeIsClicked(false);
          setAddlakeIsHovered(false);

          setLogoutAnimationStarted(false);
          setLogoutIsClicked(false);
          setLogoutIsHovered(false);
          break;
        case "/add":
          setAddlakeIsClicked(true);

          setHomePageAnimationStarted(false);
          setHomepageIsClicked(false);
          setHomepageIsHovered(false);

          setAlllakesAnimationStarted(false);
          setAlllakesIsClicked(false);
          setAlllakesIsHovered(false);

          setAuthPageAnimationStarted(false);
          setAuthpageIsClicked(false);
          setAuthpageIsHovered(false);

          // setAddlakeAnimationStarted(false);
          // setAddlakeIsClicked(false);
          // setAddlakeIsHovered(false);

          setLogoutAnimationStarted(false);
          setLogoutIsClicked(false);
          setLogoutIsHovered(false);
          break;
        case "/auth":
          setAuthpageIsClicked(true);

          setHomePageAnimationStarted(false);
          setHomepageIsClicked(false);
          setHomepageIsHovered(false);

          setAlllakesAnimationStarted(false);
          setAlllakesIsClicked(false);
          setAlllakesIsHovered(false);

          // setAuthPageAnimationStarted(false);
          // setAuthpageIsClicked(false);
          // setAuthpageIsHovered(false);

          setAddlakeAnimationStarted(false);
          setAddlakeIsClicked(false);
          setAddlakeIsHovered(false);

          setLogoutAnimationStarted(false);
          setLogoutIsClicked(false);
          setLogoutIsHovered(false);
          break;
        default:
          setHomePageAnimationStarted(false);
          setHomepageIsClicked(false);
          setHomepageIsHovered(false);

          setAlllakesAnimationStarted(false);
          setAlllakesIsClicked(false);
          setAlllakesIsHovered(false);

          setAuthPageAnimationStarted(false);
          setAuthpageIsClicked(false);
          setAuthpageIsHovered(false);

          setAddlakeAnimationStarted(false);
          setAddlakeIsClicked(false);
          setAddlakeIsHovered(false);

          setLogoutAnimationStarted(false);
          setLogoutIsClicked(false);
          setLogoutIsHovered(false);
      }
    };

    handleRouterPath(router.pathname);
  }, [router.pathname]);

  const homePage = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-9 sm:h-9"
      >
        <g stroke="#000" strokeWidth="1.7">
          <motion.path
            stroke="#383434"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
            transition={{ duration: 2 }}
            strokeLinecap="round"
            d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5M4 22V9.5M20 22V9.5"
          ></motion.path>
          <motion.path
            stroke="#383434"
            d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
            transition={{ duration: 2 }}
          ></motion.path>
        </g>
      </svg>
    </div>
  );

  const allLakes = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-9 sm:h-9"
      >
        <motion.path
          stroke="#383434"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: alllakesIsHovered ? [0, 1] : 1 }}
          transition={{ duration: 2.5 }}
          d="M12 6h.01M9 20l-6-3V4l2 1m4 15l6-3m-6 3v-6m6 3l6 3V7l-2-1m-4 11v-3m0-7.8c0 1.767-1.5 3.2-3 4.8-1.5-1.6-3-3.033-3-4.8S10.343 3 12 3s3 1.433 3 3.2z"
        ></motion.path>
      </svg>
    </div>
  );

  const addLake = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-9 sm:h-9"
      >
        <g stroke="#000" strokeLinecap="round" strokeWidth="1.8">
          <motion.path
            stroke="#383434"
            d="M15 12h-3m0 0H9m3 0V9m0 3v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: addlakeIsHovered ? [0, 1] : 1 }}
            transition={{ duration: 0.5 }}
          ></motion.path>
        </g>
      </svg>
    </div>
  );

  const authPage = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
        className="w-7 h-7 sm:w-9 sm:h-9"
      >
        <motion.path
          stroke="#383434"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: authpageIsHovered ? [0, 1] : 1 }}
          transition={{ duration: 1.5 }}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    </div>
  );

  const logoutPage = (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="800"
        fill="none"
        viewBox="0 0 24 24"
        className="w-7 h-7 sm:w-9 sm:h-9"
      >
        <g stroke="#000" strokeLinecap="round" strokeWidth="1.7">
          <motion.path
            stroke="#383434"
            strokeLinejoin="round"
            d="M15 12H6m0 0l2 2m-2-2l2-2"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: logoutIsHovered ? [0, 1] : 1 }}
            transition={{ duration: 4 }}
          ></motion.path>
          <motion.path
            stroke="#383434"
            d="M12 21.983c-1.553-.047-2.48-.22-3.121-.862-.769-.768-.865-1.946-.877-4.121M16 21.998c2.175-.012 3.353-.108 4.121-.877C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.829 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121M3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: logoutIsHovered ? [0, 1] : 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </g>
      </svg>
    </div>
  );

  return (
    <React.Fragment>
      {/* <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="600"
          version="1.1"
          viewBox="0 0 900 600"
          className="w-full"
        >
          <path fill="#fff" d="M0 0H900V600H0z"></path>
          <path
            fill="#fa7268"
            d="M0 340l21.5-4c21.5-4 64.5-12 107.3-9 42.9 3 85.5 17 128.4 11.3 42.8-5.6 85.8-31 128.6-43.3 42.9-12.3 85.5-11.7 128.4 7.2C557 321 600 358 642.8 366.8c42.9 8.9 85.5-10.5 128.4-21 42.8-10.5 85.8-12.1 107.3-13l21.5-.8v269H0z"
          ></path>
          <path
            fill="#eb5967"
            d="M0 393l21.5 7c21.5 7 64.5 21 107.3 18.8 42.9-2.1 85.5-20.5 128.4-33.8 42.8-13.3 85.8-21.7 128.6-27.8 42.9-6.2 85.5-10.2 128.4 2.8 42.8 13 85.8 43 128.6 47.8 42.9 4.9 85.5-15.5 128.4-17.5 42.8-2 85.8 14.4 107.3 22.5L900 421v180H0z"
          ></path>
          <path
            fill="#da3f67"
            d="M0 446l21.5 2.3c21.5 2.4 64.5 7 107.3 9 42.9 2 85.5 1.4 128.4 5.7 42.8 4.3 85.8 13.7 128.6 16.8 42.9 3.2 85.5.2 128.4-13.5 42.8-13.6 85.8-38 128.6-33.6 42.9 4.3 85.5 37.3 128.4 47.1 42.8 9.9 85.8-3.5 107.3-10.1L900 463v138H0z"
          ></path>
          <path
            fill="#c62368"
            d="M0 503l21.5-3.8c21.5-3.9 64.5-11.5 107.3-13.5 42.9-2 85.5 1.6 128.4 4C300 492 343 493 385.8 499c42.9 6 85.5 17 128.4 27.2 42.8 10.1 85.8 19.5 128.6 15 42.9-4.5 85.5-22.9 128.4-26C814 512 857 524 878.5 530l21.5 6v65H0z"
          ></path>
        </svg>
      </div> */}

      {/* <div className="absolute top-0 w-full h-[20vh]">
        <motion.div
          animate={{
            y: [5, -5, 5],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="z-10 absolute w-8 h-8 sm:w-10 sm:h-10 bg-pageDarkBlue rounded-full drop-shadow-xl top-[5vh] left-[2%] sm:top-[10vh] sm:left-[3%]"
        ></motion.div>
        <motion.div
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="z-10 absolute w-4 h-4 sm:w-6 sm:h-6 bg-pageDarkBlue rounded-full drop-shadow-xl top-[1vh] left-[8%] sm:top-[3vh] sm:left-[10%]"
        ></motion.div>
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="opacity-0 sm:opacity-100 sm:z-10 absolute w-7 h-7 sm:w-8 sm:h-8 bg-pageDarkBlue rounded-full drop-shadow-xl top-[8vh] left-[12%] sm:top-[8vh] sm:left-[14%]"
        ></motion.div>
        <motion.div
          animate={{
            y: [7, -7, 7],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="z-10 absolute w-8 h-8 sm:w-10 sm:h-10 bg-pageDarkBlue rounded-full drop-shadow-xl top-[6vh] right-[1%] sm:top-[10vh] sm:right-[1%]"
        ></motion.div>
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="z-10 absolute w-4 h-4 sm:w-7 sm:h-7 bg-pageDarkBlue rounded-full drop-shadow-xl top-[1vh] right-[10%] sm:top-[2vh] sm:right-[8%]"
        ></motion.div>
        <motion.div
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="opacity-0 sm:opacity-100 sm:z-10 absolute w-7 h-7 sm:w-11 sm:h-11 bg-pageDarkBlue rounded-full drop-shadow-xl top-[5vh] right-[12%] sm:top-[7vh] sm:right-[12%]"
        ></motion.div>
      </div> */}

      {/* <div className="relative">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 10 79 6.615"
            className="w-full max-h-[17vh] absolute drop-shadow-lg"
            fill="#A3CDCD"
          >
            <path d="M0 10h79c-1 1-1 3-5 6s-3-6-8-5-3 4-8 5c-6 1-11-8-19-4-9 5-15 3-17 1-1-1-4-3-7 1S5 14 0 10v3"></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 7 79 6.552"
            className="w-full max-h-[20vh] absolute drop-shadow-lg"
            fill="#D2E9E9"
          >
            <path d="M0 7h79c-1 1-2 3-6 4-7 2-6-1-11-1-9 1-6 5-13 3-11-2-7-2-18-1-10 1-13 2-15-2-1-2-4-2-7 0-2 1-5 2-9-3 0 0 0 1 0 0"></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 12 79 6.25"
            className="w-full max-h-[15vh] absolute drop-shadow-lg"
            fill="#E3F4F4"
          >
            <path d="M0 12h79c-1 1-4 5-9 6-6 1-6-2-10-4-5-2-8 0-10 2-4 3-18 3-21 0-6-4-8 4-13-1-2-2-7 1-11 1-3 0-4-2-5-4v1"></path>
          </svg>
        </div>
      </div> */}

      <div className="scale-[1.19] sm:scale-110 font-body flex items-center justify-center h-full">
        <div className="h-full sticky w-min flex items-center justify-center">
          <div className="mx-3 sm:mx-5">
            <Link href="/" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "var(--scale-animate-1)" }}
                  whileHover={{ width: "var(--scale-hover-1)" }}
                  animate={{
                    width: homepageIsClicked
                      ? "var(--scale-hover-1)"
                      : "var(--scale-animate-1)",
                  }}
                  className="relative sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 sm:[--scale-hover-1:8rem] sm:[--scale-animate-1:2.25rem] [--scale-hover-1:5.8rem] [--scale-animate-1:1.8rem]"
                  onMouseEnter={homepageHandleMouseEnter}
                  onMouseLeave={homepageHandleMouseLaeve}
                  onClick={homepageOnClickHandler}
                >
                  <div className="flex flex-row p-0">
                    {homePage}
                    {(homepageAnimationStarted || homepageIsClicked) && (
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          duration: 0.4,
                          stiffness: 250,
                        }}
                        className="flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
                      >
                        Home Page
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>
              <AnimatePresence>
                {(homepageAnimationStarted || homepageIsClicked) &&
                  !alllakesAnimationStarted &&
                  !addlakeAnimationStarted &&
                  !authpageAnimationStarted &&
                  !logoutAnimationStarted && (
                    <motion.div
                      className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page1 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        duration: 1,
                        stiffness: 100,
                      }}
                      exit={{ y: -100 }}
                    ></motion.div>
                  )}
              </AnimatePresence>
            </Link>
          </div>
          <div className="mx-3 sm:mx-5">
            <Link href="/list" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "var(--scale-animate-2)" }}
                  whileHover={{ width: "var(--scale-hover-2)" }}
                  animate={{
                    width: alllakesIsClicked
                      ? "var(--scale-hover-2)"
                      : "var(--scale-animate-2)",
                  }}
                  className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 sm:[--scale-hover-2:6.5rem] sm:[--scale-animate-2:2.25rem] [--scale-hover-2:4.9rem] [--scale-animate-2:1.8rem]"
                  onMouseEnter={alllakesHandleMouseEnter}
                  onMouseLeave={alllakesHandleMouseLeave}
                  onClick={alllakesOnClickHandler}
                >
                  <div className="flex flex-row p-0">
                    {allLakes}
                    {(alllakesAnimationStarted || alllakesIsClicked) && (
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          duration: 0.4,
                          stiffness: 250,
                        }}
                        className="flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
                      >
                        All lakes
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>
              <AnimatePresence>
                {(alllakesAnimationStarted || alllakesIsClicked) &&
                  !homepageAnimationStarted &&
                  !addlakeAnimationStarted &&
                  !authpageAnimationStarted &&
                  !logoutAnimationStarted && (
                    <motion.div
                      className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page1 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        duration: 1,
                        stiffness: 100,
                      }}
                      exit={{ y: -100 }}
                    ></motion.div>
                  )}
              </AnimatePresence>
            </Link>
          </div>
          <div className="mx-3 sm:mx-5">
            <Link href="/add" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "var(--scale-animate-3)" }}
                  whileHover={{ width: "var(--scale-hover-3)" }}
                  animate={{
                    width: addlakeIsClicked
                      ? "var(--scale-hover-3)"
                      : "var(--scale-animate-3)",
                  }}
                  className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-0 sm:[--scale-hover-3:7rem] sm:[--scale-animate-3:2.25rem] [--scale-hover-3:5.1rem] [--scale-animate-3:1.8rem]"
                  onMouseEnter={addlakeHandleMouseEnter}
                  onMouseLeave={addlakeHandleMouseLeave}
                  onClick={addlakeOnClickHandler}
                >
                  <div className="flex flex-row p-0">
                    {addLake}
                    {(addlakeAnimationStarted || addlakeIsClicked) && (
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          duration: 0.4,
                          stiffness: 250,
                        }}
                        className="ml-[3px] flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
                      >
                        Add lake
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>
              <AnimatePresence>
                {(addlakeAnimationStarted || addlakeIsClicked) &&
                  !homepageAnimationStarted &&
                  !alllakesAnimationStarted &&
                  !authpageAnimationStarted &&
                  !logoutAnimationStarted && (
                    <motion.div
                      className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page1 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        duration: 1,
                        stiffness: 100,
                      }}
                      exit={{ y: -100 }}
                    ></motion.div>
                  )}
              </AnimatePresence>
            </Link>
          </div>
          {!session && (
            <div className="mx-3 sm:mx-5">
              <Link href="/auth" className="relative">
                <div className="flex flex-row items-end">
                  <motion.div
                    initial={{ width: "var(--scale-animate-4)" }}
                    whileHover={{ width: "var(--scale-hover-4)" }}
                    animate={{
                      width: authpageIsClicked
                        ? "var(--scale-hover-4)"
                        : "var(--scale-animate-4)",
                    }}
                    // initial={{ width: "2.25rem" }}
                    // whileHover={{ width: "5.5rem" }}
                    // animate={{
                    //   width: authpageIsClicked ? "5.5rem" : "2.25rem",
                    // }}
                    className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 sm:[--scale-hover-4:5.5rem] sm:[--scale-animate-4:2.25rem] [--scale-hover-4:3.9rem] [--scale-animate-4:1.8rem]"
                    onMouseEnter={authpageHandleMouseEnter}
                    onMouseLeave={authpageHandleMouseLeave}
                    onClick={authpageOnClickHandler}
                  >
                    <div className="flex flex-row p-0">
                      {authPage}
                      {(authpageAnimationStarted || authpageIsClicked) && (
                        <motion.span
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            delay: 0.2,
                            duration: 0.4,
                            stiffness: 250,
                          }}
                          className="flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
                        >
                          Login
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {(authpageAnimationStarted || authpageIsClicked) &&
                    !homepageAnimationStarted &&
                    !alllakesAnimationStarted &&
                    !addlakeAnimationStarted &&
                    !logoutAnimationStarted && (
                      <motion.div
                        className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page1 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          duration: 1,
                          stiffness: 100,
                        }}
                        exit={{ y: -100 }}
                      ></motion.div>
                    )}
                </AnimatePresence>
              </Link>
            </div>
          )}
          {status === "authenticated" && (
            <button onClick={logoutHandler} className="mx-3 sm:mx-5 relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "var(--scale-animate-5)" }}
                  whileHover={{ width: "var(--scale-hover-5)" }}
                  animate={{
                    width: logoutIsClicked
                      ? "var(--scale-hover-5)"
                      : "var(--scale-animate-5)",
                  }}
                  className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 sm:[--scale-hover-5:5.6rem] sm:[--scale-animate-5:2.25rem] [--scale-hover-5:4.5rem] [--scale-animate-5:1.8rem]"
                  onMouseEnter={logoutHandleMouseEnter}
                  onMouseLeave={logoutHandleMouseLeave}
                  onClick={logoutOnClickHandler}
                >
                  <div className="flex flex-row p-0">
                    {logoutPage}
                    {(logoutAnimationStarted || logoutIsClicked) && (
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          duration: 0.4,
                          stiffness: 250,
                        }}
                        className="flex items-end justify-center whitespace-nowrap sm:text-[1em] text-[0.7em] font-extrabold text-pageMenu"
                      >
                        Logout
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </div>
              <AnimatePresence>
                {(logoutAnimationStarted || logoutIsClicked) &&
                  !homepageAnimationStarted &&
                  !alllakesAnimationStarted &&
                  !addlakeAnimationStarted &&
                  !authpageAnimationStarted && (
                    <motion.div
                      className="absolute bg-opacity-50 sm:w-8 sm:h-8 w-5 h-5 bg-page1 rounded-full sm:-top-2 sm:-left-3 -top-1 -left-2"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        duration: 1,
                        stiffness: 100,
                      }}
                      exit={{ y: -100 }}
                    ></motion.div>
                  )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainNavigation;
