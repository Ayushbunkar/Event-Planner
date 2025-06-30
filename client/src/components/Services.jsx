// src/pages/ServicesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaBirthdayCake,
  FaCamera,
  FaMusic,
  FaGlassCheers,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const services = [
  {
    icon: <FaCrown className="text-pink-500 text-4xl mb-4" />,
    title: "Wedding Flowers",
    description: "Beautifully curated floral arrangements tailored to your wedding theme."
  },
  {
    icon: <FaBirthdayCake className="text-pink-500 text-4xl mb-4" />,
    title: "Wedding Cake",
    description: "Delicious custom-designed cakes that taste as good as they look."
  },
  {
    icon: <FaCrown className="text-pink-500 text-4xl mb-4" />,
    title: "Wedding Venues",
    description: "Stunning venues from beaches to ballrooms to match your dream wedding."
  },
  {
    icon: <FaCamera className="text-pink-500 text-4xl mb-4" />,
    title: "Photography",
    description: "Capture every precious moment with our professional photographers."
  },
  {
    icon: <FaMusic className="text-pink-500 text-4xl mb-4" />,
    title: "Live Music",
    description: "Live bands and DJs to make your celebration unforgettable."
  },
  {
    icon: <FaGlassCheers className="text-pink-500 text-4xl mb-4" />,
    title: "Catering & Drinks",
    description: "Delectable menus and premium beverages tailored for your guests."
  }
];

const pricingPlans = [
  {
    title: "Classic Love",
    price: "₹30,000",
    features: ["Venue Booking", "Photography", "Basic Floral Decor", "1 Day Coordination"]
  },
  {
    title: "Royal Affair",
    price: "₹75,000",
    features: [
      "Premium Venue + Decor",
      "Custom Cake & Catering",
      "Professional Photographer",
      "2 Days Coverage"
    ]
  },
  {
    title: "Dream Wedding",
    price: "₹1,50,000",
    features: [
      "All-inclusive Services",
      "Luxury Venue",
      "Live Music & DJ",
      "Full Planning & Execution"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-[100vh]  w-full bg-no-repeat bg-center flex bg-cover  items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682092637891-d9979cc93f6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwd2VkZGluZyUyMGRlY29yfGVufDB8fDB8fHww')"
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 pt-28 max-w-5xl mx-auto px-6 pb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold md:text-5xl text-white drop-shadow-lg mb-6"
        >
          Why Couples Love Us ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-10 text-gray-200"
        >
          Trusted by thousands of couples for seamless planning, elegant execution, and unforgettable memories.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {["🎯", "💍", "🤝"].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-md hover:shadow-lg scale-100 hover:scale-105 scroll-smooth transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-300">
                {[
                  "End-to-End Services",
                  "Perfectly Tailored",
                  "Community Trusted",
                ][i]}
              </h3>
              <p className="text-sm text-gray-200">
                {[
                  "From flowers to DJs, everything you need in one place—easy and worry-free.",
                  "Each detail is customized to reflect your love story beautifully.",
                  "Thousands of happy couples and 5-star vendor ratings speak for themselves.",
                ][i]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      </section>

      {/* Services Cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-pink-700 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            From luxurious setups to heartfelt coordination, we bring years of expertise to your
            special day — making every celebration personal, passionate, and perfect.
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-pink-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Pricing Plans</h2>
          <p className="text-gray-500">Choose a package that fits your dreams and budget.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-pink-600 mb-4">{plan.price}</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-pink-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative bg-black text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/newlywed-couple-face-face-close-up_23-2148723284.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-4">Head Office</h3>
            <p className="text-sm">
              9016 Goldfield Street, South Richmond Hill,<br />New York 11419
            </p>
            <p className="mt-2 text-sm">example@gmail.com</p>
            <p className="text-sm">+1 578-393-4937</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-pink-400 mb-2">Wedding Planet</h2>
            <p className="text-sm mb-4">Your dream wedding starts here.</p>
            <p className="text-xs mb-6">Every detail matters, every love story deserves magic.</p>
            <div className="flex justify-center gap-4 text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 text-center border-t border-white/20 py-4 px-4 text-xs flex flex-col md:flex-row items-center justify-between">
          <p>© Wedding Planet 2025</p>
          <div className="space-x-4">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
