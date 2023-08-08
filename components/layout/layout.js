import React, { useContext } from "react";
import MainNavigation from "./main-navigation";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  //when notification isn't null then render notification in layout
  const activeNotification = notificationCtx.notification;

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="font-body">{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </React.Fragment>
  );
}

export default Layout;
