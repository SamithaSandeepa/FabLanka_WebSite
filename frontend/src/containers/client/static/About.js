// import Styles from "../../styles/about.module.css";
import Styles from "../../../styles/about.module.css";
import OurTeam from "../../../components/about.component/OurTeam";
import React, { useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

const About = () => {
  //   useEffect(() => {
  //     Aos.init({ duration: 1000 });
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div
        breakpoint="sm"
        className="container- shadow bg-white rounded p-5 mb-5 position-relative"
      >
        <div className="row">
          <div className="col-md-8">
            {/* <h1 className="text-center-top-0 mb-4">About</h1> */}
            <p className="h4 mb-3">
              A Globally Connected Sri Lankan Social Enterprise
            </p>

            <p className={`text-justify ${Styles.qcont}`}>
              FabLanka was publically launched in May 2015 to facilitate and
              nurture the growth of innovative fabrication methods in Sri Lanka.
              FabLanka Foundation (GTE) LTD was incorporated as a not-for-profit
              social enterprise in April 2016 under Companies Act , No 7 of 2007
              of Sri Lanka.
            </p>
            <p className={`text-justify ${Styles.qcont}`}>
              A cooperative between professionals in Sri Lanka and around the
              world, FabLanka aims to bring about educational and economic
              changes while minimizing environmental impact to Sri Lanka through
              the digital fabrication revolution.
            </p>
            <p className={`text-justify ${Styles.qcont}`}>
              The goal of this cooperative is to develop fabrication labs at
              strategic locations throughout the island. Over time, these
              fabrication labs will connect to the larger global digital
              fabrication networks and organizations (fabfoundation.org)
              allowing local communities to innovate and invent new technologies
              and share knowledge that will positively transform the lives of
              peopl
            </p>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <h5 className={`card-header bg-primary ${Styles.card_title}`}>
                Our Vision
              </h5>
              <div className="card-body">
                <p className={`card-justify ${Styles.qcont}`}>
                  Establish a technologically advanced and globally connected
                  makers' society in Sri Lanka.
                </p>
              </div>
            </div>
            <div className="card ">
              <h5 className={`card-header bg-primary ${Styles.card_title}`}>
                Our Mission
              </h5>
              <div className="card-body">
                <p className={`card-justify ${Styles.qcont}`}>
                  build almost anything that could improve the quality of life.
                  Provide a platform of highest standard to exchange knowledge,
                  ideas and expertise on existing and emerging Technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-left h4 mb-3">
              Towards a Makers’ society through Community Outreach
            </p>
            <p className={`card-justify ${Styles.qcont}`}>
              Developed as a community outreach project, FabLanka allows local
              communities at any socio-economic background to channel their
              creative energy towards technological innovation. Fabrication labs
              will serve as an educational apparatus by providing the knowledge
              and tools through which communities can innovate according to
              their needs. This will empower the youth and intern the community
              towards local economic development.
            </p>
            <p className={`card-justify ${Styles.qcont}`}>
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
        </div>
        <div className="row">
          <div className="col-md-12 mb-5">
            <p className="text-left h4 mt-5 mb-3">
              Towards a Greener Economy that protects the environment
            </p>
            <p className={`card-justify ${Styles.qcont}`}>
              The environmental degradation caused by modern economies is
              severe. Much of the raw materials and energy used for production
              is wasted in the manufacturing and transportation processes. Local
              manufacturing methods are needed to pave way for a greener
              economy. Developing countries have the advantage of not having to
              change the foundations of their economic structure to exploit the
              changes necessary for a sustainable economy. The needs of a
              sustainable economy can be met on a local level with innovative
              manufacturing methods. Fabrication labs can lead the way in
              identifying sustainable manufacturing practices for local
              economies to prosper.
            </p>
            <p className={`card-justify ${Styles.qcont}`}>
              FabLanka aims to bridge the gap between advancements in
              information technology and lack of advancement in manufacturing
              techniques in Sri Lanka. In doing so, the goal is to solve
              multifaceted problems through education, innovation and building
              sustainable local communities that are globally connected.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center text-3xl">Our Team</h1>
        <OurTeam />
      </div>
    </>
  );
};
export default About;
