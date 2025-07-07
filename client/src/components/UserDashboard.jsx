import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import coverImg from '../assets/cover.jpg';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-pink-50 font-serif text-gray-800">
      {/* Cover Photo (no blur) */}
      <div className="relative h-72 w-full">
        <img
          src={coverImg}
          alt="Wedding Cover"
          className="h-full w-full object-cover"
        />
        <button className="absolute right-4 bottom-4 bg-white px-4 py-2 text-sm rounded-md shadow-lg border border-pink-200 hover:bg-pink-100 transition">
          ✏️ Edit Cover
        </button>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col -mt-24 items-center px-4"
      >
        <div className="bg-white shadow-xl rounded-3xl p-8 w-full mt-40 max-w-4xl border border-pink-200 relative z-10">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <img
                src={profileImg}
                alt="User"
                className="w-40 h-40 rounded-full border-4 border-pink-300 shadow-md transition hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 bg-pink-400 text-white text-xs px-2 py-1 rounded-full shadow">
                Verified
              </span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-pink-700">Rani kamlapati</h2>
              <p className="text-gray-500 text-sm">Rani kamlapati@google.com</p>
              <p className="mt-2 text-pink-500 italic">"Looking for a loving and understanding partner"</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-12 px-4 flex justify-center pb-20"
      >
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-4xl border border-pink-200">
          <h3 className="text-2xl font-semibold text-pink-600 mb-6">Wedding Profile Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" placeholder="Rani kamlapati" />
            <Input label="Age" placeholder="25" />
            <Input label="Height" placeholder="5'5''" />
            <Input label="Religion" placeholder="Hindu" />
            <Input label="Caste" placeholder="Brahmin" />
            <Input label="Marital Status" placeholder="Single" />
            <Input label="Location" placeholder="Jaipur, Rajasthan" />
            <Input label="Occupation" placeholder="Interior Designer" />
            <Input label="Education" placeholder="Masters in Design" />
            <Input label="Hobbies" placeholder="Cooking, Travel, Art" />
            <Input label="Partner Preference" placeholder="Caring, creative, respectful" />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-pink-600 mb-1">
              Bio
            </label>
            <textarea
              rows={4}
              placeholder="Describe yourself in a few lines..."
              className="w-full p-3 border border-pink-200 rounded-md bg-pink-50 text-gray-800 placeholder-pink-400 focus:outline-none focus:ring focus:ring-pink-300"
            ></textarea>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Input
const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-pink-600 mb-1">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-3 border border-pink-200 rounded-md bg-pink-50 text-gray-700 placeholder-pink-400 focus:outline-none focus:ring focus:ring-pink-300"
    />
  </div>
);

export default UserDashboard;
