import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 flex items-center justify-center text-center px-6">
      <div className="text-white max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-lg">
          Welcome to The Theth Bihari Sweets 🍬
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
          Authentic cultural sweets of Bihar, delivered fresh to your doorstep!
        </p>

        <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-md">
          आइए न हमरा बिहार में
        </p>

        <Link
          to="/menu"
          className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          🍩 Explore Menu
        </Link>
      </div>
    </section>
  );
}