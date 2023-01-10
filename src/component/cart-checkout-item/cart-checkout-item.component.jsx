import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import "./cart-checkout-item.style.scss";

const CartCheckoutItem = ({ Product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const increaseQuantity = () => {
    dispatch(addItemToCart(Product, cartItems));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(Product, cartItems));
  };

  const removeItem = () => {
    dispatch(removeItemFromCart(Product, cartItems));
  };

  const { name, imageUrl, price, quantity } = Product;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="arrow"></span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseQuantity}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={increaseQuantity}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CartCheckoutItem;
