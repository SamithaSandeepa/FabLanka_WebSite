import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Layout from "../../../hocs/Layout";
import dynamic from "next/dynamic";
import { API_URL } from "../../../config/index";
// import EditNews from "../../../components/news.component/EditNews";

const EditNews = dynamic(
  () => import("../../../components/news.component/EditNews"),
  {
    ssr: false,
  }
);

const editnews = (props) => {
  // console.log(props.news);
  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <div>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container mb-10">
          <EditNews
            id={props.news.id}
            title={props.news.title}
            summery={props.news.summery}
            content={props.news.content}
            image={props.news.image}
            status={props.news.status}
          />
        </div>
      </Layout>
    </div>
  );
};

//return newsID from params
editnews.getInitialProps = async (context) => {
  const newsID = context.query.id;
  const response = await axios.get(`${API_URL}/api/newspage/${newsID}/`);
  return { news: response.data };
};

export default editnews;
