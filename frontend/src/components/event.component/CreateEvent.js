import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreateEvent = ({ isAuthenticated }) => {
  const [validated, setValidated] = useState(false);
  const { setLoading } = useStateContext();
  const history = useHistory();
  const [title_pastevent, setTitle] = useState("");
  const [summery_pastevent, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image_project_m, setImage] = useState("");
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

  function addEvents(e) {
    // the raw state, stringified
    const content_pastevent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    console.log(content_pastevent);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const newEvents = {
        title_pastevent,
        summery_pastevent,
        content_pastevent,
        image_project_m,
        status,
      };
      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
      axios
        .post(`${API_URL}/event/create/`, newEvents, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          alert("New Event Added");
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
  }

  // const router = useRouter();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);

  // if (typeof window !== "undefined" && !loading && !isAuthenticated)
  //   router.push("/login");

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Add Event
            </h2>
            <form noValidate validated={validated} onSubmit={addEvents}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Event Title{" "}
                </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={title_pastevent}
                  className="form-control"
                  placeholder="Enter Event Title"
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
                  placeholder="Summarize your Event"
                  id="summery"
                  value={summery_pastevent}
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
                    value={image_project_m}
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
                  Add Event Content{" "}
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

export default connect(mapStateToProps)(CreateEvent);
