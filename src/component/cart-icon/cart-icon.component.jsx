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

  const toggle = () => {
    dispatch(CartStateToggle(!IsCartOpen));
  };

  return (
    <div className="Cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggle} />
      <span className="item-count">{TotalCartQuantity}</span>
    </div>
  );
};

export default CartIcon;
