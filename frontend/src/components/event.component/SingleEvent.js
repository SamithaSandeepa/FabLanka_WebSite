import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";
import ReactPlayer from "react-player";

const SingleEvent = ({ id }) => {
  const [event, setEvent] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(`${API_URL}/event/${id}/`);
      setEvent(response.data);
    };
    getEvent();
  }, [id]);

  // useEffect(() => {
  //   if (event.content_pastevent) {
  //     const contentState = convertFromRaw(JSON.parse(event.content_pastevent));
  //     setEditorState(EditorState.createWithContent(contentState));
  //   }
  // }, [event]);

  useEffect(() => {
    if (event.content_pastevent) {
      let contentState;
      try {
        contentState = JSON.parse(event.content_pastevent);
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
  }, [event]);

  const renderVideos = () => {
    const videos = event.videos;
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
    <div className="container-sm text-lg mt-10 shadow-sm py-2 mb-4">
      <h1 className="text-center text-3xl font-semibold font-serif mt-5">
        {event.title_pastevent}
      </h1>
      {/* <img
        src={event.image_project_m}
        className="card-img mt-3 h-48 w-auto mx-auto block"
        alt="..."
      /> */}
      <p className="my-5 text-lg">{event.summery_pastevent}</p>
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

export default SingleEvent;
