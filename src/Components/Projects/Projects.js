import { useEffect, useState } from "react";
import SmallButtons from "../small_buttons/SmallButtons";
import "./projects.css";

export default function Projects({ title, description, link, img, skills }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <div className="card" style={{}}>
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        {skills ? <SmallButtons list={skills} /> : <></>}
      </div>
      <div className="image-button">
        {img ? <img src={img} alt="" className="card-image" /> : <></>}
        {link ? (
          <button onClick={handleClick} className="card-button">
            Github Repo
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
