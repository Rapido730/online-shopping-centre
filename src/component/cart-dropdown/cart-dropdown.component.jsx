
import "./cart-drop.style.scss"
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    console.log(cartItems)

    return (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem cartItem={item} />
          ))}
        </div>

        <Link className="nav-link" to="/cartcheckout">
            <Button>Go to checkout</Button>
        </Link>
        
      </div>
    );
};

export default CartDropdown;