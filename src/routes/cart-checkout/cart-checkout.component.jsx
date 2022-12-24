import { useContext } from "react";
import "./cart-checkout.style.scss"

import { CartContext } from "../../contexts/cart.context";
import CartCheckoutItem from "../../component/cart-checkout-item/cart-checkout-item.component";

const CartCheckout = () => {
  const { cartItems,TotalCartPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CartCheckoutItem Product={cartItem} />
      ))}

      <span className="total">Total : &#8377;{TotalCartPrice}</span>
    </div>
  );
};

export default CartCheckout;
