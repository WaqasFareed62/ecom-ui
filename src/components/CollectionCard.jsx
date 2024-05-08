import React from "react";
import { GrFormNextLink } from "react-icons/gr";

function CollectionCard(props) {
  return (
    <div className="flex-shrink-0  flex divide-x-2 justify-between border w-1/5 bg-[#E5E7EB] p-5  items-center ">
      <div>
        <h1 className=" font-bold">{props.title}</h1>
        <h3> Starting from ${props.price}</h3>
      </div>
      <button className="flex gap-1  justify-center items-center">
        Shop Now <GrFormNextLink />
      </button>
    </div>
  );
}

export default CollectionCard;
