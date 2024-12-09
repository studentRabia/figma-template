import Image from "next/image";
import React from "react";
import Chair from "../../../public/images/Chair.png";
import Chairg from "../../../public/images/Chairg.png";
import Chairw from "../../../public/images/Chairw.png";
import Chairwe from "../../../public/images/Chairwe.png";

const ChairLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 p-6 w-full mx-auto max-w-[1200px]">
      {/* Left Section */}
      <div className="relative flex items-center justify-center lg:w-1/2">
        <Image
          src={Chair}
          alt="Orange Chair"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto object-cover"
        />
        <div className="absolute -left-6 sm:-left-10 lg:-left-48 top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm sm:text-base lg:text-lg font-semibold text-[#272343] text-center">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
        <Image
          src={Chairw}
          alt="Chair 1"
          className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-cover rounded-md shadow-sm"
        />
        <Image
          src={Chairwe}
          alt="Chair 2"
          className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-cover rounded-md shadow-sm"
        />
        <Image
          src={Chairg}
          alt="Chair 3"
          className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-cover rounded-md shadow-sm"
        />
        <Image
          src={Chairw}
          alt="Chair 4"
          className="w-[100px] sm:w-[150px] lg:w-[200px] h-auto object-cover rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};

export default ChairLayout;
