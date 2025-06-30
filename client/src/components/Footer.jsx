import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-black text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1740559557772-a57f8faf4773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Head Office</h3>
          <p className="text-sm">9016 Goldfield Street, South Richmond Hill,<br />New York 11419</p>
          <p className="mt-2 text-sm">example@gmail.com</p>
          <p className="text-sm">+1 578-393-4937</p>
        </div>

        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-2">Wedding Planet</h2>
          <p className="text-sm mb-4">Purus velit at volutpat sapien ullamcorper rhoncus.</p>
          <p className="text-xs mb-6">
            Egestas purus viverra accumsan in. Nisi in metus dictum at tempor commodo.
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <a href="#" className="hover:text-pink-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/services" className="hover:text-pink-400 transition">Services</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="/stories" className="hover:text-pink-400 transition">Stories</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition">Contact Us</a></li>
          </ul>
        </div>
      </div>

      
      <div className="relative z-10 text-center border-t border-white/20 py-4 px-4 text-xs flex flex-col md:flex-row items-center justify-between">
        <p>© Website Name 2025</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-pink-400">Terms & Conditions</a>
          <a href="#" className="hover:text-pink-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
