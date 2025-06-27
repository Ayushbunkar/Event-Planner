import React, { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Standard",
      price: 29,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "❌ Design the event",
        "❌ Florist services",
        "❌ Photoshoot",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: 59,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "Design the event",
        "❌ Florist services",
        "❌ Photoshoot",
      ],
      highlighted: true,
    },
    {
      name: "Platinum",
      price: 89,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "Design the event",
        "Florist services",
        "Photoshoot",
      ],
      highlighted: false,
    },
  ],
  yearly: [
    {
      name: "Standard",
      price: 299,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "❌ Design the event",
        "❌ Florist services",
        "❌ Photoshoot",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: 599,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "Design the event",
        "❌ Florist services",
        "❌ Photoshoot",
      ],
      highlighted: true,
    },
    {
      name: "Platinum",
      price: 899,
      features: [
        "Interview the couple",
        "Preparation of budget",
        "Design the event",
        "Florist services",
        "Photoshoot",
      ],
      highlighted: false,
    },
  ],
};

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-16 shadow-lg  bg-pink-100 text-center rounded   " id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-pink-600 mb-4 ">Pricing Plans</h2>
        <p className="text-gray-600 mb-10">
          Choose the plan that suits your dream wedding.
        </p>

        
        <div className="flex justify-center shadow-black drop-shadow-2xl mb-10">
          <div className="inline-flex items-center space-x-4 bg-gray-200 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                billingCycle === "monthly"
                  ? "bg-pink-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full transition ${
                billingCycle === "yearly"
                  ? "bg-pink-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

       
        <div className="grid md:grid-cols-3 shadow-black drop-shadow-2xl gap-10">
          {plans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl shadow-lg border border-pink-200 transition-transform transform hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-pink-500 to-pink-300 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-4 right-4 text-sm bg-white text-pink-600 px-3 py-1 rounded-full font-bold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-base font-normal text-gray-400 ml-1">
                  /{billingCycle === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <ul className="text-sm space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    {feature.includes("❌") ? (
                      <span className="text-red-500">✖</span>
                    ) : (
                      <span className="text-green-400">✔</span>
                    )}
                    {feature.replace("❌", "")}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-md shadow-black drop-shadow-2xl font-bold ${
                  plan.highlighted
                    ? "bg-white text-pink-600 hover:bg-gray-100"
                    : "bg-pink-500 text-white hover:bg-pink-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
