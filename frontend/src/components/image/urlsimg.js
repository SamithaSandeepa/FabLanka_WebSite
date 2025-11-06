import React, { useEffect, useState } from "react";
import { Storage } from "aws-amplify";

const DownloadComponent = () => {
  const [imageUrl, setImageUrl] = useState("");

  const downloadFile = async (fileName) => {
    try {
      const fileURL = await Storage.get(fileName); // Replace `fileName` with the actual file name
      setImageUrl(fileURL);
    } catch (error) {
      console.log("Error retrieving file:", error);
    }
  };

  useEffect(() => {
    downloadFile("1200x-1.jpg"); // Replace 'example-file.jpg' with the actual file name
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Downloaded Image" />
    </div>
  );
};

export default DownloadComponent;
