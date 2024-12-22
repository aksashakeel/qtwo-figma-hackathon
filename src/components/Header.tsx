"use client";  // <-- Add this line at the very top

import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // for hamburger icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-gray-600  body-font w-full h-auto">
      <div className="container mx-auto md:flex-col  flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold flex items-center justify-center md:mr-0 w-auto">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </span>

        {/* Hamburger Menu for mobile screens */}
        <div className="md:hidden flex items-center ml-auto">
          <HiOutlineMenuAlt3
            onClick={toggleMenu}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
        <div className="flex ">
        {/* Desktop Navigation links */}
        <nav className="  hidden md:flex flex-wrap items-center text-base gap-x-2 w-full md:w-auto justify-center md:justify-start">
          <Link href="/" className="mr-5 text-white py-2 hover:text-yellow-500">
            Home
          </Link>
          <Link href="/menu" className="mr-5 text-white py-2 hover:text-yellow-500">
            Menu
          </Link>
          <Link href="/blogs" className="mr-5 text-white py-2  hover:text-yellow-500">Blogs</Link>
          <Link href="/pages" className="mr-5 text-white py-2 hover:text-yellow-500">Pages</Link>
          <Link href="/aboutus" className="mr-5 text-white py-2 hover:text-yellow-500">
            About Us
          </Link>
          <Link href="/shop" className="mr-5 text-white py-2 hover:text-yellow-500">Shop</Link>
          <Link href="/contact" className="mr-5 text-white py-2 hover:text-yellow-500">Contact</Link>
        </nav>

        {/* Icons for larger screens */}
        <div className="hidden md:flex items-center gap-x-4 text-white md:pl-20 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
        
          <IoSearchOutline className="text-xl" />
          <AiOutlineUser className="text-xl" />
          <HiOutlineShoppingBag className="text-xl" />
        </div>
        </div>
      </div>

      {/* For mobile screens, showing nav links as a vertical list when menu is open */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center gap-4 bg-black text-white py-4`}
      >
        {/* Mobile Navigation links */}
        <Link href="/" className="py-2 hover:text-yellow-500">
          Home
        </Link>
        <Link href="/menu" className="py-2 hover:text-yellow-500">
          Menu
        </Link>
        <Link href="/blogs" className="py-2 hover:text-yellow-500">Blogs</Link>
        <Link href="/pages" className="py-2 hover:text-yellow-500">Pages</Link>
        <Link href="/aboutus"className="py-2 hover:text-yellow-500">
          About Us
        </Link>
        <Link href="/shop" className="py-2 hover:text-yellow-500">Shop</Link>
        <Link href="/contact" className="py-2 hover:text-yellow-500">Contact</Link>

        {/* Icons inside the mobile menu */}
        <div className="flex gap-4 mt-4">
          <IoSearchOutline className="text-xl text-white" />
          <AiOutlineUser className="text-xl text-white" />
          <HiOutlineShoppingBag className="text-xl text-white" />
        </div>
      </div>
    </header>
  );
}
