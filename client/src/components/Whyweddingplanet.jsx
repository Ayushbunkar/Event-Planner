import React from "react";

const WhyWeddingPlanet = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why WeddingBazaar?
        </h2>
        <p className="text-gray-600">
          We connect you with India's most trusted wedding vendors and happy
          customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-pink-100 rounded-xl p-6 text-left shadow hover:shadow-md transition">
          <div className="flex gap-4 mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/769/769633.png"
              alt="Flaticon Icon"
              className="w-12 h-12"
            />
          </div>
          <h4 className="font-bold text-gray-800 mb-2">
            Trusted marketplace
          </h4>
          <p className="text-gray-600 text-sm">From Matrimony.com group</p>
        </div>

        <div className="bg-blue-100 rounded-xl p-6 text-left shadow hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/48/000000/map.png"
            alt="vendors"
            className="mb-4"
          />
          <h4 className="font-bold text-gray-800 mb-2">
            2.8 Lakh+ Vendors
          </h4>
          <p className="text-gray-600 text-sm">
            Trusted vendors across 40+ cities
          </p>
        </div>

        <div className="bg-purple-100 rounded-xl p-6 text-left shadow hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/48/000000/wedding-rings.png"
            alt="rings"
            className="mb-4"
          />
          <h4 className="font-bold text-gray-800 mb-2">
            2.3M+ Connections
          </h4>
          <p className="text-gray-600 text-sm">With 60K+ wedding vendors</p>
        </div>

   
        <div className="bg-indigo-100 rounded-xl p-6 text-left shadow hover:shadow-md transition">
          <img
            src="https://img.icons8.com/color/48/000000/happy--v1.png"
            alt="happy"
            className="mb-4"
          />
          <h4 className="font-bold text-gray-800 mb-2">
            20 Lakh+ Customers
          </h4>
          <p className="text-gray-600 text-sm">And counting happy users</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeddingPlanet;
