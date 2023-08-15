// import Styles from "../../styles/about.module.css";
// import Styles from "../../../styles/about.module.css";
import OurTeam from "../../../components/about.component/OurTeam";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <div className="container-lg shadow-sm bg-white rounded p-10">
        <h1 className="text-center text-3xl font-semibold font-serif text-[#394867]">
          About Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <div className="col-span-2 sm:col-span-1">
            {/* <p className="capitalize text-left font-bold mb-3">
              A Globally Connected Sri Lankan Social Enterprise
            </p> */}

            <p className="text-justify text-lg ">
              FabLanka Foundation is a not-for-profit social enterprise
              incorporated in 2016 with the objective of introducing and
              popularizing{" "}
              <a
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                href="/industry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Industry 4.0 Technologies
              </a>{" "}
              in Socio-Economic development in Sri Lanka. The Foundation works
              under the broad themes of rural development, youth empowerment and
              peace and democracy using digital technology.
            </p>
            <p className="text-justify text-lg ">
              We use 3-D Printing, Robotics, Internet of Things ( IoT),
              Artificial Intelligence (AI), Sensor Technology and other various{" "}
              <a
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                href="/industry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Industry 4.0 Technologies
              </a>{" "}
              for solving social problems using human centric approaches. As a
              people friendly and future oriented enterprise, we work in
              partnership with multiple stakeholders including the government
              organizations, private companies, educational institutes and civil
              society organizations.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="card mb-3">
              <h5 className="card-header bg-primary text-white font-bold">
                Our Vision
              </h5>
              <div className="card-body">
                <p className="text-justify">
                  Establish a technologically advanced and globally connected
                  makers' society in Sri Lanka.
                </p>
              </div>
            </div>
            <div className="card mb-3">
              <h5 className="card-header bg-primary text-white font-bold">
                Our Mission
              </h5>
              <div className="card-body">
                <p className="text-justify">
                  build almost anything that could improve the quality of life.
                  Provide a platform of highest standard to exchange knowledge,
                  ideas and expertise on existing and emerging technologies.
                </p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header bg-primary text-white font-bold">
                Our Values
              </h5>
              <div className="card-body">
                <p className="text-justify">
                  We adhere to values of Innovation, Goal-Orientation, Team
                  Work, Commitment, Integrity, Community, Collaboration and
                  Sustainability in all work and activities we carry out.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-left font-medium mt-5 mb-3 text-lg">
              FabLanka is a Future-Ready Organization in alliance with{" "}
              <a
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                href="https://www.undp.org/sustainable-development-goals"
                target="_blank"
                rel="noopener noreferrer"
              >
                United Nation’s Sustainable Development Goals (UNSGDs)
              </a>{" "}
              .
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-center text-3xl font-semibold font-serif text-[#394867]">
              History
            </h2>
            <p className=" text-lg mt-5">
              The Co-Founders of FabLanka Foundation conceptualized the venture
              as early as in 2014 was publicly launched in May 2015. FabLanka
              Foundation (GTE) LTD was incorporated as a not-for-profit social
              enterprise in April 2016 under Companies Act of Sri Lanka.{" "}
              <a
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                href="/fablabmakandura"
                target="_blank"
                rel="noopener noreferrer"
              >
                FabLab Makandura
              </a>{" "}
              , the first ever FabLab in Sri Lanka was started in 2017.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-left font-bold mt-5 mb-3">
              Towards a Makers’ society through Community Outreach
            </p>
            <p className="text-justify">
              Developed as a community outreach project, FabLanka allows local
              communities at any socio-economic background to channel their
              creative energy towards technological innovation. Fabrication labs
              will serve as an educational apparatus by providing the knowledge
              and tools through which communities can innovate according to
              their needs. This will empower the youth and intern the community
              towards local economic development.
            </p>
            <p className="text-justify">
              Communities have unique identities and needs. For digital
              fabrication methods such as additive manufacturing, unique
              necessities of each community become an advantage as opposed to
              the mass assembly line manufacturing methods of the past. In Sri
              Lanka, most cities and towns thrive on small businesses that are
              stifled by lack of technical innovation and financial burdens.
              Fabrication labs will serve small and medium scale enterprises
              (SME) by providing them with the necessary technology and
              infrastructure in the form of education, training, and product
              development capabilities that neither local governments nor
              businesses have the capacity to invest in. Innovative fabrication
              methods developed locally for local markets can help overcome the
              stagnation caused by global economic pressures and local economic
              underdevelopment.
            </p>
          </div>
        </div> */}
        {/* <div className="grid grid-cols-1">
          <div className="col-span-1">
            <p className="text-left font-bold mt-5 mb-3">
              Towards a Greener Economy that protects the environment
            </p>
            <p className="text-justify">
              The environmental degradation caused by modern economies is
              severe. Much of the raw materials and energy used for production
              is wasted in the manufacturing and transportation processes. Local
              manufacturing methods are needed to pave the way for a greener
              economy. Developing countries have the advantage of not having to
              change the foundations of their economic structure to exploit the
              changes necessary for a sustainable economy. The needs of a
              sustainable economy can be met on a local level with innovative
              manufacturing methods. Fabrication labs can lead the way in
              identifying sustainable manufacturing practices for local
              economies to prosper.
            </p>
            <p className="text-justify">
              FabLanka aims to bridge the gap between advancements in
              information technology and lack of advancement in manufacturing
              techniques in Sri Lanka. In doing so, the goal is to solve
              multifaceted problems through education, innovation and building
              sustainable local communities that are globally connected.
            </p>
          </div>
        </div> */}
      </div>
      <div className="row">
        <OurTeam />
      </div>
    </>
  );
};
export default About;
