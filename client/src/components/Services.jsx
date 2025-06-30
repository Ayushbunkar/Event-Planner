import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaBirthdayCake, FaCamera, FaMusic, FaGlassCheers } from "react-icons/fa";

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

const ServicesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center text-white relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/beautiful-bride-with-veil-earrings_23-2148723284.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold drop-shadow-lg"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg mt-4 drop-shadow max-w-xl mx-auto"
          >
            Discover everything we offer to make your wedding day perfect.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What We Offer
          </h2>
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
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
