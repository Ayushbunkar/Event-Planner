import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import api from "../../config/api";
import { toast } from "react-hot-toast";

const IndianStates = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  Haryana: ["Faridabad", "Gurugram", "Panipat", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad"],
  Karnataka: ["Bengaluru", "Mysore", "Mangalore", "Hubli"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Manipur: ["Imphal", "Thoubal", "Bishnupur"],
  Meghalaya: ["Shillong", "Tura", "Nongpoh"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  Sikkim: ["Gangtok", "Namchi", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
  Tripura: ["Agartala", "Dharmanagar", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
  Uttarakhand: ["Dehradun", "Haridwar", "Haldwani"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag"],
  Ladakh: ["Leh", "Kargil"],
  Puducherry: ["Puducherry", "Karaikal", "Yanam"],
  Chandigarh: ["Chandigarh"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
};

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    photo: "",
    gender: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    district: "",
    representing: "",
  });

  const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setPicture(file);
    }
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", userdata.name);
    formData.append("picture", picture);
    formData.append("phone", userdata.number);
    formData.append("gender", userdata.gender);
    formData.append("occupation", userdata.occupation);
    formData.append("address", userdata.address);
    formData.append("city", userdata.city);
    formData.append("state", userdata.state);
    formData.append("district", userdata.district);
    formData.append("representing", userdata.representing);

    try {
      const res = await api.put("/user/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(res.data.message);
      setUserData(res.data.data);
      onClose();
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data?.message || ""
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (oldData) setUserData(oldData);
  }, [isOpen, oldData]);

  if (!isOpen) return null;

  return (
    <div className="inset-0 fixed bg-black/70 flex justify-center items-center z-50">
      <div className="border w-11/12 md:w-1/2 max-h-[90vh] mt-10 bg-white rounded-lg overflow-y-auto">
        <div className="text-xl flex justify-between p-3 border-b-2 sticky top-0 bg-white z-10">
          <h1 className="font-bold">Edit Profile</h1>
          <button onClick={onClose}>
            <IoIosCloseCircle className="text-3xl text-red-500" />
          </button>
        </div>

        <form className="flex flex-col gap-3 p-4" onSubmit={handleEditProfile}>
          <div className="relative w-32 h-32 mx-auto">
            <img
              src={preview || userdata.photo}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border"
            />
            <label className="absolute bottom-0 right-0 bg-rose-300 hover:bg-blue-500 p-2 rounded-full cursor-pointer">
              <FaCamera className="text-white" />
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>
          </div>

          <div className="grid gap-3 px-2 w-full grid-cols-[30%_70%] items-center">
            <span className="font-bold text-md">Email:</span>
            <input
              type="email"
              name="email"
              value={userdata.email}
              disabled
              className="p-2 w-full border rounded-lg bg-gray-100"
            />

            <span className="font-bold text-md">Name:</span>
            <input
              type="text"
              name="name"
              value={userdata.name}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">Phone:</span>
            <input
              type="tel"
              name="number"
              value={userdata.number}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">Gender:</span>
            <select
              name="gender"
              value={userdata.gender}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            >
              <option value="N/A">N/A</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <span className="font-bold text-md">Occupation:</span>
            <input
              type="text"
              name="occupation"
              value={userdata.occupation}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">Address:</span>
            <input
              type="text"
              name="address"
              value={userdata.address}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">City:</span>
            <input
              type="text"
              name="city"
              value={userdata.city}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">District:</span>
            <input
              type="text"
              name="district"
              value={userdata.district}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            />

            <span className="font-bold text-md">State:</span>
            <select
              name="state"
              value={userdata.state}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            >
              <option value="N/A">N/A</option>
              {Object.keys(IndianStates).map((state, i) => (
                <option value={state} key={i}>
                  {state}
                </option>
              ))}
            </select>

            <span className="font-bold text-md">Representing:</span>
            <select
              name="representing"
              value={userdata.representing}
              onChange={handleChange}
              className="p-2 border rounded-lg border-rose-300 w-full"
            >
              <option value="N/A">N/A</option>
              <option value="Bride">Bride side</option>
              <option value="Groom">Groom side</option>
              <option value="both">Common</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 mx-auto border px-4 py-2 rounded-lg flex gap-2 items-center bg-rose-300 hover:bg-rose-400 text-lg"
          >
            <IoIosSave />
            {loading ? "Saving..." : "Save Data"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
