import "./product-card.style.scss";

import Button from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";

// need to edit
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  // //console.log(cartItems)

  const ItemHandler = (event) => {
    // //console.log(event)
    dispatch(addItemToCart(product, cartItems));
    // //console.log("clicked")
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button_type="inverted" onClick={ItemHandler}>
        {" "}
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
