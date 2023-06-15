import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import "./navigation.styles.css";
const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/sign-in">Sign In</Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
