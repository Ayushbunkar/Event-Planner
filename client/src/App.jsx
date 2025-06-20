import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import Morepages from "./components/Morepages";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Elements from "./components/Elements";
import Contact from "./components/Contact";
import About from "./components/About";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <main className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/morepages" element={<Morepages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
