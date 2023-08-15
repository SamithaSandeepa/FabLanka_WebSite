import React, { useState } from "react";

const ConsultancyandAdvisory = () => {
  console.log("isAuthenticated");
  return (
    <div className="container-sm text-lg mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-semibold font-serif p-0 mb-4 text-[#394867]">
          Consultancy and Advisory Services
        </h1>
      </div>
      <div>
        <p className="mb-3 text-lg leading-relaxed">
          FabLanka provides consultancy on adopting{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0
          </a>{" "}
          and digital transformation management to SMEs and industrial
          organizations. We also advise government organizations to design and
          implement policies in building{" "}
          <a
            className="text-blue-500 hover:text-blue-700 transition duration-300"
            href="/industry"
            target="_blank"
            rel="noopener noreferrer"
          >
            Industry 4.0
          </a>{" "}
          eco-system in Sri Lanka.
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

export default ConsultancyandAdvisory;
