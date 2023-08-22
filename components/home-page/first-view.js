import React from "react";
import CluserMap from "./cluser-map";
import MainWelcome from "./main-welcome";
import PostCarousel from "./post-carousel";

import dynamic from "next/dynamic";
import FeaturedText from "./featured-text";

function FirstView(props) {
  const CluserMap = dynamic(() => import("./cluser-map"), {
    ssr: false,
    loading: () => (
      <div className="bg-page1 flex items-center justify-center text-pageBlack font-bold text-4xl h-full">
        Loading...
      </div>
    ),
  });

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 grid-row-2 h-[85vh] md:h-[60vh] w-full">
        <div className="bg-page1 col-span-12 md:col-span-4 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden h-full">
          <MainWelcome />
        </div>
        <div className="col-span-12 md:col-span-8 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden h-full">
          <CluserMap lakes={props.lakes} />
        </div>
      </div>
      <div className="grid grid-cols-12 grid-row-6 h-[40rem] w-full">
        <div className="row-span-1 col-span-12 h-full w-full">
          <div className="grid grid-cols-12 w-full h-full">
            <div className="bg-page2 col-span-8 w-full h-full border-2 border-pageMenu overflow-hidden">
              <FeaturedText />
            </div>
            <div className="bg-page3 col-span-2 w-full h-full border-2 border-pageMenu"></div>
            <div className="bg-page3 col-span-2 w-full h-full border-2 border-pageMenu"></div>
          </div>
        </div>
        <div className="bg-page1 row-span-5 col-span-12 h-full w-full border-2 border-pageMenu overflow-hidden">
          {/* <PostCarousel /> */}
        </div>
      </div>
      <div className="border-2 border-pageMenu w-full h-[350px] px-10">
        <PostCarousel />
      </div>
    </React.Fragment>
  );
}

export default FirstView;
