import { useEffect,useState } from "react";
import { createContext } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.util.js";
// import SHOP_DATA from "../shop-data.js";

// console.log(Products);
  
export const CategoriesContext = createContext({
    CategoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [CategoryMap, SetCategoryMap] = useState({});

  // useEffect(()=>{
  //     addCollectionAndDocuments('categories',SHOP_DATA);
  // },[])

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      SetCategoryMap(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { CategoryMap };
  // console.log(CurrentProduct)

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};