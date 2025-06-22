import React, { useState } from "react";

const Booknow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full">
      <section
        className="h-[100vh] w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("https://media.weddingz.in/images/01701d9764082531a8c9212d22697bf6/Mandap-decoration-ideas20.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.0)] z-10 "></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Your Magical Day Starts Here
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-6 drop-shadow">
            Celebrate love, laughter, and memories with a wedding you'll never
            forget. Book now and make your dreams come true.
          </p>
        </div>

        {/* Form */}
        <div className="backdrop-blur-md bg-white/20 p-10 rounded-xl mt-30 w-full max-w-md text-white shadow-lg border border-white/30">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login to Continue
          </h2>
          <form className="space-y-4 " onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="Your Name"
              />
            </div>
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
              <label className="block mb-1">Phone Number</label>
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="+91-1234567890"
              />
            </div>
            <div>
              <label className="block mb-1">Address</label>
              <input
                name="address"
                type="text"
                onChange={handleChange}
                value={formData.address}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="123 Street Name, City"
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
        </div>
      </section>
    </div>
  );
};

export default Booknow;
