import { useEffect,useState } from "react";
import { createContext } from "react";

import DATA from "../shop-data.json";
// console.log(Products);
  
export const ProductsContext = createContext({
    Products: [],
});

export const ProductsProvider = ({children}) => {
    const [Products,SetProducts] = useState(DATA);
    const value = {Products};
    // console.log(CurrentProduct)

    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>);
};