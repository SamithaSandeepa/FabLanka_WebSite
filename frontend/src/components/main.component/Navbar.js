import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { useLocation } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

const Navbar = ({ logout, isAuthenticated }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [redirect, setRedirect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNewsDropdown, setShowNewsDropdown] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);

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
            location.pathname === "/industry"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/industry"
        >
          industry 4.0 technologies
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/education"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/education"
        >
          Education
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/about"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/about"
        >
          About Us
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/fablabmakandura"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/fablabmakandura"
        >
          Fablab Makandura
        </Link>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/contactus"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/contactus"
        >
          Contact Us
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
        <button
          className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          onClick={logout_user}
        >
          Logout
        </button>
      </li>
      <li className="nav-item text-sm">
        <Link
          className={
            location.pathname === "/firstpage"
              ? "bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              : "text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-sm font-medium"
          }
          to="/firstpage"
        >
          FirstPage
        </Link>
      </li>
      <div className="relative">
        <button
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
          onMouseEnter={() => setShowNewsDropdown(true)}
          onMouseLeave={() => setShowNewsDropdown(false)}
        >
          News
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (showNewsDropdown ? "block" : "hidden")
          }
          onMouseEnter={() => setShowNewsDropdown(true)}
          onMouseLeave={() => setShowNewsDropdown(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === "/create-news"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/create-news"
            >
              Create News
            </Link>
            <Link
              className={
                location.pathname === "/show-all-news"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/show-all-news"
            >
              Show All News
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out"
          onMouseEnter={() => setShowProjectDropdown(true)}
          onMouseLeave={() => setShowProjectDropdown(false)}
        >
          Project Makandura
          <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            "absolute right-0 w-48 rounded-md shadow-lg " +
            (showProjectDropdown ? "block" : "hidden")
          }
          onMouseEnter={() => setShowProjectDropdown(true)}
          onMouseLeave={() => setShowProjectDropdown(false)}
        >
          <div className="bg-white rounded-md shadow-xs">
            <Link
              className={
                location.pathname === "/create-project"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-blue-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/create-project"
            >
              Create Project
            </Link>
            <Link
              className={
                location.pathname === "/show-all-project"
                  ? "block px-4 py-2 text-sm text-gray-700 bg-gray-100 text-gray-900"
                  : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }
              to="/show-all-project"
            >
              Show All News
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container mx-auto block">
        <div className="w-full fixed top-0 left-0">
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
              className="text-3xl absolute right-4 item-center cursor-pointer md:hidden"
            >
              <MDBIcon fas icon={open ? "close" : "bars"} />
            </div>

            <ul
              className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20" : "top-[-490px]"
              } md:p-0 md:m-0
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
