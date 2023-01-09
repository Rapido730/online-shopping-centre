import "./cart-drop.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { Link } from "react-router-dom";

// need to edit
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const  cartItems  = useSelector((state)=>state.cart.cartItems);
  // //console.log(cartItems)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Link className="nav-link" to="/cartcheckout">
        <Button>Go to checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
