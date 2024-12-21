import React, { createContext, useState } from 'react';
export const GadgetContext = createContext(null);
const GadgetProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    // console.log(cart)
    return (
        <GadgetContext.Provider value={{setWishlist,wishlist,cart,setCart}}>
            {children}
        </GadgetContext.Provider>
    );
};

export default GadgetProvider;