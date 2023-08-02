import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactPlayer from "react-player";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";

const EditProject = ({ isAuthenticated, id }) => {
  console.log(isAuthenticated, id);
  const ref = useRef(null);
  const [validated, setValidated] = useState(false);
  const [title_project_m, setTitle] = useState("");
  const [summery_project_m, setSummery] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image_project_m, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [videos, setVideos] = useState([{ url: "" }]);
  const [progress, setProgress] = useState();
  const [updatedImage, setUpdatedImage] = useState(null);

  console.log(localStorage.getItem("access"));

  useEffect(() => {
    axios
      .get(`${API_URL}/projectmakandura/${id}/`)
      .then((response) => {
        console.log("res", response);
        console.log("image", response.data.image_project_m);
        downloadFile(response.data.image_project_m);

        // set state with news data
        setTitle(response.data.title_project_m);
        setSummery(response.data.summery_project_m);
        // setEditorState(response.data.content);
        const contentState = convertFromRaw(
          JSON.parse(response.data.content_project_m)
        );
        setEditorState(EditorState.createWithContent(contentState));
        setStatus(response.data.status);

        setVideos(response.data.videos.map((video) => ({ url: video })));
        //...
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const downloadFile = async (fileName) => {
    try {
      console.log("heee");
      const fileURL = await Storage.get(fileName);
      console.log("get image", fileName);
      setImage(fileURL);
    } catch (error) {
      console.log("Error retrieving file:", error);
      return null;
    }
  };

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

  const handleFile = () => {
    const filename = ref.current.files[0].name;
    Storage.put(filename, ref.current.files[0], {
      progressCallback: (progress) => {
        setProgress(Math.round((progress.loaded / progress.total) * 100) + "%");
        setTimeout(() => {
          setProgress();
        }, 1000);
      },
    })
      .then((uploadResult) => {
        const filename = ref.current.files[0].name;
        console.log("img", filename);
        Storage.get(filename)
          .then((imageUrl) => {
            console.log(imageUrl);
            setUpdatedImage(imageUrl);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    renderVideos();
  }, [videos]);

  const handleRemoveImage = () => {
    setUpdatedImage(null);
  };

  // updateupdateNews news data to the database
  const updateProject = (e) => {
    e.preventDefault();

    const content_project_m = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    const project = {
      videos: videos.map((video) => video.url),
      title: title_project_m,
      summery: summery_project_m,
      content: content_project_m,
      image: updatedImage ? updatedImage : image_project_m,
      status: status,
    };

    const csrftoken = getCookie("csrftoken");
    axios.defaults.headers.common["X-CSRFToken"] = csrftoken;
    console.log(project);
    axios
      .put(`${API_URL}/projectmakandura/${id}/update/`, project, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/show-all-projects";
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    setValidated(true);
  };

  const renderVideos = () => {
    if (videos && videos.length > 0) {
      return (
        <div className="d-flex justify-content-center">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-6">
                <div className="player-wrapper">
                  <ReactPlayer
                    url={video.url}
                    className="react-player pl-10 pt-10"
                    width="100%"
                    height="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Edit Project
            </h2>
            <form noValidate validated={validated} onSubmit={updateProject}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={title_project_m}
                  className="form-control"
                  placeholder="Enter News Project"
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
                  value={summery_project_m}
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
                    Image
                  </label>
                  <input
                    type="file"
                    ref={ref}
                    required
                    placeholder="Enter Image Url"
                    id="image"
                    onChange={handleFile}
                  />
                  {progress}
                  {updatedImage ? (
                    <div>
                      <img
                        src={updatedImage}
                        width="200"
                        height="200"
                        alt="Selected"
                        className="mt-2"
                      />
                      <button
                        className="ml-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded"
                        onClick={() => {
                          setUpdatedImage(null);
                        }}
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    image_project_m && (
                      <div>
                        <img
                          src={image_project_m}
                          width="200"
                          height="200"
                          alt="Selected"
                          className="mt-2"
                        />
                        <button
                          className="ml-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded"
                          onClick={handleRemoveImage}
                        >
                          Remove Image
                        </button>
                      </div>
                    )
                  )}
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

              {videos.map((video, index) => (
                <div className="mb-4" key={index}>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor={`video-${index}`}
                  >
                    Video {index + 1}
                  </label>
                  <input
                    type="text"
                    required
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Video Url"
                    id={`video-${index}`}
                    value={video.url}
                    onChange={(e) => {
                      const newVideos = [...videos];
                      newVideos[index].url = e.target.value;
                      setVideos(newVideos);
                    }}
                  />
                  {index === videos.length - 1 && (
                    <button
                      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        setVideos([...videos, { url: "" }]);
                      }}
                    >
                      Add another video
                    </button>
                  )}
                  {index !== 0 && (
                    <button
                      className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        const newVideos = [...videos];
                        newVideos.splice(index, 1);
                        setVideos(newVideos);
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <div className="row">{renderVideos()}</div>

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
                className="btn btn-success float-right bg-green-500 text-white"
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

export default connect(mapStateToProps)(EditProject);
