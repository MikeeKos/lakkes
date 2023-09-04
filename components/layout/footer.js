import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function Footer() {
  return (
    <React.Fragment>
      <div className="w-full h-[30rem] border-2 border-pageMenu bg-pageMenu">
        <div className="w-full h-full grid grid-rows-6 grid-cols-12">
          <div className="w-full h-full row-span-3 col-span-12">
            <div className="w-full h-full flex justify-evenly items-center">
              <div className="mx-2 h-full w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-54 -22.077 161 22.08"
                  className="w-full h-full"
                  fill="#F1F0E8"
                >
                  <path d="M0 0v-22h3v19h10v3H0m16 0l9-22 9 22h-3l-6-15-6 15h-3m21-11l9 11h4l-9-11 9-11h-4l-9 11m16 0l9 11h4l-9-11 9-11h-4l-9 11M70 0h15v-3H70v3m0-10h12v-3H70v3m0-9h15v-3H70v3M98 0c12 0 12-12 0-12-8 0-9-9 6-6l2-2s-2-2-8-2C86-22 86-9 98-9c8 0 8 6 0 6-6 0-8-2-8-2l-2 2s4 3 10 3M-7-11c-14-3-14-12-17-11s-5 3-8 6c3-2 7-4 8-3 3 3 3 6 17 8m-18 0c-6-3-6-6-11-6-5.333 2.667-6 7-18 11 12-3 12-3 17-7 2-2 5 0 12 2m-16 8c12 7 13 0 18-6 3-3 7-1 9 0-1-1-7-5-10-3-8 6-6 11-17 9"></path>
                </svg>
              </div>
              <div className="mx-2 flex items-center justify-center w-full h-full">
                <span>One</span>
              </div>
              <div className="mx-2 flex items-center justify-center w-full h-full">
                <span>One</span>
              </div>
              <div className="mx-2 flex items-center justify-center w-full h-full">
                <span>One</span>
              </div>
            </div>
          </div>
          <div className="w-full h-full row-span 3 col-span-12">Hello</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
