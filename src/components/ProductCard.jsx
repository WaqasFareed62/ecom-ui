import React from "react";
import product from "../assets/product-image.png";
import { FaStar } from "react-icons/fa";
function ProductCard() {
  return (
    <div className="border w-1/5 ">
      <img src={product} alt="" srcset="" />
      <div className="flex items-center justify-between font-bold px-2">
        <h1>Black Automatic Watch</h1>
        <h1>$199.5</h1>
      </div>
      <div className="flex items-center justify-between px-2">
        <h3>Accessries</h3>
        <h3 className="line-through">$399</h3>
      </div>
      <div className="flex items-center">
        <FaStar color="#FBBF24" />
        4.9(97)
      </div>
    </div>
  );
}

export default ProductCard;
