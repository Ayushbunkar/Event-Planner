import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Booknow from "./components/Booknow";
import Register from "./components/Register";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <main className="w-full min-h-screen">
    
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/register" element={<Register />} /> 
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
