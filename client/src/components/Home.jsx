import React from "react";
import Hero from "./hero";
import Journey from "./Journey";
import Photogallery from "./Photogallery";
import WhyWeddingPlanet from "./Whyweddingplanet";
import Vendor from "./vendor";
import PricingPlans from "./PricingPlans";
import WeddingPlannerForm from "./WeddingPlannerForm"; 
import Footer from "./Footer";



const Home = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Vendor/>
      <Photogallery />
      <WhyWeddingPlanet /> 
      <PricingPlans />
      <WeddingPlannerForm />
      <Footer />
    
      
    </>
  );
};

export default Home;
