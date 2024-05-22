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
import Experience from "./Components/Experience/Experience.js";
import { kss, iff, soundse, woolies } from "./assets/experienceList.js";
import Projects from "./Components/Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Me />
      <div className="tech">
        <div className="cards">
          <Skills skills={[javascriptSVG, pythonSVG, javaSVG, sqlSVG]} />
          <Skills skills={[reactSVG, expressjsSVG, nodejsSVG, tailwindSVG]} />
        </div>
        <div className="tech-header">
          <span>
            <h1>Technical Skills</h1>
          </span>
          <span>
            these are some of my technical skills, i have experience in
            javascript, java, and python
          </span>
        </div>
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
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
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
    </div>
  );
}

export default App;
