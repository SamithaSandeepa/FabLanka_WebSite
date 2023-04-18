import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleNews from "../../../components/news.component/SingleNews";
import { API_URL } from "../../../config/index";
import { useParams } from "react-router-dom";


const News = () => {
  const { id } = useParams();

  const [news, setNews] = useState({});
  console.log(setNews, "news");

  // fetching news data using useEffect and storing in state
  // useEffect(() => {
  //   const getNews = async () => {
  //     console.log(id, "id");
  //     console.log(`${API_URL}/news/${id}/`);
  //     const response = await axios.get(`${API_URL}/news/${id}/`);
  //     console.log(response.data);
  //     setNews(response.data);
  //   };
  //   getNews();
  // }, [id]);

  return (
    <div>
      <SingleNews id={id} />
    </div>
  );
};

export default News;
