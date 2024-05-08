import React from "react";
import ProductCard from "./ProductCard";
function ProductCollection() {
  return (
    <div>
      {" "}
      <h1 className=" text-[#111827] font-bold ml-1">
        Recommendations{" "}
        <span className=" font-semibold text-[#4B5563]">
          {" "}
          Best Matching Products For You{" "}
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

export default ProductCollection;
