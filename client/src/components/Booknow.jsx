import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../config/api";
import { toast } from "react-hot-toast";

const Booknow = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const res = await api.post("/auth/login", { email, password });

      toast.success(res.data.message || "Login successful!");

      
      navigate("/dashboard");

      setFormData({ email: "", password: "" });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="w-full">
      <section
        className="h-[100vh] w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("https://media.weddingz.in/images/01701d9764082531a8c9212d22697bf6/Mandap-decoration-ideas20.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Your Magical Day Starts Here
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-6 drop-shadow">
            Celebrate love, laughter, and memories with a wedding you'll never forget.
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/20 p-10 rounded-xl mt-30 w-full max-w-md text-white shadow-lg border border-white/30 z-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login to Continue
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-2 drop-shadow-md rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="you@google.com"
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-semibold"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-pink-300 font-semibold hover:underline"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booknow;
