import React, { useContext, useState } from "react";
import { GadgetContext } from "../Providers/GadgetProvider";
import Item from "./item";

const Cart = () => {
  const { cart } = useContext(GadgetContext);
  const [newcart, setNewcart] = useState(cart);
  // console.log(cart);
  let sum = 0;
  for (const i of cart) {
    sum = i.price + sum;
  }
  const sortByPrice = () => {
    const sortedCart = [...newcart].sort((a, b) => b.price - a.price);
    setNewcart(sortedCart);
  };
  return (
    <div className="my-10">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-black py-4">Cart</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Total Cost : {sum}</h2>
          <button
            onClick={sortByPrice}
            className="border-2 border-[#9538E2] py-3 px-10 rounded-full text-xl text-[#9538E2] font-semibold hover:bg-[#9538e269]"
          >
            Sort by price
          </button>
        </div>
      </div>

      {newcart.map((item) => (
        <Item item={item} key={item.product_id}></Item>
      ))}
    </div>
  );
};

export default Cart;
