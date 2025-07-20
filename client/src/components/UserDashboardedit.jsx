import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../config/api"; // ✅ Adjusted path for working setup

const UserDashboardEdit = () => {
  const [userdata, setUserData] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/user/profile");
        const user = res.data.data;
        setUserData(user);
        setPreviewPhoto(user.photo || null);
      } catch (error) {
        toast.error(
          `Error: ${error.response?.status || error.message} | ${
            error.response?.data.message || "Failed to fetch profile"
          }`
        );
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewPhoto(URL.createObjectURL(file));
      setUserData({ ...userdata, newPhoto: file });
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userdata.name);
      formData.append("email", userdata.email);
      formData.append("phone", userdata.phone);
      if (userdata.newPhoto) {
        formData.append("photo", userdata.newPhoto);
      }

      const res = await api.put("/user/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
      navigate("/customer-dashboard");
    } catch (error) {
      toast.error(
        `Save failed: ${error.response?.status || error.message} | ${
          error.response?.data.message || "Something went wrong"
        }`
      );
    }
  };

  if (!userdata) return <div className="p-10">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Your Profile</h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        
        <div className="flex flex-col items-center mb-4">
          <div className="relative">
            <img
              src={previewPhoto || "/default-profile.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-rose-300"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 bg-rose-400 hover:bg-rose-500 text-white px-2 py-1 rounded-full text-xs"
            >
              📷
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              hidden
            />
          </div>
        </div>

        
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={userdata.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={userdata.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => navigate("/customer-dashboard")}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardEdit;
