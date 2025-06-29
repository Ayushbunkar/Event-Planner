import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const stories = [
  {
    title: "Epic Celebrations",
    image: "https://i.pinimg.com/736x/98/46/b9/9846b9514af7ceb6274d31e25fb6b12e.jpg",
    tagline: "Where every moment becomes a memory.",
    description: "Experience the grandeur of unforgettable weddings with floral splendor, beaming smiles, and heartfelt vows."
  },
  {
    title: "Team Tales",
    image: "https://i.pinimg.com/736x/b3/bd/7f/b3bd7f3f482aeaca572d4d6a03a8ed0f.jpg",
    tagline: "Meet the heartbeat behind the magic.",
    description: "Go behind the veil with the planners, artists, and coordinators who turn dreams into breathtaking reality."
  },
  {
    title: "Behind the Scenes",
    image: "https://i.pinimg.com/736x/0b/4a/ea/0b4aea85e215e8663af7d6d3331c02f9.jpg",
    tagline: "Moments you never see, but always feel.",
    description: "Step into candid laughter, last-minute touch-ups, and the quiet moments of love and chaos just before 'I do'."
  },
  {
    title: "Royal Escapes",
    image: "https://i.pinimg.com/736x/79/4b/93/794b93bde63bfd674fe27c368371e6ca.jpg",
    tagline: "Destination weddings done with class.",
    description: "From castles to coastlines, witness intimate unions in breathtaking venues across the globe."
  },
  {
    title: "Candid Charms",
    image: "https://i.pinimg.com/736x/f0/d8/6a/f0d86a0c37e78f1ce983b06a3988fa1e.jpg",
    tagline: "Every glance, a story. Every smile, a spark.",
    description: "Our candid photography brings out unposed, unscripted joy in its purest form."
  },
  {
    title: "Forever Starts Here",
    image: "https://i.pinimg.com/736x/ee/a2/88/eea2889c61e799ae1c3dbc4f6f64c5d4.jpg",
    tagline: "Because every love deserves a beautiful beginning.",
    description: "Capture that magical walk down the aisle, shared promises, and the first steps of forever."
  }
];

const Stories = () => {
  const storiesRef = useRef(null);

  const scrollToStories = () => {
    storiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
  
      <section
        className="min-h-screen w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/YtJ_MI-o4H_b3dJ1HuEQMajmhd21qmhcPngI28PUOBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzE2LzcyLzgy/LzM2MF9GXzcxNjcy/ODI3M185SElKZEVT/Zm5rMFhXT2lMdzhz/NVZxMW5NUURDd2tZ/dS5qcGc')`,
        }}
      >
        <div className="absolute inset-0 bg-black/35 z-0"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Wedding Stories 💍</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 drop-shadow">
            Discover heartfelt journeys, magical moments, and memories etched in time by our beautiful couples.
          </p>
          <button
            onClick={scrollToStories}
            className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-semibold shadow-md transition"
          >
            View All Stories
          </button>
        </div>
      </section>

   
      <section ref={storiesRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Couple Stories 💕</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Karan & Aarti</h3>
              <p className="text-gray-600 text-sm">
                “You turned what we thought would be stressful into something beautiful and unforgettable. We’re beyond thankful”
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Aarav & Meera</h3>
              <p className="text-gray-600 text-sm">
                “We found our photographer, decorator, and caterer through this platform and they were all outstanding.
                It truly felt like a family celebration thanks to your amazing support.”
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Kabir & Ananya</h3>
              <p className="text-gray-600 text-sm">
                “Every moment was picture-perfect! Our guests were mesmerized and we felt like royalty. The process was
                smooth, easy, and filled with joy. Highly recommend!”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-800 mb-2"
          >
            Our Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Real moments. Real emotions. Real love captured forever.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  {story.title}
                </h3>
                <p className="text-pink-600 italic text-sm mb-3">{story.tagline}</p>
                <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                <a href="#" className="text-pink-600 font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
    </div>
  );
};

export default Stories;
