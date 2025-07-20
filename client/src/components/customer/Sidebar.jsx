import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ active, setActive }) => {
  return (
    <div className="w-1/3 md:w-1/4 lg:w-1/3 min-h-[87vh] p-5 flex flex-col justify-between font-serif bg-[#fff7ef] border-r border-[#f5cbaa] shadow-xl rounded-tr-3xl rounded-br-3xl">
      
      <div>
        <div className="border-b-2 border-[#f5cbaa] pb-3 mb-6 text-center">
          <span className="text-2xl font-bold text-[#7a1d1d] tracking-wider">
            Customer's Dashboard
          </span>
        </div>

        
        <ul className="space-y-4">
          <li
            className={`flex items-center gap-3 p-3 rounded-lg text-md font-medium cursor-pointer transition-all border ${
              active === "overview"
                ? "bg-[#7a1d1d] text-white border-[#7a1d1d]"
                : "text-[#7a1d1d] border-[#f5cbaa] hover:bg-[#a3542d] hover:text-white"
            }`}
            onClick={() => setActive("overview")}
          >
            <FaTachometerAlt /> Overview
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg text-md font-medium cursor-pointer transition-all border ${
              active === "profile"
                ? "bg-[#7a1d1d] text-white border-[#7a1d1d]"
                : "text-[#7a1d1d] border-[#f5cbaa] hover:bg-[#a3542d] hover:text-white"
            }`}
            onClick={() => setActive("profile")}
          >
            <FaUser /> Profile
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg text-md font-medium cursor-pointer transition-all border ${
              active === "bookings"
                ? "bg-[#7a1d1d] text-white border-[#7a1d1d]"
                : "text-[#7a1d1d] border-[#f5cbaa] hover:bg-[#a3542d] hover:text-white"
            }`}
            onClick={() => setActive("bookings")}
          >
            <FaCalendarCheck /> Bookings
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg text-md font-medium cursor-pointer transition-all border ${
              active === "support"
                ? "bg-[#7a1d1d] text-white border-[#7a1d1d]"
                : "text-[#7a1d1d] border-[#f5cbaa] hover:bg-[#a3542d] hover:text-white"
            }`}
            onClick={() => setActive("support")}
          >
            <FaLifeRing /> Support
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg text-md font-medium cursor-pointer transition-all border ${
              active === "feedback"
                ? "bg-[#7a1d1d] text-white border-[#7a1d1d]"
                : "text-[#7a1d1d] border-[#f5cbaa] hover:bg-[#a3542d] hover:text-white"
            }`}
            onClick={() => setActive("feedback")}
          >
            <FaCommentDots /> Feedback
          </li>
        </ul>
      </div>

      
      <div className="mt-8">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-[#7a1d1d] text-[#7a1d1d] hover:bg-[#7a1d1d] hover:text-white rounded-xl font-semibold transition-all shadow-md">
          Logout <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
