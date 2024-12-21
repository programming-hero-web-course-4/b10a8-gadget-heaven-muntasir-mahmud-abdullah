import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GadgetContext } from "../Providers/GadgetProvider";

const Dashboard = () => {
  return (
    <div className="mt-16">
      <div className="hero bg-[#9538e2d7] pt-4 pb-8">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl  font-bold text-white">Dashboard</h1>
            <p className="py-6 mx-auto mb-4 w-4/5 text-white ">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <NavLink
              to={"dashboard/cart"}
              className="text-white border-white border-2 py-3 px-16 mr-4  rounded-full mb-4 mt-1 hover:bg-white hover:text-[#9538e2d7] font-semibold"
            >
              Cart
            </NavLink>
            <NavLink
              to={"dashboard/wishlist"}
              className="text-white border-white border-2 py-3 px-16 ml-4  rounded-full mb-4 mt-1 hover:bg-white hover:text-[#9538e2d7] font-semibold"
            >
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
