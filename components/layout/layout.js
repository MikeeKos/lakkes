import React, { useContext } from "react";
import MainNavigation from "./main-navigation";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import Footer from "./footer";
import Logo from "./logo";
import UserMenu from "./user-menu";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  //when notification isn't null then render notification in layout
  const activeNotification = notificationCtx.notification;

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 grid-rows-2 h-32 md:h-24 w-full overflow-hidden">
        <div className="bg-page4 order-2 md:order-1 col-span-6 md:col-span-2 md:row-span-2 border-2 border-pageMenu w-full">
          <Logo />
        </div>
        <div className="bg-page3 order-1 md:order-2 col-span-12 md:col-span-8 md:row-span-2 border-2 border-pageMenu w-full overflow-hidden">
          <MainNavigation />
        </div>
        <div className="bg-page4 bg-page bg-page order-3 md:order-3 col-span-6 md:col-span-2 md:row-span-2 border-2 border-pageMenu w-full">
          <UserMenu />
        </div>
      </div>
      <main className="font-body">{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
      <div>Hello</div>
      <hr></hr>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
