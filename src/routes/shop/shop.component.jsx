import {useContext} from "react";
import { ProductsContext } from "../../contexts/product.context";
import "./shop-styles.scss"
import { Outlet } from "react-router-dom";


// console.log("hello");
import ProductCard from "../../component/product-card/product-card.component";

const Shop = () => {
    const {Products} = useContext(ProductsContext);
    // console.log(CurrentProduct)
    return (
      <div className="products-container">
        {Products.map(( product ) => (
          
            <ProductCard key={product.id} product={product}></ProductCard>
          
    ))}
      </div>

      
      
    );
}

export default Shop;