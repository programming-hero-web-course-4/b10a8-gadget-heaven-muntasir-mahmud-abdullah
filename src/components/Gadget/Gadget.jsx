import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  // const [gadgets, setGadgets] = useState([]);
  // useEffect(() => {
  //   fetch("/gadgets.json")
  //     .then((res) => res.json())
  //     .then((data) => setGadgets(data));
  // }, []);
  const { product_id, product_image, product_title, price } = gadget;
  return (
    <div className="bg-base-100 drop-shadow-xl rounded-xl">
      <figure className="px-6 pt-6 ">
        <img src={product_image} className="rounded-xl" />
      </figure>
      <div className="flex flex-col space-y-2 px-6 items-left">
        <h2 className="card-title mt-4">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link to={`gadgets/${product_id}`}>
            <button className="text-[rgb(149,56,226)] border-[rgb(149,56,226)] border-2 py-2 px-3  rounded-full mb-4 mt-1 hover:bg-gray-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
