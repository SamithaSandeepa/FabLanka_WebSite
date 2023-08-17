import React, { useState } from "react";

const InnovationandSocialDevelopment = () => {
  console.log("isAuthenticated");
  return (
    <div className="container-sm text-lg mt-10 shadow-sm py-2 mb-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-semibold font-serif p-0 mb-4 text-[#394867]">
          Innovation and Social Development
        </h1>
      </div>
      <div>
        <p className="mb-3 text-lg leading-relaxed">
          We at FabLanka adopt{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0 Technologies
          </a>{" "}
          and related methodologies to enhance social innovation and development
          in Sri Lanka. Our programs and platforms are accessible by the public,
          offered mainly free and follow non-discriminatory and inclusive
          approach. We particularly encourage youth and rural communities to
          join our programs and services.
        </p>
        <p className="mb-3 text-lg leading-relaxed">
          At{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/fablabmakandura"
            target="_blank"
            rel="noopener noreferrer"
          >
            FabLab Makandura
          </a>{" "}
          , we offer free public programs, Open Days & support and guidance for
          innovations and social developments.
        </p>
        <p className="mb-3 text-lg leading-relaxed">
          FabLanka is regularly and actively engaged with social events and
          external activities which encourage innovation, entrepreneurship and
          social transformation.
        </p>
      </div>
      {/* <img
        src={PUBLIC_URL + "/images/1.jpg"}
        alt="education"
        width="50%"
        className="mb-5"
      /> */}
      {/* {isAuthenticated && (
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
      )} */}
    </div>
  );
};

export default InnovationandSocialDevelopment;
