import axios from "axios";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const API_URL = "http://localhost:8000";

const CreateNew = ({ isAuthenticated }) => {
  console.log("isAuthenticated", isAuthenticated);
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  function addNews(e) {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const csrftoken = getCookie("csrftoken");
    axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

    const newNews = {
      title,
      summery,
      content,
      image,
      status,
    };
    const token = localStorage.getItem("access");
    console.log(token);
    axios
      .post(`${API_URL}/news/create/`, newNews, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("New News Added");
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <form onSubmit={addNews}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={summery}
        onChange={(e) => setSummery(e.target.value)}
      />
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add News</button>
    </form>
  );
};

function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(CreateNew);
