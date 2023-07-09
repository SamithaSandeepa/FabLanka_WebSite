import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";
import ReactPlayer from "react-player";
import { Storage } from "aws-amplify";
import Amplify from "@aws-amplify/core";

const SingleProjectMakandura = ({ id }) => {
  console.log("test");
  const [Project, setProject] = useState({});
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
    console.log("test");

    const getProject = async () => {
      const response = await axios.get(`${API_URL}/projectmakandura/${id}/`);
      setProject(response.data);
      const url = response.data.image_project_m;
      downloadFile(url);
    };
    getProject();

    const downloadFile = async (fileName) => {
      try {
        const fileURL = await Storage.get(fileName);
        console.log("get url", fileURL);
        setImage(fileURL); // Set the value in the state variable
      } catch (error) {
        console.log("Error retrieving file:", error);
        setImage(null); // Set null in case of an error
      }
    };
  }, [id]);

  // useEffect(() => {
  //   if (Project.content_project_m) {
  //     const contentState = convertFromRaw(JSON.parse(Project.content_project_m));
  //     setEditorState(EditorState.createWithContent(contentState));
  //   }
  // }, [Project]);

  useEffect(() => {
    console.log("hello");
    if (Project.content_project_m) {
      let contentState;
      try {
        contentState = JSON.parse(Project.content_project_m);
        if (!contentState.blocks || !contentState.entityMap) {
          throw new Error("Invalid content structure");
        }
      } catch (error) {
        console.error("Error parsing news content:", error);
        // Handle the case when news.content has an invalid structure
        // For example, you can set contentState to an empty object or handle it in any other appropriate way
        contentState = {
          blocks: [],
          entityMap: {},
        };
      }
      const editorContentState = convertFromRaw(contentState);
      setEditorState(EditorState.createWithContent(editorContentState));
    }
  }, [Project]);

  const downloadFile = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName);
      console.log("get image", fileName);
      return fileURL;
    } catch (error) {
      console.log("Error retrieving file:", error);
      return null;
    }
  };

  const renderVideos = () => {
    const videos = Project.videos;
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
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{Project.title_project_m}</h1>
      <img
        src={image}
        className="card-img mt-3 h-48 w-auto mx-auto block"
        alt="..."
      />
      <p className="my-5 text-lg">{Project.summery_project_m}</p>
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

export default SingleProjectMakandura;
