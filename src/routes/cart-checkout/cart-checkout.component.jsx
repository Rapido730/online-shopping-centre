// import { useContext } from "react";
import "./cart-checkout.style.scss";

// need to edit
import CartCheckoutItem from "../../component/cart-checkout-item/cart-checkout-item.component";
import { useSelector } from "react-redux";

const CartCheckout = () => {
  const { cartItems, TotalCartPrice } = useSelector((state) => state.cart);

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
        <CartCheckoutItem key={cartItem.id} Product={cartItem} />
      ))}

      <span className="total">Total : &#8377;{TotalCartPrice}</span>
    </div>
  );
};

export default CartCheckout;
