"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiSofa } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[3rem] w-full bg-[#272343] text-white flex items-center px-6 sm:px-10 lg:px-80 justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 text-sm font-bold ">
        <GiSofa className="text-[#029FAE]" />
        Comforty
      </div>

      {/* Hamburger Menu Button */}
      <div className="sm:hidden">
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <select
            title="options"
            className="bg-[#272343] text-white border-none outline-none"
          >
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="arabic">Arabic</option>
            <option value="chines">Chinese</option>
            <option value="franch">French</option>
          </select>
        </div>
        <div>Faqs</div>
        <div>Need Help</div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[3rem] left-0 w-full bg-[#272343] text-white flex flex-col items-center space-y-4 py-4">
          <div className="flex flex-col items-center gap-4 text-sm">
            <select
              title="options"
              className="bg-[#272343] text-white border-none outline-none"
            >
              <option value="english">English</option>
              <option value="urdu">Urdu</option>
              <option value="arabic">Arabic</option>
              <option value="chines">Chinese</option>
              <option value="franch">French</option>
            </select>
            <div>Faqs</div>
            <div>Need Help</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[4.5rem] w-full border-b-2 px-6 sm:px-10 lg:px-80 text-[#272343] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 font-semibold text-xl">
        <GiSofa className="text-[#029FAE]" />
        Comforty
      </div>

      {/* Hamburger Menu */}
      <div className="sm:hidden">
        <button
          className="text-[#272343] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-6">
        <Link href="/" className="text-[#029FAE] hover:underline">
          Home
        </Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
       <Link href="/product" className="hover:underline">Product</Link>
        <Link href="/" className="hover:underline">Pages</Link>
        <Link href="/contact" className="hover:underline">About</Link>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="sm:hidden absolute top-[4.5rem] left-0 w-full bg-white text-[#272343] flex flex-col items-center space-y-4 py-4 shadow-md">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/product" className="hover:underline">Product</Link>
          <Link href="/" className="hover:underline">Pages</Link>
          <Link href="/contact" className="hover:underline">About</Link>
        </nav>
      )}

      {/* Contact Info (Desktop Only) */}
      <div className="hidden sm:block text-sm">
        Contact: (808) 555-0111
      </div>
    </div>
  );
};

export default Navbar;
