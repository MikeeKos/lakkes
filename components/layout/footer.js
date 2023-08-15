import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Footer() {
  return (
    <React.Fragment>
      <div className="relative h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -9 53 9"
          className="absolute shadow-lg"
          fill="#E3F4F4"
        >
          <motion.path
            animate={{
              x: [7, -7, 7],
            }}
            transition={{ repeat: Infinity, duration: 17, ease: "easeInOut" }}
            d="M0 0h53c-8 0-6-1-11-4-4-2-7 0-10 2S22-6 22-6C16-10 9-2 0 0"
          ></motion.path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -9 53 9"
          className="absolute"
          fill="#D2E9E9"
        >
          <motion.path
            animate={{
              x: [-9, 9, -9],
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            d="M0 0h53c-8 0-10-8-18-9-5 0-7 3-12 6-3 2-10 3-14-1-3-3-5-3-9 4"
          ></motion.path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -9 53 9"
          className="absolute"
          fill="#C4DFDF"
        >
          <motion.path
            animate={{
              x: [5, -5, 5],
            }}
            transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            d="M0 0h53c-3-6-7-8-13-5-11 5-22 5-26 2C6-9 1-2 0 0"
          ></motion.path>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default Footer;
