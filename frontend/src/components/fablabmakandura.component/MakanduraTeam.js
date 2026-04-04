import React from "react";
import { fablabTeam, alumniTeam } from "./fablabMakanduraTeam";
import "./ourteamModule.css";

const MakanduraTeam = () => {
  return (
    <div className="makandura-team-page">
      {/* FabLab Makandura Team Section */}
      <section className="team-section-container">
        <h2 className="team-section-title">FabLab Makandura Team</h2>
        <div className="team-container">
          {fablabTeam.map((user) => (
            <div className="team-member" key={user.id}>
              <div className="team-member-link">
                <div className="team-member-card">
                  <div className="team-member-image-container">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="team-member-image"
                    />
                  </div>
                  <div className="team-member-name">{user.name}</div>
                  <div className="team-member-role">{user.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="team-section-container alumni-section">
        <h2 className="team-section-title">Alumni</h2>
        <div className="team-container">
          {alumniTeam.map((user) => (
            <div className="team-member" key={user.id}>
              <div className="team-member-link">
                <div className="team-member-card">
                  <div className="team-member-image-container">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="team-member-image"
                    />
                  </div>
                  <div className="team-member-name">{user.name}</div>
                  {user.role && (
                    <div className="team-member-role">{user.role}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MakanduraTeam;

