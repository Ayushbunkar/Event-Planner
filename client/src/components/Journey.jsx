// import React from "react";

// const Journey = () => {
//   return (
//     <>
//       <div className="">
       

//       <div className=" w-screen ">
//         <div>
//    <div className="max-w-4xl  mx-auto text-center px-4 mt-15 ">
//           <div className="text-pink-500 text-5xl mb-4">
//             <i className="ri-empathize-line"></i>
//           </div>

//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Your Journey Begins Here
//           </h2>
//         </div>

//         <div className="max-w-3xl mx-auto mb-10">
//           <p className="text-gray-700 text-lg font-semibold mt-10 text-center">
//             Step into a world of love, elegance, and unforgettable memories{" "}
//             <br />— where every moment marks the start of forever.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          
//           <div className="lg:w-3/5 w-full">
//             <img
//               src="https://i.pinimg.com/736x/33/22/87/33228736254762bd6a1c4f74ad3d0605.jpg"
//               alt="Holding Hands"
//               className="w-full h-[800px] object-cover rounded-lg shadow-md"
//             />
//           </div>

         
//           <div className="lg:w-2/4 w-full flex flex-col gap-6">
//             <img
//               src="https://i.pinimg.com/736x/09/71/0e/09710ec3acdb317c3825da8633329d06.jpg"
//               alt="Dining Table"
//               className="w-full h-[390px] object-cover rounded-lg shadow-md"
//             />
//             <img
//               src="https://i.pinimg.com/736x/ac/f7/ea/acf7eab196a5a3405e002c2a9ff46c83.jpg"
//               alt="Flowers"
//               className="w-full h-[390px] object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>

//       <div className="max-w-7xl mx-auto px-6  shadow-black shadow-2xl grid md:grid-cols-2 mt-50 gap-12 items-center">
        
//         <div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
//             <span className="inline-block">What Our</span> <br />
//             <span className="inline-block">Clients Are</span> <br />
//             <span className="inline-block">Saying</span>
//           </h2>
//           <p className="text-gray-600 text-base leading-relaxed mb-6">
//            Our clients consistently express how unforgettable their experiences have been. From planning to celebration, we ensure every detail is perfect, creating moments of pure joy and lasting memories
//           </p>
//           <a href="#" className="text-pink-500 font-semibold flex items-center gap-2 hover:underline">
//             Read More <span className="text-xl">→</span>
//           </a>
//         </div>

      
//         <div className="relative rounded overflow-hidden shadow-lg">
//           <img
//             src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/846/183/new_medium/namanverma3.jpg?1748507075"
//             alt="Couple Testimonial"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-opacity-20 mt-45 flex-col justify-center items-start p-6">
//             <p className="text-white text-lg font-bold   text-shadow-black h-100 p-10 text-center mt-30  bg-opaciity-40  shadow-2xl leading-relaxed">
//               Choose a life partner not<br />
//               because you can merely live with them, but<br />
//               because you cannot imagine<br />
//               living without them
//             </p>
//             <p className="text-pink-600 font-bold text-right w-full mt-4 italic">Juliet</p>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//         </div>
     
//     </>
//   );
// };

// export default Journey;

import React from "react";

const Journey = () => {
  return (
    <div className="w-screen">
      <div>
        {/* Title & Icon */}
        <div className="max-w-4xl mx-auto text-center px-4 mt-12">
          <div className="text-pink-500 text-5xl mb-4">
            <i className="ri-empathize-line"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Journey Begins Here
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-700 text-lg font-semibold mt-10 text-center">
            Step into a world of love, elegance, and unforgettable memories <br />— where every moment marks the start of forever.
          </p>
        </div>

        {/* Image Section */}
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

        {/* Testimonials Section */}
        <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="inline-block">What Our</span> <br />
              <span className="inline-block">Clients Are</span> <br />
              <span className="inline-block">Saying</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Our clients consistently express how unforgettable their experiences have been. From planning to celebration, we ensure every detail is perfect, creating moments of pure joy and lasting memories.
            </p>
            <a href="#" className="text-pink-500 font-semibold flex items-center gap-2 hover:underline">
              Read More <span className="text-xl">→</span>
            </a>
          </div>

          {/* Right Image with Quote */}
          <div className="relative rounded overflow-hidden shadow-lg">
            <img
              src="https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/008/846/183/new_medium/namanverma3.jpg?1748507075"
              alt="Couple Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
              <p className="text-lg font-semibold leading-relaxed max-w-md">
                Choose a life partner not <br />
                because you can merely live with them, but <br />
                because you cannot imagine <br />
                living without them
              </p>
              <p className="text-pink-400 font-bold mt-4 italic">Juliet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

