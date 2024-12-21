import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[rgb(149,56,226)] pb-48 mt-[75px]">
      <div className="hero-content text-center">
        <div className="w-9/12">
          <h1 className="text-5xl text-white font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 text-white w-9/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <NavLink
            to={"dashboard"}
            className="py-4 px-10 hover:bg-[#5d38e27c] hover:text-white rounded-full bg-white text-lg border-none font-bold text-[#9538E2]"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
