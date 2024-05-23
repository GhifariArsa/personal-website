import { useState } from "react";
import "./experience.css";

export default function Experience({ title, company, experience, date }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="list">
      <button
        className={`accordion ${isVisible ? "active" : ""}`}
        onClick={handleClick}
      >
        <div className="button-header">
          <div>
            <h2 style={{ marginBottom: 0, marginTop: "0" }}>{title}</h2>
            <span>{company}</span>
          </div>
          <div>
            <p>{date}</p>
          </div>
        </div>
        <div className={`panel ${isVisible ? "show" : ""}`}>
          <ul style={{ fontSize: "14px" }}>
            {experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
}
