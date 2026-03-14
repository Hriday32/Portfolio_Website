import React from "react";
import { Link } from "lucide-react";

const Pagenotfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="w-full max-w-lg p-8 text-center bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Oops! Page not found
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Go back home or Need help? Call: +977 9819604968
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
