import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditNews = ({ isAuthenticated, id }) => {
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/news/${id}/`)
      .then((response) => {
        console.log(response);
        // set state with news data
        setTitle(response.data.title);
        setSummery(response.data.summery);
        // setEditorState(response.data.content);
        const contentState = convertFromRaw(JSON.parse(response.data.content));
        setEditorState(EditorState.createWithContent(contentState));
        setImage(response.data.image);
        setStatus(response.data.status);
        //...
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // updateupdateNews news data to the database
  const updateNews = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const news = {
        title: title,
        summery: summery,
        content: content,
        image: image,
        status: status,
      };
      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
      axios
        .put(`${API_URL}/news/${id}/update/`, news, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          window.location.href = "/show-all-news";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValidated(true);
  };

  return (
    <>
      <div className="container">
        <div className="col-md-8 mt-4 mx-auto">
          <h2 className="h3 mb-3 font-weight-normal text-center">Edit News</h2>
          <form noValidate validated={validated} onSubmit={updateNews}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                News Title
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title}
                className="form-control"
                placeholder="Enter News Title"
                id="newsTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                {" "}
                Summery{" "}
              </label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Summarize your news"
                id="summery"
                value={summery}
                onChange={(e) => {
                  setSummery(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <div
                className="form-group col-md-8"
                style={{ marginBottom: "15px" }}
              >
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Image{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter Image Url"
                  id="image"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div
                className="form-group col-md-4 text-center m-auto"
                style={{ marginBottom: "15px" }}
              >
                <select
                  className=" btn btn-secondary btn-sm dropdown-toggle rounded-3 bg-color-white"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option disabled hidden>
                    Select your option
                  </option>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                {" "}
                Add News Content{" "}
              </label>
              <div className="editor">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-success float-right"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          </form>
        </div>
      </div>
    </>
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

export default connect(mapStateToProps)(EditNews);
