import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";
import ReactPlayer from "react-player";
import { Storage } from "aws-amplify";
import Amplify from "@aws-amplify/core";

const SingleNews = ({ id }) => {
  const [news, setNews] = useState({});
  const [image, setImage] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "ap-southeast-1:1bab1487-9e1b-494f-8758-ac6afed9cff4",
        region: "ap-southeast-1",
      },

      Storage: {
        AWSS3: {
          bucket: "new-bucket13",
          region: "ap-southeast-1",
        },
      },
    });
  }, []);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(`${API_URL}/news/${id}/`);
      setNews(response.data);
      const editorContentState = convertFromRaw(response.data.content);
      setEditorState(EditorState.createWithContent(editorContentState));
      const url = response.data.image;
      downloadImage(url);
    };
    getNews();
  }, [id]);

  const downloadImage = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName);
      console.log("get url", fileURL);
      setImage(fileURL); // Set the value in the state variable
    } catch (error) {
      console.log("Error retrieving file:", error);
      setImage(null); // Set null in case of an error
    }
  };

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
    return null; // Return null when videos is null or empty
  };

  return (
    <div className="container-sm text-lg mt-10 shadow-sm py-2 mb-4">
      <h1 className="text-center text-3xl font-semibold font-serif mt-5">
        {news.title}
      </h1>
      {/* <img
        src={image}
        className="card-img mt-3 h-48 w-auto mx-auto block"
        alt="..."
      /> */}
      <p className="my-5 text-lg mx-10">
        <p className="text-left text-xl font-semibold font-serif">Summary:</p>{" "}
        <p className="ml-10">{news.summary}</p>
      </p>
      <div className="row">
        <div className="col-md-12">
          <p className="text-left text-xl font-semibold font-serif mx-10">
            Content:
          </p>{" "}
          <Editor
            editorState={editorState}
            readOnly={true}
            toolbar={{
              options: [],
            }}
            toolbarHidden={true}
            stripPastedStyles={true}
            editorStyle={{
              minHeight: "300px",
              border: "none",
              paddingLeft: "80px", // Adjust the left padding
              paddingRight: "80px", // Adjust the right padding
              paddingTop: "10px", // Adjust the top padding
              paddingBottom: "10px",
              fontSize: "16px",
              lineHeight: "1.6",
              fontFamily: "Arial, sans-serif", // Adjust the font family as needed
            }}
          />
        </div>
      </div>
      <div className="row">
        {renderVideos > 0 && (
          <div
            className="col-md-12"
            style={{ paddingLeft: "80px", paddingRight: "80px" }}
          >
            {renderVideos()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleNews;
