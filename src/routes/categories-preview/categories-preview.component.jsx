import { Fragment } from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../contexts/categories.context";

import { SelectCategoryMap } from "../../store/category/category.selector";

// //console.log("hello");

import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const CategoryMap = useSelector(SelectCategoryMap);


  return (
    <Fragment>
      {Object.keys(CategoryMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={CategoryMap[title]}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
