import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-checkout-item.style.scss";

const CartCheckoutItem = ({ Product }) => {
  const { decreaseItemQuantity, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const increaseQuantity = () => {
    addItemToCart(Product);
  };

  const decreaseQuantity = () => {
    decreaseItemQuantity(Product);
  };

  const removeItem = () => {
    removeItemFromCart(Product);
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
        <div className="value">
        {quantity}
        </div>
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
