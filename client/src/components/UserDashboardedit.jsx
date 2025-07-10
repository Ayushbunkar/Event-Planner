import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api";
import defaultProfileImg from "../assets/cover.jpg";

const UserDashboardedit = () => {
  const [userdata, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    wallet: 5000,
    lastLogin: "6 July, 2025",
    ip: "192.168.1.23",
    device: "Chrome on Windows",
    picture: "", // for backend image URL
  });

  const [editableData, setEditableData] = useState(userdata);
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const sections = [
    "Dashboard",
    "Wallet",
    "Notifications",
    "Event Timeline",
    "Login Activity",
    "Account Settings",
  ];

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      setEditableData(res.data.data);
      setPreviewImage(res.data.data.picture || null);
      toast.success(res.data.message || "User data loaded");
    } catch (error) {
      toast.error(`Error: ${error.response?.status || error.message}`);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editableData.name);
      formData.append("email", editableData.email);
      formData.append("phone", editableData.phone);
      if (selectedFile) formData.append("picture", selectedFile);

      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUserData({ ...editableData, picture: res.data.data.picture });
      setIsEditing(false);
      setSelectedFile(null);
      toast.success(res.data.message || "Profile updated successfully");
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

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
      <p className="text-2xl font-bold text-[#8b1f1f]">₹{userdata.wallet}</p>
    </div>
  );

  const NotificationsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 border border-[#e0c9a6]">
      <h3 className="text-lg font-semibold text-[#5e2c04] mb-4">
        Notifications
      </h3>
      <ul className="list-disc list-inside text-sm text-[#6b3b11] space-y-2">
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
        <b>Last Login:</b> {userdata.lastLogin}
      </p>
      <p className="text-sm text-[#6b3b11]">
        <b>IP:</b> {userdata.ip}
      </p>
      <p className="text-sm text-[#6b3b11]">
        <b>Device:</b> {userdata.device}
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

  return (
    <div className="min-h-screen bg-[#f9f4ef] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white border-r border-[#e0c9a6] p-6">
        <div className="text-center relative mb-8">
          <div className="relative w-24 h-24 mx-auto">
            <img
              src={previewImage || defaultProfileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#f5e0c0]"
            />
            {isEditing && (
              <>
                <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer border">
                  📷
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </>
            )}
          </div>

          <div className="mt-4 flex flex-col items-center gap-2">
            {isEditing ? (
              <>
                <input
                  name="name"
                  value={editableData.name || ""}
                  onChange={handleChange}
                  className="border p-1 rounded-md text-center w-5/6"
                />
                <input
                  name="email"
                  value={editableData.email || ""}
                  onChange={handleChange}
                  className="border p-1 rounded-md text-center w-5/6"
                />
                <input
                  name="phone"
                  value={editableData.phone || ""}
                  onChange={handleChange}
                  className="border p-1 rounded-md text-center w-5/6"
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-[#5e2c04]">
                  {userdata.name}
                </h2>
                <p className="text-sm text-[#946231]">{userdata.email}</p>
                <p className="text-sm text-[#946231]">{userdata.phone}</p>
              </>
            )}
            <button
              className="text-sm mt-2 bg-yellow-50 border px-3 py-1 rounded-md hover:bg-yellow-100"
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            >
              {isEditing ? "💾 Save Changes" : "✏️ Edit Profile"}
            </button>
          </div>
        </div>

        <nav className="space-y-4 text-[#6b3b11] text-sm">
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
  );
};

export default UserDashboardedit;
