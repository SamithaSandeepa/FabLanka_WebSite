import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";
import ReactPlayer from "react-player";


const SingleNews = ({ id }) => {
  const [news, setNews] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(`${API_URL}/news/${id}/`);
      setNews(response.data);
    };
    getNews();
  }, [id]);

  useEffect(() => {
    if (news.content) {
      const contentState = convertFromRaw(JSON.parse(news.content));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [news]);

  const renderVideos = () => {
    const videos = news.videos;
    if (videos && videos.length > 0) {
      return (
        <div className="row">
          {videos.map((video, index) => (
            <div key={index} className="col-6">
              <div className="player-wrapper">
                <ReactPlayer
                  url={video}
                  className="react-player pl-10 pt-10"
                  width="100%"
                  height="400px"
                />
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };


  return (
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{news.title}</h1>
      <img
        src={news.image}
        className="card-img mt-3 h-86 w-auto mx-auto block"
        alt="..."
      />
      <p className="my-5 text-lg">{news.summery}</p>
      <div className="row">
        <div className="col-md-12">
          <Editor
            editorState={editorState}
            readOnly={true}
            toolbar={{
              options: [],
            }}
            toolbarHidden={true}
            stripPastedStyles={true}
            editorStyle={{ border: "1px solid #ddd", minHeight: "300px" }}
          />
        </div>
      </div>
      <div className="row">{renderVideos()}</div>
    </div>
  );
};

export default SingleNews;
