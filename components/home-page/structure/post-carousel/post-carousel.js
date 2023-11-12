import React from "react";
import { motion } from "framer-motion";
import CarouselElement from "./carousel-element";
import CarouselDesc from "./carousel-desc";

function PostCarousel(props) {
  const direction = props.arrow;
  return (
    <React.Fragment>
      {direction === "right" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="w-full h-full grid grid-cols-12 grid-rows-2"
        >
          <div className="p-[4%] md:col-span-6 md:row-span-2 col-span-12 row-span-1 border-2 border-pageMenu">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-pageMenu shadow-lg">
              <div className="relative overflow-hidden row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page3">
                <div className="absolute w-full h-full bg-pageBlack">
                  <CarouselElement lakes={props.lakes} lakeNumber={3} />
                </div>
              </div>
              <div className="row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page4 relative border-s-4 sm:border-s-0 sm:border-t-4 border-pageMenu">
                <CarouselDesc
                  lakes={props.lakes}
                  lakeNumber={3}
                  variant={"split"}
                />
              </div>
            </div>
          </div>
          <div className="p-[4%] md:col-span-6 md:row-span-2 col-span-12 row-span-1 border-2 border-pageMenu">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-pageMenu shadow-lg">
              <div className="relative overflow-hidden row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page3">
                <div className="absolute w-full h-full bg-pageBlack">
                  <CarouselElement lakes={props.lakes} lakeNumber={4} />
                </div>
              </div>
              <div className="row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page4 relative border-s-4 sm:border-s-0 sm:border-t-4 border-pageMenu">
                <CarouselDesc
                  lakes={props.lakes}
                  lakeNumber={4}
                  variant={"split"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {direction === "left" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="w-full h-full grid grid-cols-12 grid-rows-2"
        >
          <div className="p-[4%] col-span-12 row-span-1 sm:col-span-6 sm:row-span-2 border-2 border-pageMenu">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-pageMenu shadow-lg">
              <div className="relative overflow-hidden row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page3">
                <div className="absolute w-full h-full bg-pageBlack">
                  <CarouselElement lakes={props.lakes} lakeNumber={0} />
                </div>
              </div>
              <div className="row-span-8 col-span-4 sm:row-span-4 sm:col-span-8 bg-page4 relative border-s-4 sm:border-s-0 sm:border-t-4 border-pageMenu">
                <CarouselDesc
                  lakes={props.lakes}
                  lakeNumber={0}
                  variant={"normal"}
                />
              </div>
            </div>
          </div>
          <div className="p-[4%] col-span-6 row-span-1 sm:col-span-6 sm:row-span-1 border-2 border-pageMenu">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-pageMenu shadow-lg">
              <div className="relative overflow-hidden col-span-8 row-span-5 md:col-span-5 md:row-span-8 bg-page3">
                <div className="absolute w-full h-full bg-pageBlack">
                  <CarouselElement lakes={props.lakes} lakeNumber={1} />
                </div>
              </div>
              <div className="col-span-8 row-span-3 md:col-span-3 md:row-span-5 bg-page4 relative">
                <CarouselDesc
                  lakes={props.lakes}
                  lakeNumber={1}
                  variant={"side"}
                />
              </div>
            </div>
          </div>
          <div className="p-[4%] col-span-6 row-span-1 sm:col-span-6 sm:row-span-1 border-2 border-pageMenu">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full border-4 border-pageMenu shadow-lg">
              <div className="relative overflow-hidden col-span-8 row-span-5 md:col-span-5 md:row-span-8 bg-page3">
                <div className="absolute w-full h-full bg-pageBlack">
                  <CarouselElement lakes={props.lakes} lakeNumber={2} />
                </div>
              </div>
              <div className="col-span-8 row-span-3 md:col-span-3 md:row-span-5 bg-page4 relative">
                <CarouselDesc
                  lakes={props.lakes}
                  lakeNumber={2}
                  variant={"side"}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </React.Fragment>
  );
}

export default PostCarousel;
