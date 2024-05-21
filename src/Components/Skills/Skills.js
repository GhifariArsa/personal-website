import React from "react";
import "./Skills.css";

export default function Skills({ skills }) {
  console.log(skills);
  return (
    <div className="container">
      <div style={{ "--r": "-15" }} className="glass">
        {skills && skills[0] ? skills[0] : "No skill available"}
      </div>
      <div style={{ "--r": "5" }} className="glass">
        {skills && skills[1] ? skills[1] : "No skill available"}
      </div>
      <div style={{ "--r": "25" }} className="glass">
        {skills && skills[2] ? skills[2] : "No skill available"}
      </div>
    </div>
  );
}
