import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const cartCount = 3;

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:text-red-500 hover:bg-red-50 group"
    >
      <div className="relative">
        <FaShoppingCart className="text-xl group-hover:scale-110 transition-transform duration-300" />
        {cartCount > 0 && (
          <span className="absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
            {cartCount}
          </span>
        )}
      </div>
      <span className="hidden md:inline">Cart</span>
    </Link>
  );
};

export default CartIcon;
