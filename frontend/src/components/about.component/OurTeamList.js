import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Styles from "../../styles/ourteam.module.css";
import { dataourteam } from "../data/data_ourteam";

const OurTeamList = () => {
  // Filter directors and advisors
  const directors = dataourteam.filter((member) => member.position === "Director");
  const advisors = dataourteam.filter((member) => member.position === "Advisor");

  const renderTeamMember = (curElem) => (
    <div className={Styles.card_item} key={curElem.id}>
      <div className={Styles.card_inner}>
        <img src={curElem.image} alt={curElem.name} />
        <div className={Styles.userName}>
          <p className="text-xl mb-1">{curElem.name}</p>
          <p className="text-slate-400">{curElem.position}</p>
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "8px" }}>
            <FaLinkedin
              size={24}
              style={{ cursor: "pointer", color: "#0A66C2" }}
              onClick={() => {
                window.open(curElem.link, "_blank", "noopener,noreferrer");
              }}
              title="LinkedIn Profile"
            />
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold font-serif text-[#394867] mt-8">
        Our Team
      </h1>
      
      {/* Directors Section */}
      {directors.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <h2 className="text-center text-2xl font-semibold text-[#394867] mt-6 mb-4">
            Directors
          </h2>
          <div className={Styles.container}>
            {directors.map((curElem) => renderTeamMember(curElem))}
          </div>
        </div>
      )}

      {/* Advisors Section */}
      {advisors.length > 0 && (
        <div style={{ marginBottom: "40px" }}>
          <h2 className="text-center text-2xl font-semibold text-[#394867] mt-6 mb-4">
            Advisors
          </h2>
          <div className={Styles.container}>
            {advisors.map((curElem) => renderTeamMember(curElem))}
          </div>
        </div>
      )}
    </div>
  );
};
export default OurTeamList;
