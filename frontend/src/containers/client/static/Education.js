import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";

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

  return (
    <div className="container-sm text-lg mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-semibold font-serif p-0 mb-4 text-[#394867]">
          Education
        </h1>
      </div>
      <div>
        <p className="mt-2 text-lg leading-relaxed ml-2">
          FabLanka aims to deliver free and structured courses for community
          education and commercial purposes. The courses will include training
          on CAD software, use and troubleshooting of fabrication machinery, and
          business development. An internationally recognized certificate
          program will be offered for motivated individuals to learn new skills
          that will help them in the job market. In addition, there will be
          unstructured programs such as tutorials, training, and workshops on a
          need basis. With partnerships between local colleges,
          microcontroller-based systems and businesses, FabLanka can initiate
          local economic development projects. FabLanka will serve as a resource
          hub for local communities, schools, and universities to access
          knowledge and development of technology.
        </p>

        <h5 className="mt-10 font-bold">
          Currently, FabLanka offers a 6-month-long Education program. The
          objectives of this Fab Education program are:
        </h5>

        <ul className="list ml-3">
          <li className="mt-3">
            - Dispersion of advanced technologies to rural communities
          </li>
          <li className="mt-3">
            - Tap the potential of untapped human workforce and motivate them to
            believe and innovate by providing access to advanced technologies
          </li>
          <li className="mt-3 mb-5">
            - Develop core capabilities to product development and management
          </li>
        </ul>

        <h5>
          The participants who will complete this 6-month Fab Education program
          will gain expertise in the following areas:
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

        <h5>FabLanka Philosophy in conducting the training program is:</h5>

        <ul className="list mb-5 text-lg ml-3">
          <li className="mt-3">
            - Safety during training and operation is the number one priority
          </li>
          <li className="mt-3">
            - Trying any wild idea and making mistakes or failures are okay but
            not trying anything is not okay
          </li>
        </ul>
      </div>
      <p className="mb-5">
        In the near future, FabLanka plans to start collaborative workshops to
        develop new products and services that are tailored to provide solutions
        for pressing issues like drinking water, energy, transportation etc.
        These workshops will be conducted with the help of professionals locally
        and internationally.
      </p>
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
