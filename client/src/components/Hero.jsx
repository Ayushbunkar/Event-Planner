import React from "react";

const Hero = () => {
  return (
    <section
      className="h-200 w-full  bg-center relative  "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/8c/70/d2/8c70d27488b7b97c1bf7363da6a9a717.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10 "></div>
      <div className="z-20 relative text-center px-4 flex flex-col justify-center items-center h-full text-white ">
        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-md  mt-10 pt-10">
          A Day to Remember <br /> A Love to Cherish
        </h1>
        <p className="text-lg max-w-xll mb-8  font-semibold drop-shadow-md ">
          "From the moment you say 'yes' to the day you say 'I do', we’re here
          to make every <br /> detail magical, every moment memorable, and every
          feeling cherished — because your love story deserves nothing less."
        </p>
        <div className="flex gap-6">
          <button className="bg-pink-500 px-8 py-3 text-sm rounded-full font-bold text-white hover:bg-pink-600 transition">
            Book Now
          </button>
          <button className="border-white hover:border-pink-500 border-2 px-8 py-3 text-sm font-bold rounded-full hover:bg-pink-500 text-white hover:text-white transition">
            Read More
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
