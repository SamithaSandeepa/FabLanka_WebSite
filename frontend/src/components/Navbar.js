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
  const [open, setOpen] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <>
      <li className="nav-item text-sm ">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          to="/login"
          className={
            location.pathname === "/login"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Login
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/signup"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
    </>
  );
  const authLinks = () => (
    <>
      <li className="nav-item text-sm">
        <Link
          onClick={logout_user}
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/signup"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/firstpage"
        >
          FirstPage
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="container mx-auto block">
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="flex flex-wrap items-center justify-between bg-white px-2 md:px-10 py-2 md:py-0">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
              <span className="text-3xl text-indigo-600 mr-1 flex-shrink-0">
                <img
                  src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </span>
              <Link to="/">
                <a className="navbar-brand pl-2">FabLanka</a>
              </Link>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-4 top-1 cursor-pointer md:hidden"
            >
              <MDBIcon fas icon={open ? "close" : "bars"} />
            </div>

            <ul
              className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-490px]"
              } md:p-0 md:m-0 p-2 m-2
              `}
            >
              {isAuthenticated ? authLinks() : guestLinks()}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
