import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react"; // icons

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Brand/Logo */}
        <Link to="/" className="text-xl font-bold hover:text-yellow-200">
          🍬 The Theth Bihari
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-8 text-lg items-center">
          <Link to="/" className="hover:text-yellow-200">
            Home
          </Link>
          // <Link to="/menu" className="hover:text-yellow-200">
            Menu
         // </Link>
          <Link to="/cart" className="hover:text-yellow-200 flex items-center gap-1">
            <ShoppingCart size={20} /> Go to Cart ({cartCount})
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 text-lg bg-orange-700 p-4 rounded-lg">
          <Link to="/" className="hover:text-yellow-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/menu" className="hover:text-yellow-200" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
          <Link to="/cart" className="hover:text-yellow-200 flex items-center gap-1" onClick={() => setIsOpen(false)}>
            <ShoppingCart size={20} /> Go to Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
}
