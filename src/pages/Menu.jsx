// src/pages/Menu.jsx (replace your current file)
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
  const [toast, setToast] = useState({ msg: "", visible: false });
  const timers = useRef([]);

  useEffect(() => {
    return () => {
      // cleanup timers on unmount
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
  }, []);

  const handleAddToCart = (sweet) => {
    // call parent's addToCart
    addToCart(sweet);

    // show toast (visible -> true)
    setToast({ msg: `${sweet.name} added to cart 🛒`, visible: true });

    // clear any existing timers
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];

    // hide (fade) after 1800ms
    timers.current.push(
      setTimeout(() => {
        setToast((s) => ({ ...s, visible: false }));
      }, 1800)
    );

    // remove text after 2200ms (so opacity transition can finish)
    timers.current.push(
      setTimeout(() => {
        setToast({ msg: "", visible: false });
      }, 2200)
    );
  };

  return (
    <div className="p-8">
      {/* Floating toast (top-center, fixed) */}
      {toast.msg && (
        <div
          className="fixed top-4 left-1/2 z-50 rounded-lg shadow-lg px-6 py-3"
          style={{
            background: "#16a34a", // green-600
            color: "white",
            transform: toast.visible ? "translate(-50%, 0)" : "translate(-50%, -8px)",
            left: "50%",
            transition: "opacity 220ms ease, transform 220ms ease",
            opacity: toast.visible ? 1 : 0,
            pointerEvents: "none" // won't block clicks
          }}
        >
          {toast.msg}
        </div>
      )}

      {/* grid of sweets */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sweets.map((sweet, i) => (
          // we pass a function so SweetCard can call addToCart() without args
          <SweetCard key={i} sweet={sweet} addToCart={() => handleAddToCart(sweet)} />
        ))}
      </div>
    </div>
  );
}
