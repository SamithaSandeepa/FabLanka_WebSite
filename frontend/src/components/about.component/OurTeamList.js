import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Styles from "../../styles/ourteam.module.css";
import { dataourteam } from "../data/data_ourteam";

const OurTeamList = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold font-serif text-[#394867] mt-8">
        Our Team
      </h1>
      <div className={Styles.container}>
        {dataourteam.map((curElem) => {
          return (
            <div className={Styles.card_item} key={curElem.id}>
              {/* <a
                className="no-underline"
                href={curElem.link}
                target="_blank"
                rel="noreferrer"
              > */}
              <div className={Styles.card_inner}>
                <img src={curElem.image} />
                <div className={Styles.userName}>
                  <p className="text-xl mb-1">{curElem.name}</p>
                  <p className="text-slate-400">{curElem.position}</p>
                  <p className="text-center mt-2">
                    <span
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                      <FaLinkedin
                        size={24}
                        style={{ cursor: "pointer", color: "#0A66C2" }}
                        onClick={() => {
                          window.open(
                            curElem.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        title="LinkedIn Profile"
                      />
                    </span>
                  </p>
                </div>
              </div>
              {/* </a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OurTeamList;
