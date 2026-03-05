import React from "react";
import patternimg from "../assets/vector1.png";

const Hero = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex items-center justify-center gap-8 px-[4%] py-10 md:py-20">
      <div className="relative flex-1 bg-linear-to-r from-[#6a1cd7] to-[#9d70dd] h-56 rounded-xl flex flex-col items-center justify-center text-white overflow-hidden py-37">
        <img src={patternimg} alt="" className="absolute top-0 left-0 w-92" />

        <img
          src={patternimg}
          alt=""
          className="absolute top-0 right-0 w-92 scale-x-[-1]"
        />

        <p className="text-2xl">In-Progress</p>
        <p className="text-6xl font-semibold mt-4">{inProgressCount}</p>
      </div>

      <div className="relative flex-1 bg-linear-to-r from-green-400 to-teal-600 h-56 rounded-xl flex flex-col items-center justify-center text-white overflow-hidden py-37">
        <img src={patternimg} alt="" className="absolute top-0 left-0 w-92" />

        <img
          src={patternimg}
          alt=""
          className="absolute top-0 right-0 w-92 scale-x-[-1]"
        />

        <p className="text-2xl">Resolved</p>
        <p className="text-6xl font-semibold mt-4">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Hero;
