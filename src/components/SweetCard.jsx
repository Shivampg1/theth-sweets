import React from "react";

export default function SweetCard({ sweet, onAdd }) {
  return (
    <div className="p-4 border rounded-2xl shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 text-center">
      <img 
        src={sweet.img} 
        alt={sweet.name} 
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-semibold mt-3">{sweet.name}</h2>
      <p className="text-gray-600 text-lg">{sweet.price}</p>
      <button
        onClick={onAdd}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 mt-3 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
}