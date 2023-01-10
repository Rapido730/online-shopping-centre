import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as AppLogo } from "../../assests/logo.svg";
import { useSelector } from "react-redux";


import { SelectCurrentUser } from "../../store/user/user.selector";
import { SignOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { selectCartOpenStatus } from "../../store/cart/cart.selector";
// need to edit

const Navigation = () => {
  const CurrentUser = useSelector(SelectCurrentUser);
  // console.log("navigation")
  const IsCartOpen = useSelector(selectCartOpenStatus);

  // console.log(CurrentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <AppLogo className="logo" />
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {CurrentUser ? (
            <Link className="nav-link" to="/signin" onClick={SignOutUser}>
              SignOut
            </Link>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>
        {IsCartOpen && <CartDropdown />}
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
