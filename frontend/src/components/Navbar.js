import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { MDBIcon } from "mdb-react-ui-kit";

const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <>
      <Fragment>
        <li className="nav-item inline-block">
          <Link
            className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
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
      </Fragment>
    </>
  );
  const authLinks = () => (
    <Fragment>
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
    </Fragment>
  );

  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
                to="/"
              >
                Auth System
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                >
                  Home
                </Link>
                <ul className="flex justify-center space-x-4">
                  {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </button>
            </div>
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
      <nav
        className={`py-3 navbar navbar-expand-lg navbar-dark bg-[#06283D] sticky-sm-top`}
      >
        <div className="container-fluid">
          <img
            src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
            width={32}
            height={32}
            className=""
          />
          <Link href="#">
            <a className="navbar-brand pl-4">FabLanka</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <MDBIcon fas icon="bars" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
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
