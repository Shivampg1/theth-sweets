import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4">Your cart is empty 🍪</p>
          <Link
            to="/menu"
            className="bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-700 transition"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <ul className="divide-y">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
