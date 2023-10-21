import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Logo() {
  const router = useRouter();

  const [homepageAnimationStarted, setHomePageAnimationStarted] =
    useState(false);
  const [homepageIsHovered, setHomepageIsHovered] = useState(false);
  const [homepageIsClicked, setHomepageIsClicked] = useState(false);

  const homepageOnClickHandler = () => {
    if (router.pathname === "/") {
      setHomePageAnimationStarted(true);
      setHomepageIsClicked(false);
    } else {
      setHomePageAnimationStarted(false);
      setHomepageIsClicked(true);
    }
  };

  const homepageHandleMouseEnter = () => {
    setHomePageAnimationStarted(true);
    setHomepageIsHovered(true);
  };

  const homepageHandleMouseLaeve = () => {
    setHomePageAnimationStarted(false);
    setHomepageIsHovered(false);
  };

  useEffect(() => {
    const handleRouterPath = (pathname) => {
      switch (pathname) {
        case "/adminpanelpage":
          setHomepageIsClicked(true);
          break;
        default:
          setHomePageAnimationStarted(false);
          setHomepageIsClicked(false);
          setHomepageIsHovered(false);
      }
    };

    handleRouterPath(router.pathname);
  }, [router.pathname]);

  return (
    <Link href="/">
      <div className="flex items-center justify-center w-full h-full font-body overflow-hidden shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2)]">
        <motion.div
          initial={{ width: "var(--scale-animate-1)" }}
          whileHover={{ width: "var(--scale-hover-1)" }}
          animate={{
            width: homepageIsClicked
              ? "var(--scale-hover-1)"
              : "var(--scale-animate-1)",
          }}
          className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 lg:[--scale-hover-1:11rem] lg:[--scale-animate-1:3.5rem] md:[--scale-hover-1:7.4rem] md:[--scale-animate-1:2.5rem] sm:[--scale-hover-1:11rem] sm:[--scale-animate-1:3rem] [--scale-hover-1:9rem] [--scale-animate-1:3.3rem]"
          onMouseEnter={homepageHandleMouseEnter}
          onMouseLeave={homepageHandleMouseLaeve}
          onClick={homepageOnClickHandler}
        >
          <div className="flex flex-row p-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-54 -22.077 47 22"
                className="w-12 py-2 md:w-10 md:py-2.5 lg:w-14 lg:py-1"
                fill="#383434"
              >
                <path d="M-7-11c-14-3-14-12-17-11s-5 3-8 6c3-2 7-4 8-3 3 3 3 6 17 8m-18 0c-6-3-6-6-11-6-5.333 2.667-6 7-18 11 12-3 12-3 17-7 2-2 5 0 12 2m-16 8c12 7 13 0 18-6 3-3 7-1 9 0-1-1-7-5-10-3-8 6-6 11-17 9"></path>
              </svg>
            </div>
            {(homepageAnimationStarted || homepageIsClicked) && (
              <motion.div
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -22 107 22"
                  className="w-24 py-2 md:w-20 md:py-2.5 lg:w-28 lg:py-2"
                  fill="#383434"
                >
                  <path d="M0 0v-22h3v19h10v3H0m16 0l9-22 9 22h-3l-6-15-6 15h-3m21-11l9 11h4l-9-11 9-11h-4l-9 11m16 0l9 11h4l-9-11 9-11h-4l-9 11M70 0h15v-3H70v3m0-10h12v-3H70v3m0-9h15v-3H70v3M98 0c12 0 12-12 0-12-8 0-9-9 6-6l2-2s-2-2-8-2C86-22 86-9 98-9c8 0 8 6 0 6-6 0-8-2-8-2l-2 2s4 3 10 3M0 0"></path>
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

// {
//   /* <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="-54 -22.077 47 22"
//   className="w-[20%] sm:w-[15%] md:w-[30%]"
//   fill="#383434"
// >
//   <path d="M-7-11c-14-3-14-12-17-11s-5 3-8 6c3-2 7-4 8-3 3 3 3 6 17 8m-18 0c-6-3-6-6-11-6-5.333 2.667-6 7-18 11 12-3 12-3 17-7 2-2 5 0 12 2m-16 8c12 7 13 0 18-6 3-3 7-1 9 0-1-1-7-5-10-3-8 6-6 11-17 9"></path>
// </svg>;

export default Logo;

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 -22 107 22"
//   className="w-[50%] sm:w-[35%] md:w-[60%]"
//   fill="#383434"
// >
//   <path d="M0 0v-22h3v19h10v3H0m16 0l9-22 9 22h-3l-6-15-6 15h-3m21-11l9 11h4l-9-11 9-11h-4l-9 11m16 0l9 11h4l-9-11 9-11h-4l-9 11M70 0h15v-3H70v3m0-10h12v-3H70v3m0-9h15v-3H70v3M98 0c12 0 12-12 0-12-8 0-9-9 6-6l2-2s-2-2-8-2C86-22 86-9 98-9c8 0 8 6 0 6-6 0-8-2-8-2l-2 2s4 3 10 3M0 0"></path>
// </svg>; */
// }
