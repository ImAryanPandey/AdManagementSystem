import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-600 mt-2">Page Not Found</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
