import React, { useContext, useState } from "react";
import { GadgetContext } from "../Providers/GadgetProvider";
import Item from "./item";
import Wishitem from "./Wishitem";

const Wishlist = () => {
  const { wishlist } = useContext(GadgetContext);
  console.log(wishlist);
  return (
    <div className="m-4">
      <h1 className="text-2xl font-semibold text-black py-4">WishList</h1>
      {wishlist.map((item) => (
        <Wishitem key={item.product_id} item={item}></Wishitem>
      ))}
    </div>
  );
};

export default Wishlist;
