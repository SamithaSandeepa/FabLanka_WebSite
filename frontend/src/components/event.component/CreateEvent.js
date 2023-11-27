import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL, IDENTITY_POOL_ID, REGION, BUCKET } from "../../config/index";
import { useStateContext } from "../../context/ContextProvider";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ReactPlayer from "react-player";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";

const CreateEvent = ({ isAuthenticated }) => {
  const ref = useRef(null);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [dlimage, setDlimage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const { setLoading } = useStateContext();
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const [title_pastevent, setTitle] = useState("");
  const [summery_pastevent, setSummery] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [status, setStatus] = useState(true);
  const [videos, setVideos] = useState([{ url: "" }]);

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") {
      //
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
        identityPoolId: IDENTITY_POOL_ID,
        region: REGION,
      },

      Storage: {
        AWSS3: {
          bucket: BUCKET,
          region: REGION,
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

  const handleFileUpload = async () => {
    // console.log("handleFileUpload");
    const file = ref.current.files[0];
    const imageName = generateUniqueName(file.name);
    setDlimage(imageName);
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

  const handleDelete = () => {
    Storage.remove(dlimage)
      .then((resp) => {
        // console.log("dlt", ref.current.files[0].name);
        setImage(null);
        // console.log(ref.current);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveImage = () => {
    handleDelete(); // Call your deleteImage function here
    setImage(null);
  };

  //Function to handle adding a new Event
  function addEvents(e) {
    const content_pastevent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
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

      const newEvents = new FormData();
      newEvents.append("title_pastevent", title_pastevent);
      newEvents.append("summery_pastevent", summery_pastevent);
      newEvents.append("content_pastevent", content_pastevent);
      newEvents.append("image", image);
      newEvents.append("status", status);
      newEvents.append("videos", videosJsonString);
      setLoading(true);

      axios
        .post(`${API_URL}/event/create/`, newEvents, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("New Event Added");
          setTitle("");
          setSummery("");
          setEditorState(EditorState.createEmpty());
          setImage(null);
          setVideos([{ url: "" }]);
          setStatus(true);
          setValidated(false);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            //refresh page
            alert("Your session has expired. Please login again");
            //got to login page
            window.location.href = "/login";
            console.log(err.response);
          } else {
            alert("Something went wrong");
            console.log(err.response);
          }
        });
      setLoading(false);
    }
  }
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
        <div className="flex justify-content-center">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Add Event</h2>
          <form noValidate validated={validated} onSubmit={addEvents}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newsTitle"
              >
                Event Title
              </label>
              <input
                type="text"
                required
                minLength="2"
                value={title_pastevent}
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
                Summery
              </label>
              <input
                type="text"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Summarize your Event"
                id="summery"
                value={summery_pastevent}
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
                  onChange={handleFileUpload}
                  required
                  className="appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Image Url"
                  id="image"
                />
                {/* Display the upload progress */}
                {isUploading && (
                  <div className="fixed bottom-0 inset-0 flex items-center justify-center z-50">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-md">
                      Image uploading {progress}%
                    </div>
                  </div>
                )}
                {image && (
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
              <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                htmlFor="newsContent"
              >
                Add Event Content
              </label>
              <div className="border rounded">
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
