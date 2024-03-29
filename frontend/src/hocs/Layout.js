import React, { useEffect, useState } from "react";
import Navbar from "../components/main.component/Navbar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import Footer from "../components/main.component/Footer";
import SecondNavbar from "../components/main.component/SecondNavbar";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    console.log(checkAuthenticated(), load_user);
    checkAuthenticated();
    load_user();
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className="flex flex-col min-h-screen p-0 m-0">
        {/* <div className={`sticky top-0 z-50 ${visible ? "" : "hidden"}`}> */}
        {/* Main Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        {/* </div> */}
        <div className="flex-grow mt-14 px-0">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
