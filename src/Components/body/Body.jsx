import React from "react";
import heroImage from "/src/assets/img.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] bg-cover bg-center flex items-center justify-center md:justify-start"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
  
      <div className="absolute inset-0 bg-black/40"></div>

  
      <div className="relative z-10 text-white text-center md:text-left px-6 sm:px-10 md:px-20 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2">
          Welcome To
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight space-y-2">
          <div>Health Ways</div>
          <div>Hospital</div>
          <div className="text-blue-300">Kohat</div>
        </h1>

        <button className="mt-6 sm:mt-8 border border-white text-white px-5 sm:px-6 py-2 rounded hover:bg-white hover:text-black transition duration-300">
          View Service
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
