import React from "react";

const NotificationItem = ({ notification, markAsRead, removeNotification }) => {
  return (
    <div
      className={`bg-gray-100 p-4 rounded-lg shadow-md ${notification.read ? "bg-gray-300" : "bg-gray-200"}`}
    >
      <p className="font-semibold">{notification.title}</p>
      <p>{notification.message}</p>
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={() => markAsRead(notification.id)}
          className="text-blue-600 hover:text-blue-800"
        >
          Mark as Read
        </button>
        <button
          onClick={() => removeNotification(notification.id)}
          className="text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default NotificationItem;
