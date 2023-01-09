import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.style.scss";

// need to edit
import { useDispatch, useSelector } from "react-redux";
import { CartStateToggle } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const {IsCartOpen,TotalCartQuantity} = useSelector((state) => state.cart);

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
