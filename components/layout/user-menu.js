import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function UserMenu() {
  const router = useRouter();

  const [homepageAnimationStarted, setHomePageAnimationStarted] =
    useState(false);
  const [homepageIsHovered, setHomepageIsHovered] = useState(false);
  const [homepageIsClicked, setHomepageIsClicked] = useState(false);

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

  useEffect(() => {
    const handleRouterPath = (pathname) => {
      switch (pathname) {
        case "/profile":
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
    <Link href="/profile">
      <div className="flex items-center justify-center w-full h-full font-body">
        <motion.div
          initial={{ width: "var(--scale-animate-1)" }}
          whileHover={{ width: "var(--scale-hover-1)" }}
          animate={{
            width: homepageIsClicked
              ? "var(--scale-hover-1)"
              : "var(--scale-animate-1)",
          }}
          className="sm:border-b-[0.2em] border-b-[0.18em] border-pageMenu rounded-sm z-10 sm:[--scale-hover-1:6rem] sm:[--scale-animate-1:2.5rem] [--scale-hover-1:4.5rem] [--scale-animate-1:2rem]"
          onMouseEnter={homepageHandleMouseEnter}
          onMouseLeave={homepageHandleMouseLaeve}
          onClick={homepageOnClickHandler}
        >
          <div className="flex flex-row p-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <g
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <motion.path
                    initial={{ pathLength: 1 }}
                    animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
                    transition={{ duration: 2 }}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></motion.path>
                </g>
              </svg>
            </div>
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
                Profile
              </motion.span>
            )}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export default UserMenu;
