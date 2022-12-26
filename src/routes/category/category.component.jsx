import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../component/product-card/product-card.component";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const { CategoryMap } = useContext(CategoriesContext);
  const [Products, SetProducts] = useState(CategoryMap[category]);

  useEffect(() => {
    SetProducts(CategoryMap[category]);
  }, [category, CategoryMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {Products &&
          Products.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Category;
