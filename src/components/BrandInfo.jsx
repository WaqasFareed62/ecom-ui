import React from "react";
import { PiShippingContainer } from "react-icons/pi";
import Svg from "../assets/svg.svg";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Fill } from "react-icons/ri";

function BrandInfo() {
  return (
    <div className="flex gap-5 border mt-4 p-3  divide-x   rounded-xl  w-2/3 justify-center">
      <div className="flex gap-4 items-center">
        <PiShippingContainer />
        <div>
          <h3>Free Shiping</h3>
          <h3>On Orders above 150$</h3>
        </div>
      </div>

      <div className="flex gap-2 items-center p-2">
        <img src={Svg} alt="svg image" />
        <div>
          <h3>Very Easy To Return</h3>
          <h3>Just Phone No</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center  p-2">
        <TfiWorld />

        <div>
          <h3>World Wide Devlivery</h3>
          <h3>Fast delivery Worldwide</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center  p-2">
        <RiRefund2Fill />

        <div>
          <h3> Refunds Policy</h3>
          <h3>60 Days Returns For Every Reason</h3>
        </div>
      </div>
    </div>
  );
}

export default BrandInfo;
