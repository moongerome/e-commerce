import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import "./navigation.styles.css";
const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-container">
          <div className="nav-links-container">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
