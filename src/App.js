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
import {
  gameOfLife,
  TodoApp,
  movieApp,
  minecraftVil,
  homeless_java,
  scooter_hiring_app,
} from "./assets/projectsList.js";
import Experience from "./Components/Experience/Experience.js";
import { kss, iff, soundse, woolies, reyts } from "./assets/experienceList.js";
import Projects from "./Components/Projects/Projects.js";
import { useEffect, useState } from "react";

function App() {
  const projectsList = [
    minecraftVil,
    homeless_java,
    movieApp,
    gameOfLife,
    TodoApp,
  ];

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
              <p>
                I am proficient in JavaScript, TypeScript, Python, and Java,
                along with their associated technologies such as Node.js, React,
                NextJS, NestJS and more.
              </p>
              <p>
                In addition, I have experience with modern cloud technologies,
                particularly AWS and its services, including Lambda and EC2,
                which I have used to build full-stack applications.
              </p>
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
          <p class="header-subtitle">click to learn more</p>
        </span>
        <Experience
          title={kss.title}
          company={kss.company}
          experience={kss.experience}
          date={kss.date}
        />
        <Experience
          title={reyts.title}
          company={reyts.company}
          experience={reyts.experience}
          date={reyts.date}
        />
        <Experience
          title={woolies.title}
          company={woolies.company}
          experience={woolies.experience}
          date={woolies.date}
        />
        <span>
          <h1>Volunteering</h1>
        </span>
        <Experience
          title={iff.title}
          company={iff.company}
          experience={iff.experience}
          date={iff.date}
        />
        <Experience
          title={soundse.title}
          company={soundse.company}
          experience={soundse.experience}
          date={soundse.date}
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
      <footer>
        <h5 style={{ marginBottom: "0rem" }}>
          Designed in figma, built using React, deployed with AWS.
        </h5>
        <h5>thank you for visiting :)</h5>
      </footer>
    </div>
  );
}

export default App;
