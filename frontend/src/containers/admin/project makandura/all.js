import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Layout from "../../../hocs/Layout";

const OurProjectTable = dynamic(
  () => import("../../../components/makandura.component/OurProjectTable"),
  {
    ssr: false,
  }
);

const AllNews = () => {
  const router = useRouter();
  // console.log(router.pathname);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated);

  //if refresh page, redirect to router.pathname

  return (
    <>
      <Layout title="FabLanka | News" content="Dashboard page">
        <div className="container mb-10">
          <OurProjectTable />
        </div>
      </Layout>
    </>
  );
};

export default AllNews;
