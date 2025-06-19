import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://iamosahan.com/wrapbootstrap-pillarix/wadeng/img/bg-homepage.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      
      <div className="z-20 relative text-center px-4 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">Turning Dreams <br /> into Reality
        </h1>
        <p className="text-lg max-w-xll mb-8 drop-shadow-md">
          Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu luctus <br />
           dolor ex at quam. Fusce ac condimentum turpis. Ut consequat lacinia augue.
        </p>
        <div className="flex gap-6">
          <button className="bg-pink-500 px-8 py-3 text-sm rounded-full text-white hover:bg-pink-600 transition">
            Book Now
          </button>
          <button className="border border-pink-500 px-8 py-3 text-sm rounded-full hover:bg-pink-500 text-pink-500 hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
