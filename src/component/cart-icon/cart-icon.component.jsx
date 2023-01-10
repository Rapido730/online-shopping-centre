import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.style.scss";

// need to edit
import { useDispatch, useSelector } from "react-redux";
import { CartStateToggle } from "../../store/cart/cart.action";
import {
  selectCartOpenStatus,
  selectCartQuantity,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const IsCartOpen = useSelector(selectCartOpenStatus);

  const TotalCartQuantity = useSelector(selectCartQuantity);

  const dropDownOpen = () => {
    dispatch(CartStateToggle(true));
  };

  const dropDownClose = () => {
    dispatch(CartStateToggle(false));
  };

  return (
    <div
      className="Cart-icon-container"
    
      onMouseEnter={dropDownOpen}
      onMouseLeave={dropDownClose}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{TotalCartQuantity}</span>
    </div>
  );
};

export default CartIcon;
