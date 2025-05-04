import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] text-center px-4">
      <h1 className="text-[120px] font-bold text-[#002868] leading-none">
        404
      </h1>
      <h2 className="text-[32px] font-semibold text-[#111827] mt-4">
        Page Not Found
      </h2>
      <p className="text-[#6B7280] text-[16px] mt-2 max-w-[400px]">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-[#002868] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#001f4d] transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default PageNotFound;
