import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center bg-orange-600 text-white px-6 py-4 shadow-md">
      {/* Brand/Logo */}
      <Link to="/" className="text-xl font-bold hover:text-yellow-200">
        🍬 The Thath Bihari
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-x-8 text-lg">
        <Link to="/" className="hover:text-yellow-200">
          Home
        </Link>
        <Link to="/menu" className="hover:text-yellow-200">
          Menu
        </Link>
        <Link to="/cart" className="hover:text-yellow-200">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}
