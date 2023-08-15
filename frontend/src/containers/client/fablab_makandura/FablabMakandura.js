import React from "react";
import MakanduraTeam from "../../../components/fablabmakandura.component/MakanduraTeam";
import ProjectMakandura from "../../../components/fablabmakandura.component/ProjectMakandura";
// import './fablabmakandura.css';

const FablabMakandura = () => {
  return (
    <>
      <div className="container m-0 p-0">
        <header className="bg-gray-600 py-10 text-white text-center mb-4">
          <h1 className="text-4xl font-bold">FabLab Makandura</h1>
          <p className="mt-4 text-lg">
            Fabrication Laboratory (FabLab) is an international concept where
            advanced manufacturing tools and practices are housed in a single
            place. More information about international FabLabs are available at{" "}
            <a
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              href="https://www.fablabs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.fablabs.io
            </a>
            .
          </p>
        </header>
        <div className="grid grid-cols-12 grid-rows-3 bg-gradient-to-b from-white to-[#D4FAFC]">
          <div className="col-span-12 row-span-3">
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/0jX5QYJ/IMG-20210916-120751.jpg"
                alt="FabLab Makandura"
                className="w-25 rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>
        </div>

        <h2 className="text-[30px] text-center font-normal pt-3">
          Fablabmakandura Team
        </h2>
        <div className="grid grid-col-12 grid-row-3 bg-gradient-to-b from-white to-[#D4FAFC]">
          <div className="justify-center col-span-12">
            <MakanduraTeam />
          </div>
          <div className="justify-center col-span-12 pt-10">
            <ProjectMakandura />
          </div>
          <div className="justify-center pt-10 col-span-12 mx-5">
            {/* <h1 className="text-[50px] text-center text-[#163B64]">Location</h1> */}
            <p className="text-center pt-5">
              FabLab Makandura is located about 50 Km from Colombo at the Public
              Library Complex in Makandura town of Kurunegala district.
            </p>
            <div class="flex justify-center mt-4 mb-4">
              <div class="w-1/2 mr-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2716748138037!2d79.97793141525179!3d7.323351115378345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7622d600a83%3A0xaa493fc1c1d13b3e!2sFabLab%20Makandura!5e0!3m2!1sen!2slk!4v1661173585215!5m2!1sen!2slk"
                  width="100%"
                  height="700"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="w-1/2  justify-center ">
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/MakanduraFabLab"
                  data-tabs="timeline,events"
                  data-width="500"
                  data-height="700"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="false"
                >
                  <blockquote
                    cite="https://www.facebook.com/MakanduraFabLab"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/MakanduraFabLab">
                      FabLab Makandura
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FablabMakandura;
