import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-6">
    <div className="max-w-[1600px] mx-auto flex items-center justify-between px-14">

      
      <ul className="flex gap-12 text-white uppercase text-sm tracking-wide font-light">
        <li><Link to="/">⚙️HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/stories">STORIES</Link></li>
        <li><Link to="/morepages">MORE PAGES🔽</Link></li>
      </ul>

      <div className="flex flex-col items-center text-white">
       <span className="text-4xl text-pink-500">
  <i className="ri-empathize-line"></i>
</span>

        <span className="text-lg font-semibold">Wedding</span>
        <span className="text-xs tracking-tight">Template</span>
      </div>

      
      <ul className="flex gap-12 text-white uppercase text-sm tracking-wide font-light">
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/elements">ELEMENTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

    </div>
  </nav>
);

export default Navbar;
