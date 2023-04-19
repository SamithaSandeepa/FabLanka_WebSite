import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import EditNews from "../../../components/news.component/EditNews";
import { useParams } from "react-router-dom";

const NewsUpdate = ({ isAuthenticated }) => {
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

  const { id } = useParams();

  return (
    <>
      <div className="container">
        <EditNews id={id} />
      </div>
    </>
  );
  // }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(NewsUpdate);
