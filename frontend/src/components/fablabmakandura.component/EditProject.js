import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useStateContext } from "../../context/ContextProvider";
import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactPlayer from "react-player";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";

const EditProject = ({ isAuthenticated, id }) => {
  const ref = useRef(null);
  const [validated, setValidated] = useState(false);
  const [title_project_m, setTitle] = useState("");
  const [summery_project_m, setSummery] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image_project_m, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [videos, setVideos] = useState([{ url: "" }]);
  const [dlimage, setDlimage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState();
  const [imageName, setImageName] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { setLoading } = useStateContext();

  useEffect(() => {
    axios
      .get(`${API_URL}/projectmakandura/${id}/`)
      .then((response) => {
        console.log(response.data, "response.data");
        downloadFile(response.data.image_project_m);
        setImageName(response.data.image_project_m);
        setDlimage(response.data.image_project_m);
        setImage(response.data.image_project_m);
        setTitle(response.data.title_project_m);
        setSummery(response.data.summery_project_m);
        const editorContentState = convertFromRaw(
          response.data.content_project_m
        );
        setEditorState(EditorState.createWithContent(editorContentState));
        setStatus(response.data.status);
        setVideos(response.data.videos.map((video) => ({ url: video })));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const downloadFile = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName);
      setPreview(fileURL);
      // setImage(fileURL);
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

  // Function to handle changes in video URLs

  const handleVideoChange = (index, value) => {
    const newVideos = [...videos];
    newVideos[index] = { url: value };
    setVideos(newVideos);
  };

  const handleAddVideo = () => {
    setVideos([...videos, { url: "" }]);
  };
  const handleRemoveVideo = (index) => {
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const handleFile = async () => {
    handleDelete();
    const file = ref.current.files[0];
    const imageName = generateUniqueName(file.name);

    setIsUploading(true);
    try {
      await Storage.put(imageName, file, {
        progressCallback: (progressEvent) => {
          const progressPercentage = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setProgress(progressPercentage);
        },
      });

      // Get the public URL of the uploaded image
      const imageUrl = await Storage.get(imageName);
      setPreview(imageUrl);
      setDlimage(imageName);
      setImage(imageName);
      setIsUploading(false);
    } catch (error) {
      console.log("Error uploading file:", error);
      setIsUploading(false);
    }
  };
  const generateUniqueName = (fileName) => {
    const [name, extension] = fileName.split(".");
    const uniqueString = Date.now().toString(36); // Using timestamp as a unique string
    const uniqueName = `${name}_${uniqueString}.${extension}`;
    return uniqueName;
  };

  useEffect(() => {
    renderVideos();
  }, [videos]);

  const handleDelete = () => {
    Storage.remove(dlimage)
      .then((resp) => {
        console.log("dlt", ref.current.files[0].name);
        setImage(null);
        console.log(ref.current);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveImage = () => {
    handleDelete(); // Delete the image from S3 first
    setImage(null);
  };

  // updateupdateNews news data to the database
  const updateProject = (e) => {
    const content_project_m = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    const form = e.currentTarget;

    // Function to extract URLs from the videos array
    const extractUrls = (videoArray) => videoArray.map((video) => video.url);

    // Call the function to get the URLs
    const videoUrlsArray = extractUrls(videos);

    console.log(videoUrlsArray, "videoUrlsArray");

    if (form.checkValidity() === true) {
      e.preventDefault();
      console.log("videos");

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const updateProject = {
        title_project_m,
        summery_project_m,
        content_project_m: JSON.parse(content_project_m),
        image_project_m,
        status,
        videos: videos.map((video) => video.url), // Extract video URLs
      };
      setLoading(false);

      axios
        .patch(`${API_URL}/projectmakandura/${id}/update/`, updateProject, {
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
    }
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
                  className="form-control text-black"
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
                  Summary{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control text-black"
                  placeholder="Summarize your news"
                  id="summary"
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
                  {isUploading && (
                    <div className="fixed bottom-0 inset-0 flex items-center justify-center z-50">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-md">
                        Image uploading {progress}%
                      </div>
                    </div>
                  )}
                  {image_project_m && (
                    <div>
                      <img
                        src={preview}
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
                    onChange={(e) => handleVideoChange(index, e.target.value)}
                  />
                  {index === videos.length - 1 && (
                    <button
                      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleAddVideo}
                    >
                      Add another video
                    </button>
                  )}
                  {index !== 0 && (
                    <button
                      className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleRemoveVideo(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <div className="row">{renderVideos()}</div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="eventContent"
                >
                  Add News Content
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
