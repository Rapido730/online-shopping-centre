import "./cart-drop.style.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartStateToggle } from "../../store/cart/cart.action";
import { Link } from "react-router-dom";

// need to edit
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // //console.log(cartItems)

  const dropDownOpen = () => {
    dispatch(CartStateToggle(true));
  };

  const dropDownClose = () => {
    dispatch(CartStateToggle(false));
  };

  return (
    <div
      className="cart-dropdown-container"
      onMouseEnter={dropDownOpen}
      onMouseLeave={dropDownClose}
    >
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
