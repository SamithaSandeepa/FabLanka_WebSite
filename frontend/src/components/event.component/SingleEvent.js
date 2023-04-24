import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";

const SingleEvent = ({ id }) => {
  console.log(id);
  const [event, setEvent] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(`${API_URL}/event/${id}/`);
      console.log(response.data);
      setEvent(response.data);
    };
    getEvent();
  }, [id]);

  useEffect(() => {
    if (event.content_pastevent) {
      const contentState = convertFromRaw(JSON.parse(event.content_pastevent));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [event]);

  return (
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{event.title_pastevent}</h1>
      <img
        src={event.image_project_m}
        className="card-img mt-3 h-86 w-auto mx-auto block"
        alt="..."
      />
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
    </div>
  );
};

export default SingleEvent;
