import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center relative  "
      style={{
        backgroundImage:
          "url('https://iamosahan.com/wrapbootstrap-pillarix/wadeng/img/bg-homepage.jpg')",
      }}
    >
     

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10 " ></div>
      <div className="z-20 relative text-center px-4 flex flex-col justify-center items-center h-full text-white ">
        <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-md  mt-25 pt-25">Turning Dreams <br /> into Reality
        </h1> 
        <p className="text-lg max-w-xll mb-8 drop-shadow-md ">
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
          <i class=" ri-mouse-line ri-3x aos-init aos-animate  mt-10  "></i></div>



          <div className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[1300px] h-[100px] z-10 flex justify-center items-center">
  <p className="text-black"></p>
</div>

        <div className="max-w-4xl mx-auto text-center px-4 mt-15 ">
        
        <div className="text-pink-500 text-5xl mb-4">
          <i className="ri-empathize-line"></i>
        </div>

     
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Your Journey Begins Here
        </h2>
      </div>
        
        <div className="max-w-3xl mx-auto mb-10">
        <p className="text-gray-700 text-lg mt-10 text-center">
          Fusce ac condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien <br />ullamcorper at. 
          Donec efficitur, ligula ut lacinia viverra, lorem lacus condimentum leo, eu <br /> textluctus dolor ex at quam.
        </p>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left Big Image */}
        <div className="lg:w-3/5 w-full">
          <img
            src="https://iamosahan.com/wrapbootstrap-pillarix/wadeng/img/wedding/img-1.jpg"
            alt="Holding Hands"
            className="w-full h-[800px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side Two Small Stacked Images */}
        <div className="lg:w-2/4 w-full flex flex-col gap-6">
          <img
            src="https://iamosahan.com/wrapbootstrap-pillarix/wadeng/img/wedding/img-2.jpg"
            alt="Dining Table"
            className="w-full h-[390px] object-cover rounded-lg shadow-md"
          />
          <img
            src="https://iamosahan.com/wrapbootstrap-pillarix/wadeng/img/wedding/img-3.jpg"
            alt="Flowers"
            className="w-full h-[390px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>



    </section>

    
  );
};

export default Hero;

