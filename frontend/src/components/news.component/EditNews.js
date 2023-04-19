import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/index";
import { connect } from "react-redux";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditNews = ({ isAuthenticated, id }) => {
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);
  const [validated, setValidated] = useState(false);

  const [news, setNews] = useState({});
  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/news/${id}/`)
      .then((response) => {
        setNews(response.data);
        setTitle(response.data.title);
        setSummery(response.data.summery);
        if (response.data.content) {
          const contentState = convertFromRaw(
            JSON.parse(response.data.content)
          );
          setEditorState(EditorState.createWithContent(contentState));
        }
        setImage(response.data.image);
        setStatus(response.data.status);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const updateNews = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const updatedNews = {
        title,
        summery,
        content,
        image,
        status,
      };

      axios
        .put(`${API_URL}/news/${id}/`, updatedNews, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          alert("News Updated");
          history.push(`/news/${id}`);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="col-md-8 mt-4 mx-auto">
          <h2 className="h3 mb-3 font-weight-normal text-center">Edit News</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form noValidate validated={validated} onSubmit={updateNews}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter news title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please provide a title.</div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Summary
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter news summary"
                  value={summery}
                  onChange={(e) => setSummery(e.target.value)}
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Please provide a summary.
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Content
                </label>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  required
                />
                <div className="invalid-feedback">Please provide content.</div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please provide an image URL.
                </div>
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="status"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="status">
                  Published
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          )}
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
