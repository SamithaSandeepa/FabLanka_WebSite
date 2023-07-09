import { useEffect, useRef, useState } from "react";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";

function App() {
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // Added state variable
  const [link, setlink] = useState();

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

  const loadImages = () => {
    Storage.list("")
      .then((files) => {
        console.log("arry", files.results);
        setFiles(files);
        const len = files.results.length;
        console.log(len);
        const last = files.results[len].key;

        console.log("Last uploaded image key:", last);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadImages();
    downloadFile("1200x-1.jpg");
  }, []);

  const handleFileLoad = () => {
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
        Storage.get(filename)
          .then((imageUrl) => {
            console.log(imageUrl, "sdufakjsdfk");
            setUploadedImageUrl(imageUrl); // Set the image URL to the state variable
            loadImages();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShow = (file) => {
    console.log("show");
    Storage.get(file)
      .then((resp) => {
        console.log(resp);
        setImage(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    Storage.remove(ref.current.files[0].name)
      .then((resp) => {
        console.log("dlt", ref.current.files[0].name);
        loadImages();
        console.log(ref.current);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const downloadFile = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName); // Replace `fileName` with the actual file name
      console.log("File URL:", fileURL);

      // Create an <a> tag and set its href attribute to the fileURL
      const link = document.createElement("text");
      console.log("img url", link);
      link.href = fileURL;

      // console.log("img url", link);
      setlink(link);

      // Set the link text to a user-friendly label
      link.textContent = "Download File";

      // Set the target attribute to '_blank' to open the file in a new tab
      link.target = "_blank";

      // Append the link to the HTML body or any other container element
      document.body.appendChild(link);
    } catch (error) {
      console.log("Error retrieving file:", error);
    }
  };

  // Call the function to download the file
  // downloadFile("example-file.txt");

  return (
    <div className="App">
      <header className="App-header">
        <h1>React AWS Storage Demo</h1>
        <input ref={ref} type="file" onChange={handleFileLoad} />
        <button>Show</button>
        {progress}
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Action</td>
              <td>{files.length}</td>
            </tr>
          </thead>
          {/* <p>{files.results.length}</p> */}

          <button onClick={handleDelete}>delet</button>

          {/* {files.map((file, i) ==> 
          <tr key={file.key}>
          <td>{i}</td>
          <td>{file.key}</td>
          <td>
            <button onClick={() => handleShow(file.key)}>Show</button>
            <button onClick={() => handleDelete(file.key)}>Delete</button>
          </td>
        </tr>
          )} */}

          {/* <tbody>
            {files.map((file, i) => (
              <tr key={file.key}>
                <td>{i}</td>
                <td>{file.key}</td>
                <td>
                  <button onClick={() => handleShow(file.key)}>Show</button>
                  <button onClick={() => handleDelete(file.key)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
        {uploadedImageUrl && <img src={uploadedImageUrl} width="600" />} 
        {/* Display the uploaded image */}
        <img src={image} width="600" />
      </header>
    </div>
  );
}

export default App;
