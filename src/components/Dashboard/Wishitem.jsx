import React from 'react';

const Wishitem = ({item}) => {
    const {product_image,product_title,description,price} = item;
    return (
        <div className="bg-white p-4 m-4 flex shadow-2xl rounded-xl  justify-between">
        <div className="w-3/12">
            <img className="" src={product_image} alt="No image" />
        </div>
        <div className="w-8/12">
            <h3 className="text-2xl font-bold">{product_title}</h3>
            <p className="text-lg text-gray-500">{description}</p>
            <h4 className="font-semibold text-xl">Price:$ {price}</h4>
        </div>
        <div className="flex items-center">
        <button className="text-red-500  text-lg font-bold border-2 border-red-500 px-4 py-2 mr-4 rounded-full">X</button>
        </div>
      </div>
    );
};

export default Wishitem;