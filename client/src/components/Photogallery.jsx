import React from "react";

const PhotoGallery = () => {
  const images = [
    "https://i.pinimg.com/736x/d7/ee/0a/d7ee0aee8948e2f2782bb8babd5c344c.jpg", // bride looking back
    "https://i.pinimg.com/736x/8b/bd/25/8bbd25cf150b3bfa136aafd9eafd259e.jpg", // couple holding hands
    "https://i.pinimg.com/736x/b0/0b/88/b00b885e2fa7f15eea5a07293864922d.jpg", // wedding shoes
    "https://i.pinimg.com/736x/ff/02/c5/ff02c5a3b5a0e50828ac44607df96279.jpg", // wedding rings
    "https://i.pinimg.com/736x/10/34/43/103443b385a48efd93de049d16d53cd4.jpg", // bride makeup
    "https://i.pinimg.com/736x/fa/9e/8e/fa9e8e93bd4ea928005107478ae13375.jpg", // groom suit
    "https://i.pinimg.com/736x/40/3b/34/403b34247d1129890d17a3eaa0eb6052.jpg",   // bride with bouquet
    "https://i.pinimg.com/736x/e2/f9/b1/e2f9b11d57a5338a487dd0e9e1e427af.jpg", // dress details
    "https://i.pinimg.com/736x/5d/9c/f0/5d9cf0446558bb5dcd200b6a4952f7a2.jpg", // wedding cake
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <img
            src="https://img.icons8.com/ios-filled/50/fa314a/picture.png"
            alt="Gallery Icon"
            className="mx-auto mb-3"
          />
          <h2 className="text-3xl font-bold text-pink-700 mb-2">Photo Gallery</h2>
          <p className="text-gray-600">Captured Moments From Magical Weddings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow  hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={`${src}?w=600&h=400&fit=crop`}
                alt={`Wedding shot ${idx + 1}`}
                className="w-full h-130  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
