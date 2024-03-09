import logo from "../images/logo.png"
import React from "react";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";



const Header=()=>{
  return (
  <div className="container mx-auto flex items-center justify-between  py-1 text-white px-2">
  <img src={logo} alt="logo" className="w-16 h-16" />
  <div className="flex items-center">
    <div className="flex items-center mr-2">
      <HiOutlinePhoneOutgoing  className="text-[30px] mr-2" />
      <div>
        <p>Call to buy</p>
        <p>9876590876</p>
      </div>
    </div>
    <div className="relative">
      <FaCartShopping className="text-[24px]" />
      
        <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
          0
        </span>
      
    </div>
  </div>
</div>
);
  
}

export default Header