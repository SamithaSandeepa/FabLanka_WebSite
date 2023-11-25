import React, { useState } from "react";

const ProductDevelopment = () => {
  return (
    <div className="container-sm text-lg mt-10 shadow-sm py-2 mb-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-semibold font-serif p-0 mb-4 text-[#394867]">
          Product Development
        </h1>
      </div>
      <div>
        <p className="mb-3 text-lg leading-relaxed">
          Developing new products to solve important social issues is a priority
          for FabLanka Foundation. Our team of experts with multidisciplinary
          and international background regularly work on such product
          development work.
        </p>

        <p className="mb-3 text-lg leading-relaxed">
          Some of Ongoing New Product Development Projects at FabLab Makandura,
        </p>

        <ul className="list-decimal ml-10 mb-6 text-lg">
          <li className="mt-6">Cement 3-D Printer</li>
          <li className="mt-2">Pet Bottle Recycling Project</li>
          <li className="mt-2">Renewable Energy Products</li>
          <li className="mt-2">Smart Irrigation Systems</li>
        </ul>
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

export default ProductDevelopment;
