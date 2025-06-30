import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const AboutHero = () => {
  return (
    <section
      className="w-full min-h-screen bg-center bg-cover relative text-white"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/jg0IqkgWmVWKvTJd65SPKEt3rLVT1rCtRY0apNQbsBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzkxLzE0LzA4/LzM2MF9GXzk5MTE0/MDg3N193a0VXSlEx/akx4NlBydTVFUUhi/SE9kRVpXSHhNTDI2/dy5qcGc')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 pt-55 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold md:text-5xl text-white drop-shadow-lg mb-6"
        >
          About Us ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-10 text-gray-200"
        >
          We are a passionate team dedicated to making your special day truly magical.
          With curated vendors, personalized experiences, and heartfelt service,
          we help couples celebrate love in the most memorable way.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {["📋", "💡", "💬"].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-300">
                {[
                  "Verified Vendors",
                  "Personalized Planning",
                  "24/7 Support",
                ][i]}
              </h3>
              <p className="text-sm text-gray-200">
                {[
                  "Only the best and most trusted wedding professionals are listed on our platform.",
                  "We help you plan your dream wedding with personalized suggestions and ideas.",
                  "Our support team is here to help at every step of your wedding journey.",
                ][i]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const team = [
  {
    name: "Alex Bennett",
    role: "Lead Planner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Morgan Davis",
    role: "Creative Director",
    image: "https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvu-u4DzvgAExdTm2cXRVc-4pqXcKafhDrZkictyVUU=",
  },
  {
    name: "Jordan Taylor",
    role: "Client Manager",
    image: "https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.jpg?s=612x612&w=0&k=20&c=l-wRsIXn0OdP4m-_Xkf2Q_C2wHPlAMTKOVwzORxXnvs=",
  },
];

const TeamSection = () => (
  <section className="bg-white py-20 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <div className="mb-12">
        <div className="text-pink-600 text-4xl mb-2">👨‍👩‍👧‍👦</div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet our Team</h2>
        <p className="text-gray-500">Purus velit at volutpat sapien ullamcorper rhoncus.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center transition duration-300"
          >
            <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg" />
            <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor consectetur sadipscing diam nonumy tempor.</p>
            <div className="flex space-x-4 text-pink-600 text-xl">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClientTestimonials = () => (
  <section className="bg-pink-500 py-20 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          What Our <br /> Clients Are Saying
        </h2>
        <p className="text-pink-100 text-lg mb-6">
          Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien ullamcorper at.
        </p>
        <a href="#" className="inline-block text-white font-semibold hover:underline">
          LEARN MORE →
        </a>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="relative bg-white shadow-xl rounded-lg p-8">
        <p className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          "Choose a life partner not because you can merely live with them,
          but because you cannot imagine living without them."
        </p>
        <div className="text-right">
          <span className="text-white font-bold text-lg bg-black px-4 py-1 rounded">
            Yashh
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stories = () => {
  const stories = [
    {
      title: "Love Chronicles",
      description: "Every heartbeat tells a story – relive the magic of love.",
      image: "https://i.pinimg.com/736x/fb/bf/fd/fbbffde653371b03dadcd1c165f5e3a3.jpg",
    },
    {
      title: "Epic Celebrations",
      description: "Turning moments into milestones, and parties into legends.",
      image: "https://i.pinimg.com/736x/79/4b/93/794b93bde63bfd674fe27c368371e6ca.jpg",
    },
    {
      title: "Behind the Scenes",
      description: "Where real magic happens beyond the spotlight",
      image: "https://i.pinimg.com/736x/0b/4a/ea/0b4aea85e215e8663af7d6d3331c02f9.jpg",
    },
  ];

  return (
    <section className="py-20 px-4  bg-white">
      <div className="max-w-7xl mx-auto  text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Stories</h2>
        <p className="text-gray-500">Real moments, real emotions – captured forever.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((s, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={s.image} alt={s.title} className="w-full h-80 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>
              <a href="#" className="text-pink-600 font-semibold hover:underline">Read More →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
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
        "url('https://images.unsplash.com/photo-1740559557772-a57f8faf4773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
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

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <ClientTestimonials />
      <Stories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutPage;
