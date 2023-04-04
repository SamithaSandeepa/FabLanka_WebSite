import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const FirstPage = ({ isAuthenticated }) => {
  console.log("isAuthenticated", isAuthenticated);
  const { setLoading } = useStateContext();
  const history = useHistory();
  
  useEffect(() => {
    console.log(history);
    if (!isAuthenticated) {
      // Redirect the user to the login page if they're not authenticated
      history.push("/login");
    } else {
      setLoading(true);
      // Do something that takes time...
      setLoading(false);
    }
  }, [history, isAuthenticated, setLoading]);

  // Show the content if the user is authenticated
  return (
    <div>
      <h1>Welcome to the First Page!</h1>
      <p>Only authenticated users can see this content.</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(FirstPage);
