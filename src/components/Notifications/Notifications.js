import React from "react";
import { useNotifications } from "../../context/NotificationContext";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const { notifications, markAsRead, removeNotification } = useNotifications();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Notifications</h2>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              markAsRead={markAsRead}
              removeNotification={removeNotification}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
