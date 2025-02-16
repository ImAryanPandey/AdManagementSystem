import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-gray-600">
        Welcome to your dashboard! Here you can manage your account, view stats, and access personalized features.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold">Profile</h2>
          <p className="text-gray-600 mt-2">View and update your personal information.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold">Ads</h2>
          <p className="text-gray-600 mt-2">Manage your active advertisements and check performance.</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold">Settings</h2>
          <p className="text-gray-600 mt-2">Customize your experience and change your preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
