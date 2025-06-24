import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="absolute  top-0 left-0 w-full z-50   py-6">
    <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-evenly px-6 md:px-14">

      <ul className="flex gap-6 md:gap-20 text-white uppercase text-sm tracking-wide font-bold mb-4 md:mb-0">
        <li><Link to="/" className="hover:text-pink-400">HOME</Link></li>
        <li><Link to="/about" className="hover:text-pink-400">ABOUT</Link></li>
        <li><Link to="/stories" className="hover:text-pink-400">STORIES</Link></li>
   
      </ul>

   
      <div className="flex flex-col items-center text-white mb-4 md:mb-0">
        <span className="text-4xl text-pink-500">
          <i className="ri-empathize-line"></i>
        </span>
        <span className="text-2xl font-bold">Wedding Planet</span>
        <span className="text-xs font-bold tracking-wide">AK</span>
      </div>

  
      <ul className="flex gap-6 md:gap-20 text-white uppercase text-sm tracking-wide font-bold">
        <li><Link to="/services" className="hover:text-pink-400">SERVICES</Link></li>
        <li><Link to="/gallery" className="hover:text-pink-400">GALLERY</Link></li>
       
        <li><Link to="/contact" className="hover:text-pink-400">CONTACT</Link></li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
