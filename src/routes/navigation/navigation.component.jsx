import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div>
        <Link to="/">
          <h2>Logo</h2>
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
