import React, { useRef } from 'react';

const Stories = () => {
  const storiesRef = useRef(null);

  const scrollToStories = () => {
    storiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      
      <section
        className="min-h-screen w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/YtJ_MI-o4H_b3dJ1HuEQMajmhd21qmhcPngI28PUOBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzE2LzcyLzgy/LzM2MF9GXzcxNjcy/ODI3M185SElKZEVT/Zm5rMFhXT2lMdzhz/NVZxMW5NUURDd2tZ/dS5qcGc')`,
        }}
      >
        <div className="absolute inset-0 bg-black/35 z-0"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Wedding Stories 💍</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6 drop-shadow">
            Discover heartfelt journeys, magical moments, and memories etched in time by our beautiful couples.
          </p>
          <button
            onClick={scrollToStories}
            className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full text-white font-semibold shadow-md transition"
          >
            View All Stories
          </button>
        </div>
      </section>

     
      <section ref={storiesRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Couple Stories 💕</h2>
          <div className="grid md:grid-cols-3 gap-8">
        
            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Kritika & Ayush</h3>
              <p className="text-gray-600 text-sm">
                “ek time pr hume sacha pyar laga pr woh behen ki lund mujhe dhokha de gyi aur bakiyo ka lund chatne lagi behen ki lodi saap thi saapm naagin pro max uski maa ki choot ek dum sacha aadmi tha ayush pr woh randi behen ki lodi ek lund se uska mann nhi bhar a!”
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Aarav & Meera</h3>
              <p className="text-gray-600 text-sm">
                “We found our photographer, decorator, and caterer through this platform and they were all outstanding.
                It truly felt like a family celebration thanks to your amazing support.”
              </p>
            </div>
          
            <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-pink-700 mb-2">Kabir & Ananya</h3>
              <p className="text-gray-600 text-sm">
                “Every moment was picture-perfect! Our guests were mesmerized and we felt like royalty. The process was
                smooth, easy, and filled with joy. Highly recommend!”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
