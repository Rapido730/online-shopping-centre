import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Link } from "react-router-dom";


// console.log("hello");

import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { CategoryMap } = useContext(CategoriesContext);

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
