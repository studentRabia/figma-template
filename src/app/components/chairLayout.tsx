import Image from "next/image";
import React from "react";
import Chair from "../../../public/images/Chair.png";
import Chairg from "../../../public/images/Chairg.png";
import Chairw from "../../../public/images/Chairw.png";
import Chairwe from "../../../public/images/Chairwe.png";

const ChairLayout = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      {/* Outer Container with 20% margin on left and right */}
      <div className="mx-[5%] lg:mx-[20%] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        
        {/* Left Section: Large Image with Side Text */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          <Image
            src={Chair}
            alt="Orange Chair"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto object-cover"
          />
          <div className="absolute left-[-40px] sm:left-[-60px] lg:left-[-140px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm sm:text-base lg:text-lg font-semibold text-[#272343] whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Right Section: Grid of Small Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
          <Image
            src={Chairw}
            alt="Chair 1"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
          <Image
            src={Chairwe}
            alt="Chair 2"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
          <Image
            src={Chairg}
            alt="Chair 3"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
          <Image
            src={Chairw}
            alt="Chair 4"
            className="w-full h-auto object-cover rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ChairLayout;
