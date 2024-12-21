import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import heartimg from "../../assets/heart.png";
import { GadgetContext } from "../Providers/GadgetProvider";
const GadgetDetails = () => {
  const { wishlist, setWishlist, cart, setCart } = useContext(GadgetContext);
  const { gadgetId } = useParams();
  const id = parseInt(gadgetId);
  const data = useLoaderData();
  const gadgetData = data.find((gadget) => gadget.product_id === id);
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = gadgetData;
  const handleWishlist = () => {
    if (!wishlist.find((wishItem) => wishItem.product_id === product_id)) {
      setWishlist((prev) => [...prev, gadgetData]);
    }
  };
  const handleCart = () => {
    if (!cart.find((cartItem) => cartItem.product_id === product_id)) {
      setCart((prev) => [...prev, gadgetData]);
    }
  };
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else if (i - rating < 1) {
      stars.push(<span key={i}>&#9734;</span>); // Half star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  return (
    <div className=" bg-base-200  mt-[75px]">
      <div className="flex flex-col items-center justify-center bg-[#9538e2e7] text-center gap-4 p-10">
        <h1 className="text-white text-4xl font-semibold">Product Details</h1>
        <p className="text-sm text-gray-200 w-6/12">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="hero-content mt-4 flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">{product_title}</h1>
          <h3 className="text-2xl font-semibold">Price: $ {price}</h3>
          <button className="border-2 border-green-600 px-4 py-1 bg-green-200 rounded-full">
            {" "}
            {availability ? <p>In Stock</p> : <p>not available</p>}{" "}
          </button>
          <p className="">{description}</p>
          <h4 className="text-xl font-semibold">Specification:</h4>
          <ul className="list-decimal pl-6">
            {Specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <h4 className="text-xl font-semibold">
            Rating <p className="w-4 inline-block h-4 bg-black"></p>
          </h4>
          <div className="flex items-center gap-4">
            <div style={{ color: "#ffd700", fontSize: "2em" }}>{stars}</div>
            <span className="bg-gray-300 mt-1 p-1 px-3 rounded-full">
              {rating}
            </span>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleCart}
              className="bg-[#9538E2] flex px-4 py-3 rounded-full gap-3 text-white items-center font-semibold"
            >
              Add To Card
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button
              onClick={handleWishlist}
              className="border-2 border-gray-300 p-3 rounded-full"
            >
              <img className="w-4" src={heartimg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
