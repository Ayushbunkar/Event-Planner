import React, { useState } from "react";
import Sidebar from "../components/customer/Sidebar";
import Overview from "../components/customer/Overview";
import Profile from "../components/customer/Profile";
import Bookings from "../components/customer/Bookings";
import Support from "../components/customer/Support";
import Feedback from "../components/customer/Feedback";

// ✅ Import your assets
import navbarBg from "../assets/dashboardbg.jpg"; // update the filename if different
import profilePic from "../assets/cover.jpg";    // user's profile image or dummy photo

const CustomerDashboard = () => {
  const [active, setActive] = useState("profile");

  return (
    <>
      {/* ✅ Top Navbar with background image and profile photo */}
      <div
        className="w-full py-3 px-10 pt-80 flex  bg-blend-saturation bg-black/35 justify-end items-center shadow-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${navbarBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
      
      </div>

      {/* ✅ Main Dashboard Content */}
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <div className="border w-full">
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
