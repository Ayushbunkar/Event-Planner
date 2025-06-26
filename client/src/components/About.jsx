
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="w-full min-h-screen bg-center bg-cover relative text-white"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/jg0IqkgWmVWKvTJd65SPKEt3rLVT1rCtRY0apNQbsBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzkxLzE0LzA4/LzM2MF9GXzk5MTE0/MDg3N193a0VXSlEx/akx4NlBydTVFUUhi/SE9kRVpXSHhNTDI2/dy5qcGc')",
      }}
    >
      <div className="absolute   inset-0 bg-black/60"></div>

      <div className="relativemt  z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl mt-30 font-bold  md:text-5xl text-white text-center  drop-shadow-lg mb-6"
        >
          About Us ❤️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-3xl mx-auto mb-10 drop-shadow-lg  text-gray-200"
        >
          We are a passionate team dedicated to making your special day truly magical. With curated vendors,
          personalized experiences, and heartfelt service, we help couples celebrate love in the most memorable way.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Vendors",
              description:
                "Only the best and most trusted wedding professionals are listed on our platform.",
              icon: "📋",
            },
            {
              title: "Personalized Planning",
              description:
                "We help you plan your dream wedding with personalized suggestions and ideas.",
              icon: "💡",
            },
            {
              title: "24/7 Support",
              description:
                "Our support team is here to help at every step of your wedding journey.",
              icon: "💬",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-pink-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//        <section   className="min-h-screen w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
//       style={{
//         backgroundImage:
//           "url('https://imgs.search.brave.com/jg0IqkgWmVWKvTJd65SPKEt3rLVT1rCtRY0apNQbsBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzkxLzE0LzA4/LzM2MF9GXzk5MTE0/MDg3N193a0VXSlEx/akx4NlBydTVFUUhi/SE9kRVpXSHhNTDI2/dy5qcGc')",
//       }}> 
//        <div className="absolute  inset-0 bg-[rgba(0,0,0,0.6)]  "></div>
//        <div className="z-10 mt-30 text-center px-4 absolute top-10">
//           <h1 className="text-4xl md:text-5xl text-white text-center  font-bold mb-4 drop-shadow-lg">
//             About Us
//           </h1></div>

// <div></div>
      
      
//       </section>
      
   
//   )
// }

// export default About
