import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { GadgetsContext } from "../gadgets/gadgets";

const Sidebar = ({handleCategory}) => {
    // const {gadgets, setGadgets} = useContext(GadgetsContext);
    // console.log(gadgets)

  return (
    <div className="flex flex-col gap-8">
      <NavLink onClick={()=>handleCategory('products')}
        className="bg-[#9538e2] mt-2 text-white text-xl font-bold pl-4 pr-10 py-4 rounded-full"
      >
        All Gadgets
      </NavLink>
      <NavLink onClick={()=>handleCategory('computers')}
        className="bg-[#F2F2F3] text-gray-500 text-xl font-semibold pl-4 pr-10 py-4 rounded-full"
      >
        Computers
      </NavLink>
      <NavLink onClick={()=>handleCategory('phones')}
        className="bg-[#F2F2F3] text-gray-500 text-xl font-semibold pl-4 pr-10 py-4 rounded-full"
      >
        Phones
      </NavLink>
      <NavLink onClick={()=>handleCategory('smartWatches')}
        className="bg-[#F2F2F3] text-gray-500 text-xl font-semibold pl-1 pr-6 py-4 rounded-full"
      >
        Smart Watches
      </NavLink>
    </div>
  );
};

export default Sidebar;
