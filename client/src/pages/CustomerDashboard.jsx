import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

import Sidebar from "../components/customer/Sidebar";
import Overview from "../components/customer/Overview";
import Profile from "../components/customer/Profile";
import Bookings from "../components/customer/Bookings";
import Support from "../components/customer/Support";
import Feedback from "../components/customer/Feedback";

import navbarBg from "../assets/dashboardbg.jpg";

const CustomerDashboard = () => {
  const [active, setActive] = useState("profile");
  const { user } = useAuth();

  return (
    <>
      <div
        className="w-full py-3 px-6 md:px-10 pt-50 flex justify-end items-center bg-black/40 bg-blend-overlay shadow-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${navbarBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-md backdrop-blur-sm max-w-sm w-full">
          <img
            src={user?.photo || "/default-avatar.png"}
            alt="User"
            className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 shadow-sm"
          />
          <div className="truncate">
            <h3 className="text-lg md:text-xl font-bold text-[#7a1d1d] truncate">
              {user?.name || "Guest User"}
            </h3>
            <p className="text-sm text-[#a3542d]">
              Welcome back to your dashboard
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <Sidebar active={active} setActive={setActive} />
        <div className="w-full p-6">
          {active === "overview" && <Overview />}
          {active === "profile" && <Profile />}
          {active === "bookings" && <Bookings />}
          {active === "support" && <Support />}
          {active === "feedback" && <Feedback />}
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
