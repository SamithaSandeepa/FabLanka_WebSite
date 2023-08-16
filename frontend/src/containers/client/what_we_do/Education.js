import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import AWS from "aws-sdk";
import { REGION, BUCKET } from "../../../config/index";
import { Storage } from "aws-amplify";
import Amplify from "@aws-amplify/core";

const Education = ({ isAuthenticated }) => {
  console.log("isAuthenticated", isAuthenticated);

  const [pictures, setPictures] = useState([]);
  const [captions, setCaptions] = useState("");

  const onDrop = (pictureFiles) => {
    setPictures(pictureFiles);
    // Reset captions when new pictures are added
    setCaptions(new Array(pictureFiles.length).fill(""));
  };

  const handleCaptionChange = (index, newCaption) => {
    const updatedCaptions = [...captions];
    updatedCaptions[index] = newCaption;
    setCaptions(updatedCaptions);
    console.log(captions, "captions");
  };

  useEffect(() => {
    console.log(pictures, "pictures");
    console.log(captions, "captions");
  }, [pictures]);
  console.log(pictures, "pictures");

  const handleUpload = async () => {
    try {
      await Promise.all(
        pictures.map(async (picture, index) => {
          const pictureKey = `Education/${picture.name}`;
          await Storage.put(pictureKey, picture, {
            contentType: picture.type,
          });
          console.log(`File ${picture.name} uploaded successfully`);
        })
      );

      // Clear selected pictures and captions if needed
      setPictures([]);
      setCaptions([]);
    } catch (error) {
      console.error("Error uploading images:", error);
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

  return (
    <div className="container-sm text-lg mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-semibold font-serif p-0 mb-4 text-[#394867]">
          Education and Training
        </h1>
      </div>
      <div>
        <p className="mb-3">
          One of our main services is to educate and train people on{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0 Technologies
          </a>
          .
        </p>
        <p className="mt-2 text-lg leading-relaxed">
          FabLanka delivers free and structured courses for community education
          and commercial purposes. The courses include training on CAD software,
          use and troubleshooting of fabrication machinery, and business
          development. An internationally recognized certificate program is
          offered for motivated individuals to learn new skills that will help
          them in the job market. FabLanka collaborates with national and
          international Higher Educational Institutes (HEIs) in designing and
          delivering the educational programs. FabLanka serves as a resource hub
          for local communities, government institutes, SMEs, schools, and
          universities to access knowledge and development of technology.
        </p>

        <h5>
          The participants who complete this 9-months Fab Education program will
          gain expertise in the following areas:
        </h5>

        <ul className="list-disc ml-10 mb-6 text-lg">
          <li className="mt-6">3D Modeling</li>
          <li className="mt-2">3D Printing</li>
          <li className="mt-2">CNC Programming and machining</li>
          <li className="mt-2">Laser Cutting/Engraving</li>
          <li className="mt-2">
            Creating Arts and Crafts using software and digitally controlled
            machines
          </li>
          <li className="mt-2 mb-5">
            Building and programming automated control devices using Arduino
            controller
          </li>
        </ul>
      </div>
      <p className="mb-5">
        FabLanka also conducts collaborative workshops to develop new products
        and services that are tailored to provide solutions for pressing issues
        like drinking water, energy, transportation etc and to achieve{" "}
        <a
          className="text-blue-500 hover:text-blue-700 transition duration-300"
          href="https://www.undp.org/sustainable-development-goals"
          target="_blank"
          rel="noopener noreferrer"
        >
          United Nation’s Sustainable Development Goals (UNSGDs)
        </a>
        . These programs are conducted by resource persons qualified nationally
        and internationally.
      </p>
      {/* <img
        src={PUBLIC_URL + "/images/1.jpg"}
        alt="education"
        width="50%"
        className="mb-5"
      /> */}
      {isAuthenticated && (
        <div className="container">
          <div className="top-0 left-0 width=100% z-1 font-medium">
            <h1>Add Images and Videos</h1>
          </div>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
            maxFileSize={5242880}
            withLabel={true}
            withPreview={true}
          />
          <button
            className="rounded-full bg-cyan-700 px-4 py-2"
            onClick={handleUpload}
          >
            Upload Images
          </button>
          <div className="flex flex-wrap">
            {pictures.map((picture, index) => (
              <div key={index} className="w-1/4 p-4">
                <img
                  src={URL.createObjectURL(picture)}
                  alt={`Preview ${index}`}
                  className="max-w-full h-auto"
                />
                <input
                  type="text"
                  value={captions[index]}
                  onChange={(e) => handleCaptionChange(index, e.target.value)}
                  placeholder="Enter caption"
                  className="mt-2 px-2 py-1 w-full border rounded"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Education);
