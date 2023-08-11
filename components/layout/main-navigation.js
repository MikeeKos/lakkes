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
        className="w-9 h-9"
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
        className="w-9 h-9"
      >
        <motion.path
          stroke="#383434"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
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
        className="w-9 h-9"
      >
        <g stroke="#000" strokeLinecap="round" strokeWidth="1.7">
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
        className="w-9 h-9"
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
        className="w-9 h-9"
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

  // !homepageAnimationStarted && !alllakesAnimationStarted && !addlakeAnimationStarted && !authpageAnimationStarted && !logoutAnimationStarted
  // !homepageIsClicked && !alllakesIsClicked && !addlakeIsClicked && !authpageIsClicked && !logoutIsClicked

  return (
    <React.Fragment>
      <div className="font-body">
        <div className="bg-pageLight h-24 flex items-center justify-center rounded-b-[3.5em] rounded-t-2xl mx-6">
          <div className="mx-5">
            <Link href="/" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "2.25rem" }}
                  whileHover={{ width: "8rem" }}
                  animate={{ width: homepageIsClicked ? "8rem" : "2.25rem" }}
                  className="border-b-[0.2em] border-pageMenu rounded-sm z-10"
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
                        className="flex items-end justify-center whitespace-nowrap text-[1em] font-extrabold text-pageMenu"
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
                      className="absolute bg-opacity-50 w-8 h-8 bg-pageStrong rounded-full -top-2 -left-3"
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
          <div className="mx-5">
            <Link href="/list" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "2.25rem" }}
                  whileHover={{ width: "6.5rem" }}
                  animate={{ width: alllakesIsClicked ? "6.5rem" : "2.25rem" }}
                  className="border-b-[0.2em] border-pageMenu rounded-sm z-10"
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
                        className="flex items-end justify-center whitespace-nowrap text-[1em] font-extrabold text-pageMenu"
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
                      className="absolute bg-opacity-50 w-8 h-8 bg-pageStrong rounded-full -top-2 -left-3"
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
          <div className="mx-5">
            <Link href="/add" className="relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "2.25rem" }}
                  whileHover={{ width: "7rem" }}
                  animate={{ width: addlakeIsClicked ? "7rem" : "2.25rem" }}
                  className="border-b-[0.2em] border-pageMenu rounded-sm z-0"
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
                        className="ml-[3px] flex items-end justify-center whitespace-nowrap text-[1em] font-extrabold text-pageMenu"
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
                      className="absolute bg-opacity-50 w-8 h-8 bg-pageStrong rounded-full -top-2 -left-3"
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
            <div className="mx-5">
              <Link href="/auth" className="relative">
                <div className="flex flex-row items-end">
                  <motion.div
                    initial={{ width: "2.25rem" }}
                    whileHover={{ width: "5.5rem" }}
                    animate={{
                      width: authpageIsClicked ? "5.5rem" : "2.25rem",
                    }}
                    className="border-b-[0.2em] border-pageMenu rounded-sm z-10"
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
                          className="flex items-end justify-center whitespace-nowrap text-[1em] font-extrabold text-pageMenu"
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
                        className="absolute bg-opacity-50 w-8 h-8 bg-pageStrong rounded-full -top-2 -left-3"
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
            <button onClick={logoutHandler} className="mx-5 relative">
              <div className="flex flex-row items-end">
                <motion.div
                  initial={{ width: "2.25rem" }}
                  whileHover={{ width: "6rem" }}
                  animate={{
                    width: logoutIsClicked ? "6rem" : "2.25rem",
                  }}
                  className="border-b-[0.2em] border-pageMenu rounded-sm z-10"
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
                        className="flex items-end justify-center whitespace-nowrap text-[1em] font-extrabold text-pageMenu"
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
                      className="absolute bg-opacity-50 w-8 h-8 bg-pageStrong rounded-full -top-2 -left-3"
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
