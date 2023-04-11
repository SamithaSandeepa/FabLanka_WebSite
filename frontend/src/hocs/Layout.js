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
    <div>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
