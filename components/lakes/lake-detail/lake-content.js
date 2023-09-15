import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import classes from "./lake-content.module.css";
import React, { useContext, useState } from "react";
import NotificationContext from "../../../store/notification-context";
import Comments from "../../comments/comments";
import LakeCarousel from "./lake-carousel";
import { motion } from "framer-motion";
import DetailMap from "./detail-map";

function LakeContent(props) {
  const [hightlight, setHightlight] = useState(false);
  const [sateliteMap, setSateliteMap] = useState(false);
  // console.log(props.lake.geometry.coordinates[0])
  // console.log(props.lake.geometry.coordinates[1])
  // console.log(props.lake.gometry.coordinates[0])
  // console.log(props.lake.gometry.coordinates[1])

  console.log("___WHOLE LAKE OBJECT___");
  console.log(props.lake);
  const router = useRouter();
  const notificationCtx = useContext(NotificationContext);
  const lakeId = router.query.lakeId;

  async function deleteHandler() {
    notificationCtx.showNotification({
      title: "deleting...",
      message: ". . .",
      status: "pending",
    });
    try {
      const response = await fetch(`/api/user/${lakeId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      notificationCtx.showNotification({
        title: "success!",
        message: "successfully removed object",
        status: "success",
      });
      router.push("/");
    } catch (error) {
      console.log("___client side try catch error___");
      console.log(error);
      notificationCtx.showNotification({
        title: "Error!",
        message: "Something went wrong, when deleting lake",
        status: "error",
      });
    }
  }

  const text = props.lake.title.toLowerCase();
  const handleText = `↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text} ↓ ${text}`;

  const firstSlider = (
    <div className="w-full h-[6rem] overflow-hidden bg-page2">
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

  // const handleMouseEnter = () => {
  //   const divElement = document.getElementById("yourDivId"); // Replace 'yourDivId' with the actual ID of your div
  //   if (divElement) {
  //     divElement.scrollTop = divElement.scrollHeight;
  //   }
  // };

  const upHandler = () => {
    const divElement = document.getElementById("yourDivId"); // Replace 'yourDivId' with the actual ID of your div
    if (divElement) {
      divElement.scrollTop = 0; // Scroll to the top
    }
    setHightlight(true);
    setTimeout(() => {
      setHightlight(false);
    }, 250);
  };

  const downHandler = () => {
    const divElement = document.getElementById("yourDivId"); // Replace 'yourDivId' with the actual ID of your div
    if (divElement) {
      divElement.scrollTop = divElement.scrollHeight;
    }
    setHightlight(true);
    setTimeout(() => {
      setHightlight(false);
    }, 250);
  };

  return (
    <React.Fragment>
      {/* <div className="w-full h-[6rem] overflow-hidden border-2 border-pageMenu bg-page2">
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
      </div> */}
      <div className="w-full h-[60rem] md:h-[30rem] overflow-hidden bg-page1 border-x-2 border-pageMenu">
        <div className="w-full h-full md:grid md:grid-cols-12">
          <div className="w-hull h-1/2 md:h-full md:col-span-5 border-2 border-pageMenu">
            <div className="w-full h-full grid grid-cols-12">
              <div className={`${hightlight ? "shadow-[inset_-50px_-30px_150px_#46464620]" : ""} w-full h-full col-span-11`}>
                <div className="border-b-4 border-pageMenu">{firstSlider}</div>
                <div
                  id="yourDivId"
                  className="font-page text-pageMenu pe-2 m-5 h-[20rem] overflow-y-scroll"
                >
                  <div className="text-3xl font-bold tracking-wide truncate">
                    {props.lake.title}
                  </div>
                  <div className="truncate opacity-60 text-sm pb-4">
                    <span className="pe-1">{props.lake.location}</span>
                    <span className="pe-1">-</span>
                    <span>{props.lake.subtitle}</span>
                  </div>
                  <div>{props.lake.description}</div>
                </div>
              </div>
              <div className="w-full h-full col-span-1 border-s-4 border-pageMenu overflow-hidden">
                <div className="flex justify-center items-center w-full h-1/2 border-b-2 border-pageMenu overflow-hidden">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.25 }}
                    className="text-5xl text-pageMenu"
                    onClick={upHandler}
                  >
                    ↑
                  </motion.span>
                </div>
                <div className="flex justify-center items-center w-full h-1/2 border-t-2 border-pageMenu overflow-hidden">
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.25 }}
                    className="text-5xl text-pageMenu"
                    onClick={downHandler}
                  >
                    ↓
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:h-full md:col-span-7 border-2 border-pageMenu bg-page2 p-5">
            <div className="w-full h-full border-4 border-pageMenu bg-page1">
              <LakeCarousel lake={props.lake} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40rem] md:h-[20rem] overflow-hidden border-x-2 border-b-2 border-pageMenu">
        <div className="w-full h-full md:grid md:grid-cols-12">
          <div className="flex w-hull h-[30%] md:h-full md:col-span-5 border-2 border-pageMenu bg-page1">
            <div className="flex items-center justify-center w-1/2 h-full border-e-2 border-pageMenu"></div>
            <div className="flex items-center justify-center w-1/2 h-full border-s-2 border-pageMenu"></div>
          </div>
          <div className="w-hull h-[70%] md:h-full md:col-span-7 border-2 border-pageMenu bg-page2 p-5">
            <div className="w-full h-full border-4 border-pageMenu bg-page1">
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
      <article className={classes.content}>
        <Link href={`/list/${lakeId}/edit`}>Edit page</Link>
        <div>
          <button onClick={deleteHandler}>DELETE</button>
        </div>
        <Image
          src="/image.png"
          alt="Hello"
          width={300}
          height={200}
          placeholder="blur"
          blurDataURL={"/image.png"}
        />
        <div>
          <h2>Author: {props.lakeAuthorName}</h2>
        </div>
        <div className={classes.content}>
          <div>{props.lake.title}</div>
          <div>{props.lake.description}</div>
          <div>{props.lake.location}</div>
          <div>{props.lake.subtitle}</div>
        </div>
        {/* <div>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </div> */}
        {props.lake.images.map((image) => {
          return (
            <li key={image.filename}>
              <article>{image.filename}</article>
              <Image
                src={image.url}
                alt="Hello"
                width={300}
                height={200}
                placeholder="blur"
                blurDataURL={"/image.png"}
              />
            </li>
          );
        })}
        <Comments eventId={lakeId} />
      </article>
    </React.Fragment>
  );
}

export default LakeContent;
