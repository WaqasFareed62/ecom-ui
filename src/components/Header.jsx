import React from "react";
import logo from "../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";

function Header() {
  return (
    <div className="flex justify-around p-4">
      <div>
        <img src={logo} alt="hi" />
      </div>
      <div>
        <input
          type="text"
          className=" bg-[#E5E7EB] rounded-xl p-1 w-full"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-6">
        <IoMdPerson />

        <CiShoppingCart />
      </div>
    </div>
  );
}

export default Header;
