import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import NotificationContext from "../../../store/notification-context";
import LakeCarousel from "./lake-carousel";
import { motion } from "framer-motion";
import DetailMap from "./detail-map";
import CopyToClipboard from "react-copy-to-clipboard";
import CommentsBlock from "./comments/comments-block";

function LakeContent(props) {
  const [hightlight, setHightlight] = useState(false);
  const [sateliteMap, setSateliteMap] = useState(false);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const lakeId = router.query.lakeId;

  const showCopyNotification = () => {
    notificationCtx.showNotification({
      title: "success!",
      message: "The coordinates have been copied to the clipboard",
      status: "success",
    });
  };

  const text = props.lake.title.toLowerCase();
  const handleText = `↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text}`;

  const firstSlider = (
    <div className="w-full h-[6rem] overflow-hidden bg-page2 md:bg-page3">
      <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <motion.span
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 90,
            delay: 5,
          }}
          className="whitespace-nowrap absolute bottom-[1px] text-7xl font-page font-[1000] tracking-tight text-page1 overflow-hidden"
        >
          {handleText}
        </motion.span>
        <motion.span
          animate={{
            x: [-1000, 1000],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 90,
            delay: 5,
          }}
          className="opacity-90 whitespace-nowrap absolute text-7xl font-page font-[1000] tracking-tight text-pageBlack overflow-hidden"
        >
          {handleText}
        </motion.span>
      </div>
    </div>
  );

  const upHandler = () => {
    const divElement = document.getElementById("yourDivId");
    if (divElement) {
      divElement.scrollTop = 0; // Scroll to the top
    }
    setHightlight(true);
    setTimeout(() => {
      setHightlight(false);
    }, 250);
  };

  const downHandler = () => {
    const divElement = document.getElementById("yourDivId");
    if (divElement) {
      divElement.scrollTop = divElement.scrollHeight;
    }
    setHightlight(true);
    setTimeout(() => {
      setHightlight(false);
    }, 250);
  };

  const copyToClipboardText = `${props.lake.geometry.coordinates[1]}, ${props.lake.geometry.coordinates[0]}`;

  return (
    <React.Fragment>
      <div className="w-full h-[60rem] md:h-[30rem] overflow-hidden bg-page1 border-x-2 border-pageMenu">
        <div className="w-full h-full md:grid md:grid-cols-12">
          <div className="w-hull h-1/2 md:h-full md:col-span-5 border-2 border-pageMenu md:p-5 overflow-hidden bg-page1 md:bg-page2">
            <div className="w-full h-full grid grid-cols-12 md:border-4 border-pageMenu shadow-xl bg-page1">
              <div
                className={`${
                  hightlight ? "shadow-[inset_-50px_-30px_150px_#46464620]" : ""
                } w-full h-full col-span-11`}
              >
                <div className="border-b-4 border-pageMenu">{firstSlider}</div>
                <div
                  id="yourDivId"
                  className="font-page text-pageMenu pe-2 m-5 h-[16rem] overflow-y-scroll"
                >
                  <div className="text-3xl font-bold tracking-wide truncate">
                    {props.lake.title}
                  </div>
                  <div className="truncate opacity-60 text-sm pb-4">
                    <span className="pe-1">{props.lake.location}</span>
                    <span className="pe-1">-</span>
                    <span>{props.lake.subtitle}</span>
                  </div>
                  <div className="break-words">{props.lake.description}</div>
                </div>
              </div>
              <div className="w-full h-full col-span-1 border-s-4 border-pageMenu overflow-hidden">
                <div className="flex justify-center items-center w-full h-1/2 border-b-2 border-pageMenu overflow-hidden">
                  <motion.span
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-5xl text-pageMenu hover:cursor-pointer"
                    onClick={upHandler}
                  >
                    ↑
                  </motion.span>
                </div>
                <div className="flex justify-center items-center w-full h-1/2 border-t-2 border-pageMenu overflow-hidden">
                  <motion.span
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.8 }}
                    className="text-5xl text-pageMenu hover:cursor-pointer"
                    onClick={downHandler}
                  >
                    ↓
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:h-full md:col-span-7 border-2 border-pageMenu md:bg-page1 bg-page2 p-5 overflow-hidden">
            <div className="w-full h-full border-4 border-pageMenu bg-page1 shadow-xl">
              <LakeCarousel lake={props.lake} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[40rem] md:h-[20rem] overflow-hidden bg-page2 flex justify-center items-center md:border-x-2 border-pageMenu">
        <div className="w-full h-[40rem] md:h-[20rem] overflow-hidden border-x-2 md:border-x-0 border-b-2 border-pageMenu">
          <div className="w-full h-full md:grid md:grid-cols-12">
            <div className="flex w-hull h-[30%] md:h-full md:col-span-5 border-2 border-pageMenu bg-page1">
              <div className="flex items-center justify-center w-1/2 h-full border-e-2 border-pageMenu">
                <div className="grid grid-rows-6 w-full h-full overflow-hidden">
                  <div className="row-span-3 w-full h-full flex items-end justify-center p-1 sm:p-3 text-center">
                    <span className="font-page text-pageMenu text-xl sm:text-2xl font-bold tracking-wide">
                      click to copy to clipboard
                    </span>
                  </div>
                  <div className="row-span-3 w-full h-full">
                    <div className="grid grid-cols-2 w-full">
                      <div
                        className="col-span-1 flex justify-end items-center"
                        onClick={showCopyNotification}
                      >
                        <CopyToClipboard text={copyToClipboardText}>
                          <motion.div
                            whileTap={{ scale: 0.7 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.svg
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.2 }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="w-7 h-7 md:w-14 md:h-14 p-0 hover:cursor-pointer"
                            >
                              <path
                                fill="#383434"
                                fillRule="evenodd"
                                d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25zM6 9h8.25v10.5H6V9z"
                                clipRule="evenodd"
                              ></path>
                            </motion.svg>
                          </motion.div>
                        </CopyToClipboard>
                      </div>
                      <div
                        className="col-span-1 flex justify-start items-center"
                        onClick={showCopyNotification}
                      >
                        <CopyToClipboard text={copyToClipboardText}>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <span className="font-page text-pageMenu text-base sm:text-ld md:text-xl tracking-wide hover:underline hover:cursor-pointer">
                              copy
                            </span>
                          </motion.div>
                        </CopyToClipboard>
                      </div>
                      <CopyToClipboard text={copyToClipboardText}>
                        <div className="col-span-2 flex justify-center items-center">
                          <span className="block font-page text-sm sm:text-base text-pageMenu">
                            {props.lake.geometry.coordinates[1]},
                          </span>
                        </div>
                      </CopyToClipboard>
                      <CopyToClipboard text={copyToClipboardText}>
                        <div className="col-span-2 flex justify-center items-center">
                          <span className="block font-page text-sm sm:text-base text-pageMenu">
                            {props.lake.geometry.coordinates[0]}
                          </span>
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-1/2 h-full border-s-2 border-pageMenu overflow-hidden">
                <div className="grid grid-rows-6">
                  <div className="row-span-3 w-full h-full">
                    <span className="w-full h-full p-1 sm:p-3 flex justify-center items-end font-page text-pageMenu text-xl sm:text-2xl font-bold tracking-wide text-center">
                      change map display style
                    </span>
                  </div>
                  <div className="row-span-3 h-full">
                    <div className="grid grid-cols-12 h-[5.3rem] md:h-[8rem]">
                      <div className="col-span-5 flex flex-col justify-center">
                        <motion.div
                          whileTap={{ scale: 0.7 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-full h-[3rem] md:h-[4.2rem] flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-[3rem] md:h-[4.2rem] hover:cursor-pointer"
                            onClick={() => setSateliteMap(false)}
                          >
                            <g stroke="#383434" strokeLinecap="round">
                              <path
                                strokeWidth={2}
                                d="M8.574 20.352l3.381-6.763a.05.05 0 01.09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 00-.05 0l-3.332 1.904c-.043.025-.091-.021-.07-.066zM20.5 18.5l-4-15M3.5 18.5l4-15M12 10.5v-2M12 5.5v-2"
                              ></path>
                            </g>
                          </svg>
                        </motion.div>
                        <span
                          onClick={() => setSateliteMap(false)}
                          className={`${
                            sateliteMap ? "" : "underline"
                          } text-sm md:text-sm lg:text-base flex justify-center font-page text-pageMenu text-center hover:cursor-pointer`}
                        >
                          outdoors
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <span className="font-body font-normal sm:font-bold text-5xl md:text-6xl pt-1 md:pt-5 lg:pt-4 text-pageMenu">
                          /
                        </span>
                      </div>
                      <div className="col-span-5 flex flex-col justify-center">
                        <motion.div
                          whileTap={{ scale: 0.7 }}
                          whileHover={{ scale: 1.1 }}
                          className="w-full h-[3rem] md:h-[4.2rem] flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#383434"
                            className="hover:scale-110 duration-100 h-[3rem] md:h-[4.2rem] hover:cursor-pointer"
                            onClick={() => setSateliteMap(true)}
                          >
                            <path d="M18 10a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zm-1.15 8.47a1 1 0 00-1.7 0l-1 1.63-3.29-5.6a1 1 0 00-1.72 0l-7 12A1 1 0 003 22h18a1 1 0 00.85-1.53zM10.45 20H4.74L10 11l2.94 5-1.25 2zm2.35 0l1.49-2.37.71-1.06 1-1.68L19.2 20z"></path>
                          </svg>
                        </motion.div>
                        <span
                          onClick={() => setSateliteMap(true)}
                          className={` ${
                            sateliteMap ? "underline" : ""
                          } text-sm md:text-sm lg:text-base flex justify-center font-page text-pageMenu text-center hover:cursor-pointer`}
                        >
                          satelite
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-hull h-[70%] md:h-full md:col-span-7 border-2 border-pageMenu bg-page2 p-5 overflow-hidden">
              <div className="w-full h-full border-4 border-pageMenu bg-page1 shadow-xl">
                <DetailMap
                  sateliteMap={sateliteMap}
                  initialCoordsFromEditPage={{
                    lng: props.lake.geometry.coordinates[0],
                    lat: props.lake.geometry.coordinates[1],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommentsBlock eventId={lakeId} />
    </React.Fragment>
  );
}

export default LakeContent;
