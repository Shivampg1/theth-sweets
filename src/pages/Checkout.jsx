import React, { useState } from "react";

export default function Checkout({ cart }) {
  // ✅ use priceValue for correct total calculation
  const total = cart.reduce((acc, item) => acc + (item.priceValue || 0), 0);
  const orderList = cart.map((i) => `${i.name} - ₹${i.price}`).join(", ");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const whatsappMessage = `Hi, I want to order:
${orderList}.
Total = ₹${total}.

Customer Details:
Name: ${name}
Phone: ${phone}
Address: ${address}`;

  return (
    <div className="p-8 max-w-lg mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Checkout ✅</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2 className="text-xl mb-2">Your Order:</h2>
          <p className="mb-4">{orderList}</p>
          <h2 className="text-xl font-semibold mb-6">Total: ₹{total}</h2>

          {/* Customer Details Form */}
          <div className="space-y-4 text-left">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg p-2"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg p-2"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block font-semibold">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg p-2"
                placeholder="Enter delivery address"
                rows="3"
                required
              />
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/7011997563?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            className="block bg-green-600 text-white px-6 py-3 rounded-lg mt-6 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirm Order on WhatsApp
          </a>
        </>
      )}
    </div>
  );
}