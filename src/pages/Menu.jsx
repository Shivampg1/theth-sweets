import React, { useState, useRef, useEffect } from "react";
import SweetCard from "../components/SweetCard";

const sweets = [
  { name: "Thekua", price: "399/packet", priceValue: 399, img: "/images/thekua.jpg" },
  { name: "Suji Halwa", price: "60/plate", priceValue: 60, img: "/images/suji.jpg" },
  { name: "Gujiya", price: "20/pcs", priceValue: 20, img: "/images/gujiya.jpg" },
  { name: "Ananas", price: "160/kg", priceValue: 160, img: "/images/methi.jpg" },
  { name: "Malpua", price: "40/pcs", priceValue: 40, img: "/images/malpua.jpg" },
  { name: "Khoa Mix Cake", price: "180/kg", priceValue: 180, img: "/images/khoa.jpg" },
  { name: "Haldi Halwa", price: "80/plate", priceValue: 80, img: "/images/haldi.jpg" }
];

export default function Menu({ addToCart }) {
  const [toastText, setToastText] = useState("");
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  // cleanup timers on unmount
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleAddToCart = (sweet) => {
    // Call parent addToCart (if provided)
    if (typeof addToCart === "function") addToCart(sweet);

    // Show toast
    setToastText(`${sweet.name} added to cart 🛒`);
    setVisible(true);

    // Reset timer
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      // clear text after transition so component doesn't render empty block
      setTimeout(() => setToastText(""), 200);
    }, 2000);
  };

  return (
    <div className="p-8">
      {/* Floating toast - top-center */}
      <div
        aria-live="polite"
        className="fixed top-4 left-1/2 z-50 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          transition: "opacity 180ms ease, transform 180ms ease",
          opacity: visible ? 1 : 0,
          // nudge up when hidden for nicer appear/disappear
          transformOrigin: "center top"
        }}
      >
        {toastText ? (
          <div
            className="px-6 py-3 rounded-lg shadow-lg"
            style={{ backgroundColor: "#16a34a", color: "white" }}
          >
            {toastText}
          </div>
        ) : null}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sweets.map((sweet, i) => (
          // pass a clear onAdd callback
          <SweetCard key={i} sweet={sweet} onAdd={() => handleAddToCart(sweet)} />
        ))}
      </div>
    </div>
  );
}
