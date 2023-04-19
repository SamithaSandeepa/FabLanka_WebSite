import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

const CreatNews = ({ isAuthenticated }) => {
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [summery, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") {
      console.log("undefined");
      // Authentication status not yet determined, do nothing
    } else if (!isAuthenticated) {
      // User is not authenticated, redirect to login page
      history.push("/login");
    } else {
      // User is authenticated, do something that takes time
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [history, isAuthenticated]);

  const addNews = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    // convert the raw state back to a useable ContentState object
    // const content = convertFromRaw(JSON.parse(rawDraftContentState));
    console.log(content);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const newNews = {
        title,
        summery,
        content,
        image,
        status,
      };

      axios
        .post(`${API_URL}/news/create/`, newNews, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          alert("New News Added");
          setTitle("");
          setSummery("");
          setEditorState("");
          setImage("");
          setStatus(true);
          setValidated(false);
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
          <h2 className="h3 mb-3 font-weight-normal text-center">Add News</h2>
          <form noValidate validated={validated} onSubmit={addNews}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label" style={{ marginBottom: "5px" }}>
                {" "}
                News Title{" "}
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
              {/* <Form.Control.Feedback type="invalid">
                  Please provide a Item Name
                </Form.Control.Feedback> */}
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
              {/* <Form.Control.Feedback type="invalid">
                  Please provide a Price
                </Form.Control.Feedback> */}
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
                {/* <Form.Control.Feedback type="invalid">
                    Please provide a Image Url
                  </Form.Control.Feedback> */}
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
            </div>
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
                  //   image: {
                  //     uploadCallback: uploadImageCallBack,
                  //     alt: { present: true, mandatory: true },
                  //   },
                }}
              />
              {/* show convert draft to html markup */}
            </div>

            <button
              type="submit"
              className="btn btn-blue btn-block"
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
  // }
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

export default connect(mapStateToProps)(CreatNews);
