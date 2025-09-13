import React from "react";
import banner from "../../assets/hero.png";
import { FaSearch } from "react-icons/fa";
import Tooltip from "../../Components/Tooltip";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="md:pt-48 px-2  pt-24 text-center space-y-6 md:w-1/2 mx-auto ">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-xl text-gray-300 font-normal lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* Search field  */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search Furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/20 rounded-full placeholder:text-white border border-gray-300 focus:outline-none"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full">
            <FaSearch />
          </div>
        </div>
      </div>
      {/* bottom blur effect  */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

      {/* hover button for displaying tooltip box  */}
      
      <div className="hidden xl:block absolute bottom-40 left-24">
        <Tooltip position="bottom"/>
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96">
        <Tooltip position="bottom"/>
      </div>
      <div className="hidden xl:block absolute bottom-24 right-[820px]">
        <Tooltip position="bottom"/>
      </div>
      <div className="hidden xl:block absolute bottom-12 right-16">
        <Tooltip position="bottom"/>
      </div>
    </section>
  );
};

export default Hero;
