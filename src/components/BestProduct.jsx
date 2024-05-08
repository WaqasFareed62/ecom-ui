import React from "react";
import ProductCard from "./ProductCard";
function BestProduct() {
  return (
    <div>
      {" "}
      <h1 className=" text-[#111827] font-bold ml-1">
        Best Sellers{" "}
        <span className=" font-semibold text-[#4B5563]">
          {" "}
          Best Selling Of the Month{" "}
        </span>
      </h1>
      <div className="flex gap-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default BestProduct;
