import React, { useState } from "react";
import api from "../config/api";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email) {
      toast.error("Please enter both email and full name.");
      return;
    }

    try {
      const res = await api.post("/contactus/submit", formData);
      toast.success(res.data.message || "Message sent successfully");
      setFormData({ fullname: "", email: "", feedback: "" });
    } catch (error) {
      toast.error(
        `Error ${error.response?.status || ""}: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-60 z-10"></div>

      <div className="z-20 relative text-center px-4 flex flex-col justify-center items-center h-full text-white">
        <div className="flex mt-20 w-125 justify-center items-center min-h-screen p-6">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white"
          >
            <h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-pink-400">
              Contact Us 💌
            </h2>

            <div className="mb-5">
              <label htmlFor="fullname" className="block text-sm mb-2 tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm mb-2 tracking-wider">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="feedback" className="block text-sm mb-2 tracking-wider">
                Your Feedback
              </label>
              <textarea
                name="feedback"
                id="feedback"
                rows="5"
                value={formData.feedback}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
                placeholder="Type your feedback here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 transition-all duration-200 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
