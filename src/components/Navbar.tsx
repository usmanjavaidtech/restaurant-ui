import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="h-16 md:h-24 flex items-center justify-between px-4 md:px-8 lg:px-20 xl:px-40">
        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-8 flex-1">
          <Link
            href="/"
            className="text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-red-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Homepage
          </Link>
          <Link
            href="/menu"
            className="text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-red-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-red-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>

        {/* LOGO */}
        <div className="flex-1 md:text-center">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block"
          >
            MASSIMO
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex gap-6 items-center justify-end flex-1">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Image src="/phone.png" alt="phone" width={20} height={20} />
            <span className="text-sm">123 456 78</span>
          </a>
          {!user ? (
            <Link
              href="/login"
              className="text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-red-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/orders"
              className="text-gray-700 font-semibold text-sm uppercase tracking-wide hover:text-red-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Orders
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
