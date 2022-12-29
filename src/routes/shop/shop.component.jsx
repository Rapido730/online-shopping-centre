import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { SetCategoryMap } from "../../store/category/category.action";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase.util";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      //  console.log("chal gye")
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(SetCategoryMap(categoryMap));
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
