import React from "react";
import Hero from "./hero";
import Journey from "./Journey";
import Photogallery from "./Photogallery";
import WhyWeddingPlanet from "./Whyweddingplanet";
import Vendor from "./vendor";


const Home = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Vendor/>
      <Photogallery />
      <WhyWeddingPlanet /> 
      
    </>
  );
};

export default Home;
