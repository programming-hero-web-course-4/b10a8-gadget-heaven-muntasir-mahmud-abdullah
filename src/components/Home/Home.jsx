import React, { useState } from "react";
import Banner from "../Banner/Banner";
import bannerimg from "../../assets/banner.jpg";
import Gadgets from "../gadgets/gadgets";
import Sidebar from "../Sidebar/Sidebar";

const Home = ({gadgets}) => {
  const [category,setCategory] = useState('products');
  const handleCategory = (category) => {
    setCategory(category);
}
  return (
    <div>
      <Banner></Banner>
      <div className="relative h-[700px]">
        <div className="bg-white/60 absolute backdrop-opacity-60 rounded-2xl p-4 border-2 border-white -top-44 left-[4%] w-11/12">
          <img className="rounded-2xl" src={bannerimg} alt="" />
        </div>
      </div>
      <div className="flex gap-8">
      <aside className="w-2/12 border-2 bg-white p-4 rounded-xl">
        <Sidebar handleCategory={handleCategory} gadgets={gadgets}></Sidebar>
      </aside>
      <Gadgets category={category} gadgets={gadgets}></Gadgets>
      </div>

    </div>
  );
};

export default Home;
