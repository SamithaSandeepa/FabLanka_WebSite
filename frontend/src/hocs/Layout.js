import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import Footer from "../components/Footer";
import Nav1 from "../components/nav1";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    console.log(checkAuthenticated(), load_user);
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow pt-16">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
