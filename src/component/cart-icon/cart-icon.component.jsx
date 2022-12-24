import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.style.scss"

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
      const { IsCartOpen, SetCartOpen, TotalCartQuantity } =
        useContext(CartContext);
        const toggle = () => {SetCartOpen(!IsCartOpen)};

    return (
      <div className="Cart-icon-container">
        <ShoppingIcon className="shopping-icon" onClick={toggle} />
        <span className="item-count">{TotalCartQuantity}</span>
      </div>
    );
};


export default CartIcon;