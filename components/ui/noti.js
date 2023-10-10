import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SlideInNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <div className="bg-white min-h-[200px] flex items-center justify-center">
      <button
        onClick={() => {
          setNotifications((pv) => [generateNotif(), ...pv]);
        }}
        className="text-sm text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all font-medium px-3 py-2 rounded"
      >
        Add notification
      </button>
      <div className="flex flex-col gap-1 w-[45vw] sm:w-[42vw] md:w-[40vw] lg:w-[35vw] fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((notification) => (
            <Notification
              removeNotif={removeNotif}
              {...notification}
              key={notification.id}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start gap-5 pointer-events-auto bg-page1 shadow-2xl border-4 border-pageMenu"
    >
      <div className="w-full h-full grid grid-cols-12">
        <div className="w-full h-full col-span-2 md:col-span-1 border-2 flex items-center justify-center">
          V
        </div>
        <div className="w-full h-full col-span-8 md:col-span-9 border-2">
          <span className="w-full h-full">{text}</span>
        </div>
        <div className="w-full h-full col-span-2 md:col-span-1 border-2 flex items-center justify-center">
          <button
            onClick={() => removeNotif(id)}
            className="w-full h-full flex items-center justify-center"
          >
            <motion.svg
              whileHover={{ scale: 1.2 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <g>
                <g>
                  <path
                    stroke="#383434"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 9l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3M4 16.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C20 5.52 20 6.08 20 7.2v9.6c0 1.12 0 1.68-.218 2.108a2.001 2.001 0 01-.874.874c-.428.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 01-.874-.874C4 18.48 4 17.92 4 16.8z"
                  ></path>
                </g>
              </g>
            </motion.svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SlideInNotifications;

const generateNotif = () => {
  const data = {
    id: Math.random(),
    text: "Hello there everywherfdksaokfdod sjaoi f adsfd asfasdff asdjadsiooif e",
  };

  return data;
};
