import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { useLocation } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Navbar = ({ logout, isAuthenticated }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [redirect, setRedirect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <>
      <li
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Dashboard
      </li>
      <li className="nav-link">
        <Link
          className={
            location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
          to="/login"
        >
          Login
        </Link>
      </li>
      <li className="nav-item inline-block">
        <Link
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
    </>
  );
  const authLinks = () => (
    <>
      <li className="nav-item inline-block">
        <a
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
          onClick={logout_user}
        >
          Logout
        </a>
      </li>
      <li className="nav-item inline-block">
        <Link
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          to="/firstpage"
        >
          FirstPage
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className="bg-gray-100">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
              to="/"
            >
              Fab Lanka
            </Link>
          </div>
          <div className="">
            <img
              src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
              width={32}
              height={32}
              className=""
            />
            <Link href="#">
              <a className="navbar-brand pl-4">FabLanka</a>
            </Link>
          </div>
          <ul className="">{isAuthenticated ? authLinks() : guestLinks()}</ul>
          <div className="hidden md:block">
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <Link
                to="/"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              {isAuthenticated ? authLinks() : guestLinks()}
            </div>

            {redirect ? <Redirect to="/" /> : null}
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
