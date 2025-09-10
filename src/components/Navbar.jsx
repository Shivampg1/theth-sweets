import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center bg-orange-600 text-white px-6 py-4 shadow-md">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold hover:text-yellow-200">
          🍬 The Theth Bihari
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="flex-1 flex justify-center gap-x-6 text-lg">
        <Link to="/" className="hover:text-yellow-200">
          Home
        </Link>
        <Link to="/menu" className="hover:text-yellow-200">
          Menu
        </Link>
      </div>

      {/* Right: Cart */}
      <div className="flex-1 flex justify-end">
        <Link
          to="/cart"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-white transition"
        >
          🛒 Go to Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}
