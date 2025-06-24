import React from 'react'

const Contact = () => {
  return (
      <section   className="h-270 w-full  bg-cover relative  "
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg')",
      }}>  <div className="absolute bg-opacity-80 inset-0 bg-[rgba(0,0,0,0.6)] z-10 "></div>

  
      <div className="z-20  pb-120 relative text-center px-4 flex flex-col justify-center items-center h-full text-white ">
      
           <div className="flex  justify-center items-center min-h-screen pb-30 p-6">
  <form
    action="#"
    method="POST"
    className="w-180  max-w-lg mt-170 pt-10  h-150 backdrop-blur-md bg-white/10 p-8  rounded-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white"
  >
    <h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-pink-400">
      Contact Us 💌
    </h2>

    <div className="mb-5">
      <label htmlFor="name" className="block text-sm mb-2 tracking-wider">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="fullName"
        required
        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
        placeholder="Enter your full name"
      />
    </div>

    <div className="mb-5">
      <label htmlFor="email" className="block text-sm mb-2 tracking-wider">
        Your Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-sm mb-2 tracking-wider">
        Your Message
      </label>
      <textarea
        name="message"
        id="message"
        rows="5"
        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
        placeholder="Type your message here..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-pink-500 hover:bg-pink-600 transition-all duration-200 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl"
    >
      🚀 Send Message
    </button>
  </form>
</div>
        </div>

     

      </section>
  )
}

export default Contact