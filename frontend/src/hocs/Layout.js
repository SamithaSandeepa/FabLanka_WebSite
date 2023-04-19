import React, { useEffect } from "react";
import Navbar from "../components/main.component/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import Footer from "../components/main.component/Footer";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    console.log(checkAuthenticated(), load_user);
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-0 m-0">
      <div className="sticky-sm-top">
        <Navbar />
      </div>
      <div className="flex-grow pt-16 px-0 mx-0" style={{ marginTop: "-10px" }}>
        {children}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
