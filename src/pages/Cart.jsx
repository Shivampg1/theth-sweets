import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeFromCart }) {
  // Calculate total using priceValue (numeric price)
  const total = cart.reduce((acc, item) => acc + (item.priceValue || 0), 0);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                {item.name} - ₹{item.price}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Total: ₹{total}</h2>
          <Link
            to="/checkout"
            className="block bg-green-600 text-white px-6 py-3 mt-4 rounded-lg"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}
