import React from "react";
import SweetCard from "../components/SweetCard";

const sweets = [
  { name: "Thekua", price: "20/pcs", priceValue: 20, img: "/images/thekua.jpg" },
  { name: "Suji Halwa", price: "60/plate", priceValue: 60, img: "/images/suji.jpg" },
  { name: "Gujiya", price: "20/pcs", priceValue: 20, img: "/images/gujiya.jpg" },
  { name: "Ananas", price: "160/kg", priceValue: 160, img: "/images/methi.jpg" },
  { name: "Malpua", price: "40/pcs", priceValue: 40, img: "/images/malpua.jpg" },
  { name: "Khoa Mix Cake", price: "180/kg", priceValue: 180, img: "/images/khoa.jpg" },
  { name: "Haldi Halwa", price: "80/plate", priceValue: 80, img: "/images/haldi.jpg" }
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
