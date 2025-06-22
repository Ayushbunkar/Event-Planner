import React from "react";

const Booknow = () => {
  return (
    <div className="w-full">
      <section
        className="h-[100vh] w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("https://t3.ftcdn.net/jpg/14/86/03/96/240_F_1486039696_rpg3vYfYc05iv9vLVhdCBnAvqGs0Ukfe.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] z-10 "></div>
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Your Magical Day Starts Here
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-6 drop-shadow">
            Celebrate love, laughter, and memories with a wedding you'll never
            forget. Book now and make your dreams come true.
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/20 p-10 rounded-xl w-full max-w-md text-white shadow-lg border border-white/30">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Login to Continue
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 drop-shadow-md   rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="you@google.com"
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booknow;
