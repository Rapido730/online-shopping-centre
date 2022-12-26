import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.style.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link className="nav-link" to={`/shop/${title}`}>
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
      </Link>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
