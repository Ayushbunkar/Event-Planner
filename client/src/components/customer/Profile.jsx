import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-hot-toast";
import ProfileEditModal from "./ProfileEditModal";
import api from "../../config/api";

const Profile = () => {
  const [userdata, setUserData] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  const handleSave = async (updatedData) => {
    try {
      await api.put("/user/profile", updatedData);
      toast.success("Profile updated successfully");
      fetchUserData();
    } catch (error) {
      toast.error(
        `Update failed: ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#fff7ef] to-[#fdeada] min-h-screen py-16 px-4 font-serif relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#7a1d1d] mb-3 tracking-wide drop-shadow-sm">
          नमस्ते, {userdata.name?.split(" ")[0] || "Guest"}
        </h1>
        <p className="text-[#a3542d] text-lg italic">
          A royal glance at your graceful profile.
        </p>
      </div>

      <div>
        <div className="bg-white border-2 border-[#d6b78f] rounded-3xl shadow-lg p-10 max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 text-[#5e2c04] space-y-4 text-lg w-full">
            <div><span className="font-semibold text-[#a3542d]">Name:</span> {userdata.name}</div>
            <div><span className="font-semibold text-[#a3542d]">Email:</span> {userdata.email}</div>
            <div><span className="font-semibold text-[#a3542d]">Phone:</span> {userdata.phone}</div>
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#c49b63] shadow-lg">
            <img src={userdata.photo} alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="bg-white border border-[#e8d4bb] rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto mt-8 text-[#5e2c04]">
          <h2 className="text-2xl font-bold mb-4 text-[#7a1d1d] border-b pb-2 border-[#d6b78f]">
            Your Royal Details
          </h2>
          <div className="space-y-3 text-md">
            <div><b className="text-[#a3542d]">Gender:</b> {userdata.gender}</div>
            <div><b className="text-[#a3542d]">Occupation:</b> {userdata.occupation}</div>
            <div><b className="text-[#a3542d]">Address:</b> {userdata.address}</div>
            <div><b className="text-[#a3542d]">City:</b> {userdata.city}</div>
            <div><b className="text-[#a3542d]">District:</b> {userdata.district}</div>
            <div><b className="text-[#a3542d]">State:</b> {userdata.state}</div>
            <div><b className="text-[#a3542d]">Representing:</b> {userdata.representing}</div>
          </div>
        </div>

        <button
          onClick={() => setIsEditOpen(true)}
          className="absolute top-5 right-5 bg-[#a72c2c] hover:bg-[#7a1d1d] text-[#fdf1e3] hover:text-[#f9e4cc] font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow-md transition-all duration-300"
        >
          <CiEdit className="text-xl" /> Edit
        </button>
      </div>

      <ProfileEditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        oldData={userdata}
        onSave={handleSave}
      />
    </section>
  );
};

export default Profile;
