
import React from "react";
import SearchBar from "./Searchbar";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineShoppingCart } from "react-icons/md";




const Header=()=>{
  return (
  <>
  <div className="h-20 min-w-full shadow-md flex justify-between items-center bg-blue-200">
   <div className="ml-8"><HiOutlineShoppingBag className="text-3xl" /></div>
   <SearchBar/>
   <div className="mr-14"><MdOutlineShoppingCart className="text-3xl" /></div>
  </div>
</>
);
  
}

export default Header