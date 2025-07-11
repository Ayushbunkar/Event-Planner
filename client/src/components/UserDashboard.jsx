import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api"; 
import { useNavigate } from "react-router-dom";
import dashboardNavbarBg from "../assets/cover.jpg";

const UserDashboard = () => {
  const [userdata, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      const user = res.data.data;

      if (user.photo) {
        user.photo = `${user.photo}?t=${Date.now()}`;           
      }

      setUserData(user);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const sections = [
    "Dashboard",
    "Wallet",
    "Notifications",
    "Event Timeline",
    "Login Activity",
    "Account Settings",
  ];

  const SidebarItem = ({ label }) => (
    <div
      onClick={() => setActiveSection(label)}
      className={`cursor-pointer px-2 py-1 rounded-md transition hover:text-[#a83232] ${
        activeSection === label
          ? "bg-[#f5e0c0] font-semibold text-[#8b1f1f]"
          : ""
      }`}
    >
      {label}
    </div>
  );

  const WalletSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-1">
        Wallet Balance
      </h3>
      <p className="text-2xl font-bold text-[#8b1f1f]">
        ₹{userdata.wallet || 0}
      </p>
    </div>
  );

  const NotificationsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-4">
        Notifications
      </h3>
      <ul className="space-y-2 text-sm text-[#6b3b11] list-disc list-inside">
        <li>New message from planner</li>
        <li>Payment reminder for catering</li>
        <li>Vendor confirmed: Floral Decor</li>
      </ul>
    </div>
  );

  const TimelineSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-4">Events</h3>
      <ul className="space-y-2 text-sm text-[#6b3b11]">
        <li>🎶 Sangeet: 18 Dec, 6 PM</li>
        <li>💍 Wedding: 20 Dec, 9 AM</li>
        <li>🎉 Reception: 21 Dec, 8 PM</li>
      </ul>
    </div>
  );

  const LoginSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-4">
        Login Activity
      </h3>
      <p className="text-sm text-[#6b3b11]">
        <b>Last Login:</b> {userdata.lastLogin || "N/A"}
      </p>
      <p className="text-sm text-[#6b3b11]">
        <b>IP:</b> {userdata.ip || "N/A"}
      </p>
      <p className="text-sm text-[#6b3b11]">
        <b>Device:</b> {userdata.device || "N/A"}
      </p>
    </div>
  );

  const SettingsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-4">
        Account Settings
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#8b1f1f] text-white text-sm px-4 py-2 rounded-md hover:bg-[#a83232]">
          Logout
        </button>
        <button className="border border-red-500 text-red-600 text-sm px-4 py-2 rounded-md hover:bg-red-50">
          Delete Account
        </button>
      </div>
    </div>
  );

  if (!userdata) return <div className="p-10">Loading...</div>;

  return (
    <>
      {/* Navbar */}
      <nav
        className="flex justify-between items-center px-6 py-4 shadow-sm border-b border-[#e0c9a6]"
        style={{
          backgroundImage: `url(${dashboardNavbarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-lg font-bold drop-shadow-md">
          User Dashboard
        </h1>
        {userdata.photo ? (
          <img
            src={userdata.photo}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-white text-[#8b1f1f] flex items-center justify-center text-lg font-bold">
            {userdata.name?.charAt(0)}
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-[#f9f4ef] flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white border-r border-[#e0c9a6] p-6">
          <div className="text-center relative mb-8">
            {userdata.photo ? (
              <img
                src={userdata.photo}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[#f5e0c0]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto bg-[#f5e0c0] text-[#8b1f1f] flex items-center justify-center text-3xl font-bold">
                {userdata.name?.charAt(0)}
              </div>
            )}
            <h2 className="mt-4 text-xl font-semibold text-[#5e2c04]">
              {userdata.name}
            </h2>
            <p className="text-sm text-[#946231]">{userdata.email}</p>
            <p className="text-sm text-[#946231]">{userdata.phone}</p>
            <button
              onClick={() => navigate("/edit-dashboard")}
              className="absolute border-2 rounded-2xl px-5 py-1 hover:bg-yellow-100 bg-yellow-50 text-sm mt-2 left-1/2 -translate-x-1/2"
            >
              ✏️ Edit Profile
            </button>
          </div>

          <nav className="space-y-4 mt-4 text-[#6b3b11] text-sm">
            {sections.map((s) => (
              <SidebarItem key={s} label={s} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {activeSection === "Dashboard" && (
            <>
              <WalletSection />
              <NotificationsSection />
              <TimelineSection />
              <LoginSection />
              <SettingsSection />
            </>
          )}
          {activeSection === "Wallet" && <WalletSection />}
          {activeSection === "Notifications" && <NotificationsSection />}
          {activeSection === "Event Timeline" && <TimelineSection />}
          {activeSection === "Login Activity" && <LoginSection />}
          {activeSection === "Account Settings" && <SettingsSection />}
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
