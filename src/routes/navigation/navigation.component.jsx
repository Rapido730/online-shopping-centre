import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as AppLogo } from "../../assests/logo.svg";

const Navigation = () => {
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
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
