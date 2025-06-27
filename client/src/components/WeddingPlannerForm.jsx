import React, { useState } from "react";
import { motion } from "framer-motion";

const WeddingPlannerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full mt-30 bg-white py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">
          Start Planning Your Dream <br /> Wedding Today
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-xl shadow-xl"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          >
            <option value="">Select Budget</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="md:col-span-3 border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />

          <div className="md:col-span-3 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-pink-600 hover:scale-105 transition duration-300 ease-in-out shadow-lg"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default WeddingPlannerForm;
