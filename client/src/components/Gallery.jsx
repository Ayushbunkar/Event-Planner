import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";


const FeaturedGallery = () => {
  const images = [
    "https://i.pinimg.com/736x/98/46/b9/9846b9514af7ceb6274d31e25fb6b12e.jpg",
    "https://i.pinimg.com/736x/f0/d8/6a/f0d86a0c37e78f1ce983b06a3988fa1e.jpg",
    "https://i.pinimg.com/736x/0b/4a/ea/0b4aea85e215e8663af7d6d3331c02f9.jpg",
    "https://i.pinimg.com/736x/79/4b/93/794b93bde63bfd674fe27c368371e6ca.jpg",
    "https://i.pinimg.com/736x/ee/a2/88/eea2889c61e799ae1c3dbc4f6f64c5d4.jpg",
    "https://i.pinimg.com/736x/fb/bf/fd/fbbffde653371b03dadcd1c165f5e3a3.jpg",
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/73/18/dc/7318dcd22e3b7bcec55d3ec2ace45172.jpg')",
        }}
      >
         <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-60 z-10"></div>
        <div className="absolute inset-0  bg-opacity-40 z-0"></div>
        <div className="z-10 text-white text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold">Our Gallery</h1>
        </div>
      </motion.div>

     
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Captured Moments of Love
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cherish the memories of our lovely couples through these handpicked moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <img src={img} alt={`Wedding ${idx}`} className="w-full h-80 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MonthlyGallerySection = () => {
  const galleryData = {
    "June 2024": [
      "https://i.pinimg.com/736x/22/1b/58/221b58f21e0ef3fb4b3b7dfed355439a.jpg",
      "https://i.pinimg.com/736x/b1/2a/ac/b12aac77c928caaedb81773a12c50eb6.jpg",
      "https://i.pinimg.com/736x/7d/3c/14/7d3c1405720544c8508c8814236326e5.jpg",
      "https://i.pinimg.com/736x/8c/84/a5/8c84a5667ed02290830462b7378a4836.jpg",
      "https://i.pinimg.com/736x/f5/45/d3/f545d382e11c7fb0049ae0c751c7fe37.jpg",
      "https://i.pinimg.com/736x/7d/f4/2c/7df42cc8fc0b42728397a499a7254350.jpg",
    ],
    "May 2024": [
      "https://i.pinimg.com/736x/58/de/95/58de95e65c76dda4d26346d83851e6f7.jpg",
      "https://i.pinimg.com/736x/94/df/a9/94dfa982ea94462b53919e17dca22da5.jpg",
      "https://i.pinimg.com/736x/41/48/9c/41489cb57d80f7d56be88f9381f098f0.jpg",
      "https://i.pinimg.com/736x/5f/32/58/5f3258070fe3c4819def2fb3e790d4ec.jpg",
      "https://i.pinimg.com/736x/2c/6a/0a/2c6a0a15209aff02378d84224293f97a.jpg",
      "https://i.pinimg.com/736x/11/16/51/111651c70f1eaf05975b6c1772bb2caa.jpg",
    ],
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Object.entries(galleryData).map(([month, images]) => (
          <motion.div
            key={month}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{month}</h2>
            <p className="text-gray-500 mb-6">
              Memorable celebrations captured this month.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${month} ${index}`}
                  className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter an email address.");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Newsletter Updates</h2>
      <p className="text-gray-500 mb-8">Enter your email to subscribe to our tasty newsletter.</p>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
          Subscribe
        </button>
      </form>
    </div>
  );
};


const Footer = () => (
  <footer
    className="relative bg-black text-white bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/newlywed-couple-face-face-close-up_23-2148723284.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Head Office</h3>
        <p className="text-sm">9016 Goldfield Street, South Richmond Hill,<br />New York 11419</p>
        <p className="mt-2 text-sm">example@gmail.com</p>
        <p className="text-sm">+1 578-393-4937</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-pink-400 mb-2">Wedding Planet</h2>
        <p className="text-sm mb-4">Purus velit at volutpat sapien ullamcorper rhoncus.</p>
        <p className="text-xs mb-6">Egestas purus viverra accumsan in. Nisi in metus dictum at tempor commodo.</p>
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
      <p>© Website Name 2025</p>
      <div className="space-x-4">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);


const Gallery = () => {
  return (
    <>
      <FeaturedGallery />
      <MonthlyGallerySection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Gallery;
