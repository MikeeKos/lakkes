import Link from "next/link";
import React, {useContext} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { motion } from "framer-motion";
import NotificationContext from "../../store/notification-context";

function CarouselDescriptionSplit(props) {
  const notificationCtx = useContext(NotificationContext);
  const num = props.lakeNumber;
  const lake = props.lakes[num];

  const goArrow = (
    <motion.svg
      whileHover={{ scale: [1, 1.2, 1, 1.2, 1] }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-8 h-8 md:w-10 md:h-10"
    >
      <path
        stroke="#383434"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12h12m0 0l-5-5m5 5l-5 5"
      ></path>
    </motion.svg>
  );

  const copyToClipboardText = `${lake.geometry.coordinates[1]}, ${lake.geometry.coordinates[0]}`;

  const showCopyNotification = () => {
    notificationCtx.showNotification({
      title: "success!",
      message: "The coordinates have been copied to the clipboard",
      status: "success",
    });
  }

  return (
    <div className="absolute w-full h-full overflow-hidden">
      <div className="relative w-full h-full bg-page1 grid row-span-3 font-page">
        <Link
          href={`/list/${lake._id}`}
          className="h-[2.4rem] truncate px-2 pt-2 me-2 text-2xl font-bold tracking-tight text-pageMenu"
        >
          {lake.title}
        </Link>

        <span className="h-[1.4rem] flex items-center truncate px-2 font-normal text-xs text-pageMenu opacity-50">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              viewBox="0 0 50 50"
              xmlSpace="preserve"
              className="w-7 h-7 p-0"
            >
              <g>
                <path d="M24.43 40.153a1 1 0 001.658 0l9.436-14.018a11.239 11.239 0 001.725-5.976c0-6.376-5.383-11.564-12-11.564s-12 5.188-12 11.564c0 2.114.599 4.184 1.749 6.012l9.432 13.982zm.82-29.559c5.514 0 10 4.291 10 9.564a9.215 9.215 0 01-1.402 4.886l-8.59 12.76-8.584-12.726a9.232 9.232 0 01-1.424-4.92c0-5.273 4.486-9.564 10-9.564z"></path>
                <path d="M25.25 25.616c3.135 0 5.686-2.467 5.686-5.5s-2.55-5.5-5.686-5.5-5.686 2.467-5.686 5.5 2.551 5.5 5.686 5.5zm0-9c2.032 0 3.686 1.57 3.686 3.5s-1.653 3.5-3.686 3.5-3.686-1.57-3.686-3.5 1.654-3.5 3.686-3.5z"></path>
              </g>
            </svg>
          </div>
          <div>{lake.location}</div>
        </span>
        <span className="h-[1.4rem] flex items-center truncate px-2 font-normal text-xs text-pageMenu opacity-50">
          <div onClick={showCopyNotification}>
            <CopyToClipboard text={copyToClipboardText}>
              <motion.svg
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-7 h-7 p-0 hover:cursor-pointer "
              >
                <path
                  fill="#383434"
                  fillRule="evenodd"
                  d="M19.5 16.5v-12l-.75-.75H9l-.75.75v3h-3l-.75.75v12l.75.75H15l.75-.75v-3h3l.75-.75zm-3.75-.75v-7.5L15 7.5H9.75V5.25H18v10.5h-2.25zM6 9h8.25v10.5H6V9z"
                  clipRule="evenodd"
                ></path>
              </motion.svg>
            </CopyToClipboard>
          </div>
          <div className="truncate" onClick={showCopyNotification}>
            <CopyToClipboard text={copyToClipboardText}>
              <span className="hover:underline hover:cursor-pointer">
                copy : {lake.geometry.coordinates[1]},{" "}
                {lake.geometry.coordinates[0]}
              </span>
            </CopyToClipboard>
          </div>
        </span>
        <Link href={`/list/${lake._id}`} className="opacity-100 sm:opacity-0 md:opacity-100 relative">
          <span className="absolute w-full ps-2 text-ellipsis text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 overflow-hidden h-[2.1rem] sm:h-[4.5em] break-words">
            {lake.description}
          </span>
        </Link>
        <div className="h-[3rem]"></div>
        <Link href={`/list/${lake._id}`}>
          <div className="hover:cursor-pointer absolute bottom-0 bg-page2 hover:bg-page1 duration-200 flex justify-center items-center w-full h-[1.5rem] sm:h-[1.8rem] md:h-[2rem] border-t-4 border-pageMenu">
            {goArrow}
            {goArrow}
            {goArrow}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CarouselDescriptionSplit;
