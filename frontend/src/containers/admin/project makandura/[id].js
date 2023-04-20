import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import axios from "axios";
import dynamic from "next/dynamic";
import { API_URL } from "../../../config/index";
// import EditNews from "../../../components/news.component/EditNews";

const EditProjectMakandura = dynamic(
  () => import("../../../components/makandura.component/EditProjectMakandura"),
  {
    ssr: false,
  }
);

const editprojectmakandura = (props) => {
  console.log(props);
  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <div>
      <Layout title="FabLanka | ProjectMakandura" content="Dashboard page">
        <div className="container mb-10">
          {/* <EditProjectMakandura /> */}
          <EditProjectMakandura
            id={props.project.id}
            title={props.project.title__project_m}
            summery={props.project.summery_project_m}
            content={props.project.content_project_m}
            image={props.project.image_project_m}
          />
        </div>
      </Layout>
    </div>
  );
};

//return newsID from params
editprojectmakandura.getInitialProps = async (context) => {
  const projectID = context.query.id;
  const response = await axios.get(
    `${API_URL}/api/projectmakandura/${projectID}/`
  );
  console.log(response);
  return { project: response.data };
};

export default editprojectmakandura;
