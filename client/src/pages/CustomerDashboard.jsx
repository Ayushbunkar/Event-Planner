import React, { useState } from "react";
import Sidebar from "../components/customer/Sidebar";
import Overview from "../components/customer/Overview";
import Profile from "../components/customer/Profile";
import Bookings from "../components/customer/Bookings";
import Support from "../components/customer/Support";
import Feedback from "../components/customer/Feedback";


import navbarBg from "../assets/dashboardbg.jpg";
import profilePic from "../assets/cover.jpg";    

const CustomerDashboard = () => {
  const [active, setActive] = useState("profile");

  return (
    <>
      <div
        className="w-full py-3 px-10 pt-80 flex  bg-blend-saturation bg-black/35 justify-end items-center shadow-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${navbarBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
      
      </div>

      
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
