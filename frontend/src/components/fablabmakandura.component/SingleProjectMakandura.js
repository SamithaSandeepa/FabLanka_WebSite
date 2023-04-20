import React, { useEffect, useState } from "react";
import axios from "axios";
import { convertFromRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { API_URL } from "../../config/index";

const SingleProjectMakandura = ({ id }) => {
  console.log(id)
  const [Project, setProject] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  useEffect(() => {
    const getProject = async () => {
      const response = await axios.get(`${API_URL}/projectmakandura/${id}/`);
      setProject(response.data);
    };
    getProject();
  }, [id]);
 
  useEffect(() => {
    if (Project.content) {
      const contentState = convertFromRaw(JSON.parse(Project.content));
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [Project]);


  return (
    <div className="container mb-5">
      <h1 className="text-center text-3xl">{Project.title_project_m}</h1>
      <p className="my-5 text-lg">{Project.summery_project_m}</p>
    </div>
  );
};

export default SingleProjectMakandura;
