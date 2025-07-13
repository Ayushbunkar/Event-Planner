import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const [userdata, setUserData] = useState(oldData);

  if (!isOpen) return null;
  return (
    <>
      <div className="inset-0 fixed bg-black/70 flex justify-center items-center z-[101]">
        <div className="border border-[#d6b78f] w-1/2 min-h-[70vh] bg-[#fff7ef] rounded-2xl shadow-xl  mt-20">
          <div className="text-xl flex justify-between items-center p-4 border-b-2 border-[#e5c79d] bg-[#fdeada] rounded-t-2xl">
            <h1 className="font-bold text-[#7a1d1d]">Edit Profile</h1>
            <button onClick={onClose}>
              <IoIosCloseCircle className="text-3xl text-[#c04a3c] hover:text-[#a03027] transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditModal;