import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import ImageSlider from "../components/homepage.component/ImageSlider";

const FirstPage = ({ isAuthenticated }) => {
  console.log("isAuthenticated", isAuthenticated);
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);

  useEffect(() => {
    console.log(history);
    if (typeof isAuthenticated === "undefined") {
      console.log("undefined");
      // Authentication status not yet determined, do nothing
    } else if (!isAuthenticated) {
      // User is not authenticated, redirect to login page
      history.push("/login");
    } else {
      // User is authenticated, do something that takes time
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [history, isAuthenticated]);

  // if (loading) {
  //   // Show loading indicator
  //   return <div>Loading...</div>;
  // } else if (!isAuthenticated) {
  //   // Authentication failed, should have been redirected to login page
  //   return null;
  // } else {
  // Show the content if the user is authenticated
  return (
    <>
      <div className="container flex flex-col">
        <div className="top-0 left-0 width=100% z-1">
          <ImageSlider />
        </div>
        <div className="justify-center items-center">
          <p>fdghdhdhdfghdfghdfghdghdfghdfghdfghdghdfghdfgh</p>
          <p>fdghdhdhdfghdfghdfghdghdfghdfghdfghdghdfghdfgh</p>
          <p>fdghdhdhdfghdfghdfghdghdfghdfghdfghdghdfghdfgh</p>
        </div>
      </div>
    </>
  );
  // }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(FirstPage);
