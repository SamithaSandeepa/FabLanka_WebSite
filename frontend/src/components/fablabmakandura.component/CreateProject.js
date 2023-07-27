import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import ReactPlayer from "react-player";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";

const CreatNews = ({ isAuthenticated }) => {
  // image uploading
  const ref = useRef(null);
  const [image, setImage] = useState(null);
  console.log(image);
  const [progress, setProgress] = useState();
  // const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const { setLoading } = useStateContext();
  const history = useHistory();
  const [loading, setLoadingState] = useState(true);
  const [validated, setValidated] = useState(false);

  const [title_project_m, setTitle] = useState("");
  const [summery_project_m, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [image_project_m, setUploadedImageUrl] = useState(null);
  const [status, setStatus] = useState(true);
  const [videos, setVideos] = useState([{ url: "" }]);

  console.log(videos);

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

  useEffect(() => {
    renderVideos();
  }, [videos]);

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

  const handleFile = () => {
    const filename = ref.current.files[0].name;
    console.log("ref", ref.current.files[0].name);
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
            setUploadedImageUrl(filename);
            setImage(imageUrl); // Set the image URL to the state variable
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProject = (e) => {
    console.log("add project");
    // the raw state, stringified

    console.log(videos);
    const content_project_m = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    console.log(image_project_m);
    const form = e.currentTarget;

    // Function to extract URLs from the videos array
    const extractUrls = (videoArray) => videoArray.map((video) => video.url);

    // Call the function to get the URLs
    const videoUrls = extractUrls(videos);

    // Convert the array of URLs to a JSON string
    const videosJsonString = JSON.stringify(videoUrls);

    if (form.checkValidity() === false) {
      e.preventDefault();

      setValidated(true);
      e.stopPropagation();
    } else {
      e.preventDefault();

      const csrftoken = getCookie("csrftoken");
      axios.defaults.headers.common["X-CSRFToken"] = csrftoken;

      const newProject = new FormData();
      newProject.append("title_project_m", title_project_m);
      newProject.append("summery_project_m", summery_project_m);
      newProject.append("content_project_m", content_project_m);
      newProject.append("image_project_m", image_project_m);
      newProject.append("status", status);
      newProject.append("videos", videosJsonString);
      setLoading(true);

      videos.forEach((video, index) => {
        // newProject.append(`videos${index}`, video.url);
        console.log(`videos${index}`, video.url);
      });

      axios
        .post(`${API_URL}/projectmakandura/create/`, newProject, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("New Project Added");
          setTitle("");
          setSummery("");
          setEditorState(EditorState.createEmpty());
          setImage(null);
          setVideos([{ url: "" }]);
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          alert(err);
        });
      setLoading(false);
    }
  };

  const handleDelete = () => {
    Storage.remove(ref.current.files[0].name)
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
    handleDelete(); // Call your deleteImage function here
    setUploadedImageUrl(""); // Call your setUploadedImageUrl function here
  };

  const clearForm = () => {
    setVideos([{ url: "" }]);
    setTitle("");
    setSummery("");
    setEditorState("");
    setImage(null);
    setStatus(true);
    setValidated(false);
  };

  const renderVideos = () => {
    if (videos && videos.length > 0) {
      return (
        <div className="d-flex justify-content-center">
          <div className="row">
            {videos.map((video, index) => (
              <div key={index} className="col-4">
                <div className="player-wrapper mb-4">
                  <ReactPlayer
                    url={video.url}
                    className="react-player pl-5 pt-5"
                    width="100%"
                    height="100%"
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
      <div className="container">
        <div className="mx-auto max-w-3xl my-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Add Project</h2>
          <form noValidate validated={validated} onSubmit={addProject}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsTitle"
              >
                Event Project
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title_project_m}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Event Title"
                id="newsTitle"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="summery"
              >
                Summary of Project
              </label>
              <input
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Summarize your Event"
                id="summery"
                value={summery_project_m}
                onChange={(e) => {
                  setSummery(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-2/3 mb-4 md:mb-0 pr-0 md:pr-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  ref={ref}
                  type="file"
                  onChange={handleFile}
                  required
                  className="appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Image Url"
                  id="image"
                />
                {progress}
                {image && (
                  <div>
                    <img
                      src={image}
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
              <div className="w-full md:w-1/3 md:mt-0">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="eventContent"
              >
                Add Project Content
              </label>
              <div className="border rounded-md p-2">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                      previewImage: true,
                      alt: { present: true, mandatory: false },
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={clearForm}
              >
                Cancel
              </button>
            </div>
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
