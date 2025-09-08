import React from "react";
import SweetCard from "../components/SweetCard";

const sweets = [
  { name: "Thekua", price: 150, img: "/images/thekua.jpg" },
  { name: "Suji Halwa", price: 120, img: "/images/suji.jpg" },
  { name: "Gujiya", price: 200, img: "/images/gujiya.jpg" },
  { name: "Methi", price: 100, img: "/images/methi.jpg" },
  { name: "Malpua", price: 180, img: "/images/malpua.jpg" },
  { name: "Khoa Mix Cake", price: 220, img: "/images/khoa.jpg" },
  { name: "Haldi Halwa", price: 130, img: "/images/haldi.jpg" }
];

export default function Menu({ addToCart }) {
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      {sweets.map((sweet, i) => (
        <SweetCard key={i} sweet={sweet} addToCart={addToCart} />
      ))}
    </div>
  );
}
