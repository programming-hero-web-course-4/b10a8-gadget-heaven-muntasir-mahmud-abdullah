import React, { createContext, useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import Sidebar from "../Sidebar/Sidebar";
// export const GadgetsContext = createContext();
const Gadgets = ({ category }) => {
  // console.log(category);
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);
  useEffect(() => {
    if (category === "products") {
      setFilteredGadgets(gadgets);
    } else if (category === "computers") {
      const computers = gadgets.filter(
        (gadget) => gadget.category === "Computers"
      );
      setFilteredGadgets(computers);
    } else if (category === "phones") {
      const Phones = gadgets.filter((gadget) => gadget.category === "Phones");
      setFilteredGadgets(Phones);
    } else if (category === "smartWatches") {
      const smartWatches = gadgets.filter(
        (gadget) => gadget.category === "Smart Watches"
      );
      setFilteredGadgets(smartWatches);
    }
  }, [category, gadgets]);

  return (
    // <GadgetsContext.Provider value={{gadgets, setFilteredGadgets}}>
    <div className="w-10/12 ml-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
      {filteredGadgets.map((gadget) => (
        <Gadget
          key={gadget.product_id}
          gadgets={gadgets}
          gadget={gadget}
        ></Gadget>
      ))}
    </div>
    //   <Sidebar></Sidebar>
    // </GadgetsContext.Provider>
  );
};

export default Gadgets;
