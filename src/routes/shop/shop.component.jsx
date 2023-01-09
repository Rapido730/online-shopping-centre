import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { SetCategories } from "../../store/category/category.action";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.util";

const Shop = () => {
  const dispatch = useDispatch();
  // console.log("shop renders")
  useEffect(() => {
    const getCategoryMap = async () => {
      //  //console.log("chal gye")
      const categoriesArray = await getCategoriesAndDocuments();
      //console.log(categoriesArray)
      dispatch(SetCategories(categoriesArray));
    };
    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
