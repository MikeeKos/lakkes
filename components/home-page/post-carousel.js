import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

function PostCarousel() {
  const [startingPoint, setStartingPoint] = useState(0);
  const [transformx, settransformx] = useState(0);

  function clickCarouselHandler(event) {
    console.log("Clicked at:" + event.clientX)
    setStartingPoint(event.clientX);
  }

  function mouseMoveHandler(event) {
    if (startingPoint == 0) return;
    const mouseDelta = startingPoint - event.clientX;
    console.log("Mouse traveled" + mouseDelta);
  }

  function restartUpHandler() {
    console.log("Restarting poin")
    setStartingPoint(0);
  }

  function resetLeaveHandler() {
    console.log("Restarging point")
    setStartingPoint(0);
  }

  return (
    <div className="m-0 relative h-full w-full overflow-hidden">
      <motion.div
        onMouseMove={mouseMoveHandler}
        onMouseDown={clickCarouselHandler}
        onMouseUp={restartUpHandler}
        onMouseLeave={resetLeaveHandler}
        className="flex gap-[4vmin] absolute h-full items-center left-1/2 transform translate-y-[-50%]"
        style={{
          transform: `translateX(-${transformx}%)`,
        }}
      >
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        <div className="aspect-[40/56] h-[80%] bg-pageMenu object-cover object-center">
          Check
        </div>
        
      </motion.div>
    </div>
  );
}

export default PostCarousel;
