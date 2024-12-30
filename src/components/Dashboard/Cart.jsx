import React, { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../Providers/GadgetProvider";
import Item from "./item";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart,setCart } = useContext(GadgetContext);
  const [newcart, setNewcart] = useState(cart);
  const [sum, setSum] = useState(0);

  // console.log(cart);
  useEffect(() => {
    let total = 0;
    for (const i of cart) {
      total = i.price + total;
    }
    setSum(total);
  }, []);
  const sortByPrice = () => {
    const sortedCart = [...newcart].sort((a, b) => b.price - a.price);
    setNewcart(sortedCart);
  };

  const handlePurchase = () => {
    setNewcart([]);
    setSum(0);
    setCart([]);
    document.getElementById("my_modal_4").showModal();
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
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className={` ${
              !sum
                ? "bg-[#9538e269] border-[#9538E2] py-3 px-10 rounded-full text-xl text-[#9538E2] font-semibold cursor-not-allowed"
                : "border-2 border-[#9538E2] py-3 px-10 rounded-full text-xl text-[#9538E2] font-semibold hover:bg-[#9538e269]"
            }`}
            onClick={handlePurchase}
            disabled={sum <= 0}
          >
            {" "}
            Purchase
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Congratulation!</h3>
              <p className="py-4">Sucessfully Purchased</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
            <Link to='/'>                  <button className="btn">
                    Close
                  </button></Link>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {newcart.map((item) => (
        <Item item={item} key={item.product_id}></Item>
      ))}
    </div>
  );
};

export default Cart;
