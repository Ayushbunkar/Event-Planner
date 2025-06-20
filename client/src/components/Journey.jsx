import React from "react";

const Journey = () => {
  return (
    <>
      <div className="">
       

      <div className=" w-screen ">
        <div>
   <div className="max-w-4xl  mx-auto text-center px-4 mt-15 ">
          <div className="text-pink-500 text-5xl mb-4">
            <i className="ri-empathize-line"></i>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Journey Begins Here
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-700 text-lg font-semibold mt-10 text-center">
            Step into a world of love, elegance, and unforgettable memories{" "}
            <br />— where every moment marks the start of forever.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          
          <div className="lg:w-3/5 w-full">
            <img
              src="https://i.pinimg.com/736x/33/22/87/33228736254762bd6a1c4f74ad3d0605.jpg"
              alt="Holding Hands"
              className="w-full h-[800px] object-cover rounded-lg shadow-md"
            />
          </div>

         
          <div className="lg:w-2/4 w-full flex flex-col gap-6">
            <img
              src="https://i.pinimg.com/736x/09/71/0e/09710ec3acdb317c3825da8633329d06.jpg"
              alt="Dining Table"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <img
              src="https://i.pinimg.com/736x/ac/f7/ea/acf7eab196a5a3405e002c2a9ff46c83.jpg"
              alt="Flowers"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-3xl md:text-5xl mr-10 pr-10 font-bold text-gray-800 ">
          What Our <br /> Clients Are <br />
          Saying{" "}
        </div>
      </div>
      </div>
        </div>
     
    </>
  );
};

export default Journey;
