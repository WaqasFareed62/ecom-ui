import React from "react";
import CollectionCard from "./CollectionCard";
import HorizontalScrollWithDots from "./HorizontalScroll";

function CollectionSection() {
  return (
    <div>
      <h1 className=" text-[#111827] font-bold ml-1">
        Start Exploring{" "}
        <span className=" font-semibold text-[#4B5563]">
          {" "}
          Good Things Are Waiting For You{" "}
        </span>
      </h1>

      <div className="flex gap-4 overflow-x-scroll w-full no-scrollbar mt-3 mb-3 ">
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
        <CollectionCard title={" For Mens"} price={32} />
      </div>
    </div>
  );
}

export default CollectionSection;
