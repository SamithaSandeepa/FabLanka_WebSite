import React from "react";
import { datamaknadurateam } from "./fablabMakanduraTeam";
import "./ourteamModule.css";

const MakanduraTeam = () => {
  return (
    <>
      <div className="team-container">
        {datamaknadurateam.map((user) => {
          return (
            <div className="team-member" key={user.id}>
              <a href="#" className="team-member-link">
                <div className="team-member-card">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="team-member-image"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div className="team-member-name">{user.name}</div>
                  <div className="team-member-role">{user.role}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MakanduraTeam;
