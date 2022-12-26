import "./product-card.style.scss";

import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const {cartItems,addItemToCart} = useContext(CartContext);

  const { name, price, imageUrl } = product;
  // console.log(cartItems)

  const ItemHandler = (event) => {
    // console.log(event)
    addItemToCart(product);
    // console.log("clicked")
  }
  
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer" >
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button_type="inverted" onClick={ItemHandler}> Add to cart</Button>
    </div>
  );
};


export default ProductCard;