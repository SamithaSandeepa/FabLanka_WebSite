import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import PastEventTable from "../../../components/event.component/PastEventTable";

const AllEvents = ({ isAuthenticated }) => {
  const { setLoading } = useStateContext();
  const history = useHistory();

  useEffect(() => {
    console.log("news table");
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

  return (
    <>
      <div className="container mb-10">
        <PastEventTable />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AllEvents);
