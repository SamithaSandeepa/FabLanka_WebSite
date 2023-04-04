import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const { loading, setLoading } = useStateContext();

  useEffect(() => {
    setLoading(true);
    // Do something that takes time...
    setLoading(false);
  }, []);
  return (
    <div className="container">
      <div class="jumbotron mt-5">
        <p>Loading: {loading ? "true" : "false"}</p>
        {/* <Link class="btn btn-primary btn-lg" to="/login" role="button">
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
