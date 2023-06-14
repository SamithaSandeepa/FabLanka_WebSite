import React from "react";
import { datamaknadurateam } from "./fablabMakanduraTeam";
import "./ourteamModule.css";

const MakanduraTeam = () => {
  return (
    <>
      
      <div
        style={{
          padding: "40px 10px 10px 10px",
          width: "99%",
          margin: 0,
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {datamaknadurateam.map((user) => {
          return (
            <div
            style={{
              padding: "10px 30px",
              width: "14.28%", // Modified width from "18%" to "14.28%"
              textAlign: "center",
              marginBottom: "8px",
            }}
              key={user.id}
            >
              <a href="#" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "rgb(255, 255, 255)",
                    borderRadius: "20px",
                    padding: "15px", // Adjusted padding from "35px 20px" to "20px"
                    minWidth: "150px", // Modified minimum width from "225px" to "150px"
                    minHeight: "200px", // Modified minimum height from "315px" to "250px"
                    maxHeight: "300px", // Modified maximum height from "370px" to "300px"
                    width: "100%",
                    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    src={user.image}
                    alt={user.name}
                    style={{
                      width: "auto",
                      height: "auto",
                      marginBottom: "10px",
                      borderRadius: "50%",
                      margin: "auto",
                      transition: "transform 0.2s",
                      transform: "scale(1)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      color: "#12203a",
                      marginTop: "10px",
                      fontWeight: 600,
                      fontSize: "13px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {user.name}
                  </div>
                  <div
                    style={{
                      color: "#718096",
                      marginTop: "5px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    {user.role}
                  </div>
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
