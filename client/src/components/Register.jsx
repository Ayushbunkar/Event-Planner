import React, { useState } from "react";
import api from "../config/api";
import {toast} from "react-hot-toast"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

   
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        phone,
        password,
      });

      toast.success(res.data.message);
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full">
      <section
        className="min-h-screen w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("https://imgs.search.brave.com/stwlmFcv46Z-2qAVu0V366Vm1HzvsAR-nPPvdJHdsTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjI5/ODQ1LmpwZw")`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]  z-0"></div>

        <div className="z-10 mt-30 text-center px-4 absolute top-10">
          <h1 className="text-4xl md:text-5xl  font-bold mb-4 drop-shadow-lg">
            Create an Account
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-6 drop-shadow">
            Join our wedding planning family and begin your beautiful journey
            with us.
          </p>
        </div>

        <div className="z-10 mt-75 backdrop-blur-md bg-white/20 p-8 rounded-xl w-full max-w-lg text-white shadow-xl border border-white/30">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="+91-9876543210"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="Minimum 6 characters"
              />
            </div>

            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="Re-enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-semibold"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
