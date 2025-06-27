import React from "react";

// Section 1: Hero & Featured Gallery
const FeaturedGallery = () => {
  const images = [
    "https://i.pinimg.com/736x/98/46/b9/9846b9514af7ceb6274d31e25fb6b12e.jpg",
    "https://i.pinimg.com/736x/6d/fe/d2/6dfed272d6cc4c79efb2c3ce2e3b5881.jpg",
    "https://i.pinimg.com/736x/0b/4a/ea/0b4aea85e215e8663af7d6d3331c02f9.jpg",
    "https://i.pinimg.com/736x/79/4b/93/794b93bde63bfd674fe27c368371e6ca.jpg",
    "https://i.pinimg.com/736x/ee/a2/88/eea2889c61e799ae1c3dbc4f6f64c5d4.jpg",
    "https://i.pinimg.com/736x/fb/bf/fd/fbbffde653371b03dadcd1c165f5e3a3.jpg",
  ];

  return (
    <div className="w-full">
     
      <div
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/bb/a6/ae/bba6ae543ed46c1f3183efd55eed61b1.jpg')",
        }}
      >
        <div className="absolute inset-0  bg-opacity-50 z-0"></div>
        <div className="z-10 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Our Gallery</h1>
        </div>
      </div>

      {/* Grid of Featured Photos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Captured Moments of Love
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cherish the memories of our lovely couples through these handpicked moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img src={img} alt={`Wedding ${idx}`} className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Section 2: Monthly Galleries
const MonthlyGallerySection = () => {
  const galleryData = {
    "June 2024": [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1520763185298-1b434c919102",
      "https://images.unsplash.com/photo-1549880189-1682456dbeba",
      "https://images.unsplash.com/photo-1549887534-3240b3e3dbb2",
      "https://images.unsplash.com/photo-1559628233-b4f1b0c3d6b1",
    ],
    "May 2024": [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1510414696678-2415ad8474aa",
      "https://images.unsplash.com/photo-1609791254269-379b6c9a1b15",
      "https://images.unsplash.com/photo-1598515213704-4b9b9799c8e2",
      "https://images.unsplash.com/photo-1551270070-0cec2fcd9f4d",
      "https://images.unsplash.com/photo-1579547621706-1a9c79d5ffa0",
    ],
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Object.entries(galleryData).map(([month, images]) => (
          <div key={month}>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{month}</h2>
            <p className="text-gray-500 mb-6">
              Memorable celebrations captured this month.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery ${month} ${index}`}
                  className="w-full h-64 object-cover rounded-lg shadow hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Final Exported Component
const Gallery = () => {
  return (
    <>
      <FeaturedGallery />
      <MonthlyGallerySection />
    </>
  );
};

export default Gallery;
