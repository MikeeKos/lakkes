import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React from "react";

export default function Custom404() {
  const router = useRouter();
  setTimeout(() => {
    router.reload();
  }, 4000);

  return (
    <React.Fragment>
      <div className="w-full h-[30rem] bg-page1 border-2 border-pageMenu md:grid md:grid-cols-12">
        <div className="w-full h-1/2 md:h-full md:col-span-5 md:border-b-0 md:border-e-4 md:border-pageMenu">
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-page text-2xl sm:text-5xl md:text-4xl lg:text-5xl text-pageMenu font-extrabold tracking-wide text-center overflow-hidden bg-page1 p-5">
              not found...
            </span>
          </div>
        </div>
        <div className="w-full h-1/2 md:h-full md:col-span-7 flex items-center justify-center">
          <div className="w-80 h-40 border-4 border-pageMenu overflow-hidden flex items-center justify-center">
            <span className="text-9xl font-page font-extrabold text-center text-pageMenu">
              404
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
