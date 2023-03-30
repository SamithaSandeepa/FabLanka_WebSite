import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const FirstPage = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  if (isAuthenticated == false) {
    // Redirect the user to the login page if they're not authenticated
    return <Redirect to="/login" />;
  }

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
