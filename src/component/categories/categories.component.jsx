import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

const Categories = ({CategoriesList}) => {
  
  return (
    <div className="categories-container">
      {CategoriesList.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
