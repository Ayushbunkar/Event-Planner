import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";

const indianStatesWithCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Haryana": ["Faridabad", "Gurugram", "Panipat", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Mandi"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
  "Karnataka": ["Bengaluru", "Mysore", "Mangalore", "Hubli"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
  "Meghalaya": ["Shillong", "Tura", "Nongpoh"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
  "Tripura": ["Agartala", "Dharmanagar", "Udaipur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Haldwani"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag"],
  "Ladakh": ["Leh", "Kargil"],
  "Puducherry": ["Puducherry", "Karaikal", "Yanam"],
  "Chandigarh": ["Chandigarh"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"]
};

const ProfileEditModal = ({ isOpen, onClose, oldData, onSave }) => {
  const [userdata, setUserData] = useState(oldData || {});
  const [selectedState, setSelectedState] = useState(oldData?.state || "");
  const [cities, setCities] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    if (selectedState) {
      setCities(indianStatesWithCities[selectedState] || []);
    }
  }, [selectedState]);

  const handleSaveClick = async () => {
    const formData = new FormData();
    Object.entries(userdata).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    if (photoFile) formData.append("photoFile", photoFile);

    try {
      const res = await axios.put(
        "http://localhost:4500/user/profile", // ✅ Your API endpoint
        formData,
        {
          withCredentials: true, // ✅ Needed if using cookies/JWT
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      onSave(res.data.data); // ✅ Pass updated user back
      onClose(); // ✅ Close modal
    } catch (err) {
      console.error("Save failed", err);
      alert("Save failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inset-0 fixed bg-black/60 flex justify-center items-center z-[101] overflow-y-auto p-4 font-serif"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-2xl bg-[#fff7ef] border-[3px] border-[#b30059] rounded-2xl shadow-xl"
          >
            <div className="flex justify-between items-center p-4 bg-[#f5cbaa] border-b-2 border-[#b30059] rounded-t-2xl">
              <h1 className="font-bold text-xl text-[#7a1d1d]">Edit Profile</h1>
              <button onClick={onClose}>
                <IoIosCloseCircle className="text-3xl text-[#7a1d1d] hover:text-[#b30059]" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 gap-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Common fields */}
              {[
                { label: "Name", key: "name" },
                { label: "Gender", key: "gender", type: "select", options: ["Male", "Female", "Other"] },
                { label: "Occupation", key: "occupation" },
                { label: "Address", key: "address" },
                { label: "Representing", key: "representing" },
                { label: "District", key: "district" }
              ].map(({ label, key, type = "input", options = [] }) => (
                <div key={key}>
                  <label className="block mb-1 text-[#7a1d1d] font-semibold">{label}</label>
                  {type === "select" ? (
                    <select
                      value={userdata[key] || ""}
                      onChange={(e) => setUserData({ ...userdata, [key]: e.target.value })}
                      className="w-full border border-[#e5b17a] p-2 rounded-lg"
                    >
                      <option value="">-- Select --</option>
                      {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={userdata[key] || ""}
                      onChange={(e) => setUserData({ ...userdata, [key]: e.target.value })}
                      className="w-full border border-[#e5b17a] p-2 rounded-lg"
                    />
                  )}
                </div>
              ))}

              {/* State dropdown */}
              <div>
                <label className="block mb-1 text-[#7a1d1d] font-semibold">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setUserData({ ...userdata, state: e.target.value, city: "" });
                  }}
                  className="w-full border border-[#e5b17a] p-2 rounded-lg"
                >
                  <option value="">-- Select State --</option>
                  {Object.keys(indianStatesWithCities).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* City dropdown */}
              <div>
                <label className="block mb-1 text-[#7a1d1d] font-semibold">City</label>
                <select
                  value={userdata.city || ""}
                  onChange={(e) => setUserData({ ...userdata, city: e.target.value })}
                  className="w-full border border-[#e5b17a] p-2 rounded-lg"
                >
                  <option value="">-- Select City --</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Upload photo */}
              <div>
                <label className="block mb-1 text-[#7a1d1d] font-semibold">Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                  className="w-full border border-[#e5b17a] p-2 rounded-lg"
                />
              </div>
            </div>

            <div className="p-4 border-t border-[#b30059] flex justify-end bg-[#fff0f3] rounded-b-2xl">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveClick}
                className="px-6 py-2 bg-[#b30059] text-white font-bold rounded-full hover:bg-[#7a1d1d] transition-all"
              >
                Save & Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileEditModal;
