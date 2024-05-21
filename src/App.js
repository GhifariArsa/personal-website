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
} from "./assets/skillsSVG.js";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Me />
      <div className="tech">
        <div className="cards">
          <Skills skills={[javascriptSVG, pythonSVG, javaSVG]} />
          <Skills skills={[reactSVG, expressjsSVG, nodejsSVG]} />
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
      </div>
    </div>
  );
}

export default App;
