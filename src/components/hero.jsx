import React from "react";
import { CiSearch } from "react-icons/ci";
function Hero() {
  return (
    <div>
      <div className=" flex   p-52 items-center bg-hero-img w-full h-96">
        <div className="  ">
          <div className=" text-xl text-[#4B5563]">Starting From: $49</div>
          <div className="text-5xl   font-bold">
            <h1 className="text-[#111827] ">Exculsive Collection</h1>
            <h1>For Everyone</h1>
          </div>
          <div className="mt-3">
            <button className="bg-[#111827] flex items-center gap-2 text-white p-3 rounded-3xl ">
              Explore Now <CiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
