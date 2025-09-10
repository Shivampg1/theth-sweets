import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center bg-orange-600 text-white px-6 py-4 shadow-md">
      {/* Brand/Logo */}
      <Link to="/" className="text-xl font-bold hover:text-yellow-200">
        🍬 The Theth Bihari
      </Link>

      {/* Navigation Links (center) */}
      <div className="flex gap-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-200">
          Home
        </Link>
        <Link to="/menu" className="hover:text-yellow-200">
          Menu
        </Link>
      </div>

      {/* Cart Button (right) */}
      <Link
        to="/cart"
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-white transition"
      >
        🛒 Go to Cart ({cartCount})
      </Link>
    </nav>
  );
}
