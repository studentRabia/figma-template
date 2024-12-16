"use client";
import Link from "next/link";

import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
// import { FaCheck } from "react-icons/fa6";
// import { PiWarningCircle } from "react-icons/pi";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { PiWarningCircle } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa"; // Import Hamburger Icon
import { IoClose } from "react-icons/io5"; // Import Close Icon



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  bg-[#272343] text-white flex justify-between items-center px-4 md:px-40 h-[3rem] relative lg:px-40">
      {/* Left Section */}
      <div className="flex items-center gap-2 text-sm ">
        <FaCheck /> <span>Shipping on all orders over $50</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <IoClose className="size-6 text-white" />
          ) : (
            <FaBars className="size-6 text-white" />
          )}
        </button>
      </div>

      {/* Right Section */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row absolute md:relative top-[3rem] left-0 w-full bg-[#272343] md:w-auto md:top-0 md:bg-transparent md:items-center md:justify-end md:space-x-4 px-4 md:px-0`}
      >
        <select
          title="options"
          className="bg-[#272343] text-white border-none outline-none mb-2 md:mb-0 sm:w-auto overflow-hidden w-44"
        >
          <option value="english">English</option>
          <option value="urdu">Urdu</option>
          <option value="arabic">Arabic</option>
          <option value="chines">Chinese</option>
          <option value="franch">French</option>
        </select>
        <div><Link href="/faqs">Faqs</Link></div>
        <div className="flex items-center gap-1 text-sm">
          <PiWarningCircle /> Need Help
        </div>
      </div>
    </div>
  );
};




export const HeaderMid = () => {
  return (
    <div className="h-[4rem] w-full bg-gray-100 flex flex-row justify-between items-center px-6 md:px-40 lg:px-40">
      {/* Left Section - Brand */}
      <div className="flex items-center gap-2 font-semibold text-xl">
        <GiSofa className="text-[#029FAE]" />
        Comforty
      </div>

      {/* Right Section - Cart */}
      <div>
        <button className="bg-white text-black font-semibold h-11 px-4 flex items-center gap-2 border border-gray-300 rounded-md hover:shadow-md">
          <FiShoppingCart />
          <span>Cart</span>
          <TbCircleNumber2Filled className="text-[#029FAE]" />
        </button>
      </div>
    </div>
  );
};



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle hamburger menu
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="h-[4.5rem] w-full flex flex-wrap justify-between items-center border-b-2 px-6 sm:px-16 text-[#272343] md:px-40 lg:px-40">
      {/* Left Section - Navigation Links */}
      <nav className="flex flex-wrap gap-6">
        <Link href="/" className="text-[#029FAE] hover:underline hover:underline-offset-4">
          Home
        </Link>
        <Link href="/shop" className="text-black hover:underline hover:underline-offset-4">
          Shop
        </Link>
        <Link href="/product" className="text-black hover:underline hover:underline-offset-4">
          Product
        </Link>
        <Link href="/pages" className="text-black hover:underline hover:underline-offset-4">
          Pages
        </Link>
        <Link href="/about" className="text-black hover:underline hover:underline-offset-4">
          About
        </Link>
      </nav>

      {/* Right Section - Contact Info */}
      <div className="mt-2 sm:mt-0 text-black text-sm hidden sm:block">
    <Link href='/contact'>Contact: (808) 555-0111</Link>
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="sm:hidden flex items-center">
        <button onClick={handleMenuToggle} className="text-2xl">
          {isMenuOpen ? <FaTimes/> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="absolute top-[4.5rem] left-0 w-full bg-white shadow-md sm:hidden">
          <nav className="flex flex-col items-center py-4">
            <Link href="/" className="text-[#029FAE] hover:underline hover:underline-offset-4 mb-4">
              Home
            </Link>
            <Link href="/shop" className="text-black hover:underline hover:underline-offset-4 mb-4">
              Shop
            </Link>
            <Link href="/product" className="text-black hover:underline hover:underline-offset-4 mb-4">
              Product
            </Link>
            <Link href="/pages" className="text-black hover:underline hover:underline-offset-4 mb-4">
              Pages
            </Link>
            <Link href="/about" className="text-black hover:underline hover:underline-offset-4 mb-4">
              About
            </Link>

            
            <div className="text-black text-sm mt-4"><Link href='/contact'>Contact: (808) 555-0111</Link></div>
          </nav>
        </div>
      )}
    </div>
  );
};


export default Navbar;

