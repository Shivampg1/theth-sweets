import React from "react";
import SweetCard from "../components/SweetCard";

const sweets = [
  { name: "Thekua", price: "150/kg", img: "/images/thekua.jpg" },
  { name: "Suji Halwa", price: "180/plate", img: "/images/suji.jpg" },
  { name: "Gujiya", price: "399/kg", img: "/images/gujiya.jpg" },
  { name: "Ananas", price: "299/kg", img: "/images/methi.jpg" },
  { name: "Malpua", price: "70/pcs", img: "/images/malpua.jpg" },
  { name: "Khoa Mix Cake", price: "499/kg", img: "/images/khoa.jpg" },
  { name: "Haldi Halwa", price: "599/kg", img: "/images/haldi.jpg" }
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
