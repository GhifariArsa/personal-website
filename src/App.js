import "./App.css";
import Skills from "./Components/Skills/Skills.js";
import Me from "./Components/Intro/Me.js";
import TopHeader from "./Components/TopHeader/TopHeader.js";
import {
  javascriptSVG,
  pythonSVG,
  javaSVG,
  reactSVG,
  nodejsSVG,
  expressjsSVG,
  sqlSVG,
  tailwindSVG,
} from "./assets/skillsSVG.js";
import { gameOfLife, TodoApp, movieApp } from "./assets/projectsList.js";
import Experience from "./Components/Experience/Experience.js";
import { kss, iff, soundse, woolies } from "./assets/experienceList.js";
import Projects from "./Components/Projects/Projects.js";
import { useEffect, useState } from "react";

function App() {
  const projectsList = [gameOfLife, TodoApp, movieApp];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <TopHeader />
      <Me />
      <div className="tech">
        {isLargeScreen ? (
          <>
            <div className="cards">
              <Skills skills={[javascriptSVG, pythonSVG, javaSVG, sqlSVG]} />
              <Skills
                skills={[reactSVG, expressjsSVG, nodejsSVG, tailwindSVG]}
              />
            </div>
            <div className="tech-header">
              <span>
                <h1>Technical Skills</h1>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="tech-header">
              <span>
                <h1>Technical Skills</h1>
              </span>
            </div>
            <div className="cards">
              <Skills skills={[javascriptSVG, pythonSVG, javaSVG, sqlSVG]} />
              <Skills
                skills={[reactSVG, expressjsSVG, nodejsSVG, tailwindSVG]}
              />
            </div>
          </>
        )}
      </div>
      <div className="experience">
        <span>
          <h1>Experience</h1>
        </span>
        <Experience
          title={kss.title}
          company={kss.company}
          experience={kss.experience}
        />
        <Experience
          title={iff.title}
          company={iff.company}
          experience={iff.experience}
        />
        <Experience
          title={soundse.title}
          company={soundse.company}
          experience={soundse.experience}
        />
        <Experience
          title={woolies.title}
          company={woolies.company}
          experience={woolies.experience}
        />
      </div>
      <div className="projects">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div className="projects-cards">
          {projectsList.map((item) => {
            return (
              <Projects
                title={item.title}
                description={item.description}
                link={item.link}
                img={item.image}
                skills={item.skills}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
