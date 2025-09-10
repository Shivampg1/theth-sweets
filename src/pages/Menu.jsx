import React from "react";
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
  // Creates a DOM toast at top-center, removes any previous toast first
  const showToast = (text) => {
    // remove existing toast if present (ensures single toast)
    const prev = document.getElementById("floating-toast");
    if (prev) prev.remove();

    const toast = document.createElement("div");
    toast.id = "floating-toast";
    toast.textContent = text;

    // base styles (keeps it independent of your CSS)
    Object.assign(toast.style, {
      position: "fixed",
      top: "16px",
      left: "50%",
      transform: "translateX(-50%) translateY(-8px)",
      background: "#16a34a", // green
      color: "white",
      padding: "10px 18px",
      borderRadius: "8px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
      zIndex: 9999,
      opacity: "0",
      pointerEvents: "none",
      transition: "opacity 180ms ease, transform 180ms ease",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
    });

    document.body.appendChild(toast);

    // show (allow the browser to apply initial style first)
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });

    // hide after 2000ms
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(-8px)";
      // remove from DOM after transition
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 200);
    }, 2000);
  };

  const handleAddToCart = (sweet) => {
    if (typeof addToCart === "function") addToCart(sweet);
    showToast(`${sweet.name} added to cart 🛒`);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {sweets.map((sweet, i) => (
          <SweetCard key={i} sweet={sweet} onAdd={() => handleAddToCart(sweet)} />
        ))}
      </div>
    </div>
  );
}