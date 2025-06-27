import React from "react";
import Hero from "./hero";
import Journey from "./Journey";
import Photogallery from "./Photogallery";
import WhyWeddingPlanet from "./Whyweddingplanet";
import Vendor from "./vendor";
import PricingPlans from "./PricingPlans";


const Home = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Vendor/>
      <Photogallery />
      <WhyWeddingPlanet /> 
      <PricingPlans />
      
    </>
  );
};

export default Home;
