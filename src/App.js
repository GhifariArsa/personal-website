import "./App.css";
import Skills from "./Components/Skills/Skills.js";
import Me from "./Components/Intro/Me.js";
import TopHeader from "./Components/TopHeader/TopHeader.js";
import { javascriptSVG, pythonSVG, javaSVG } from "./assets/skillsSVG.js";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Me />
      <div className="tech">
        <div className="cards">
          <Skills skills={[javascriptSVG, pythonSVG, javaSVG]} />
          <Skills />
        </div>
        <div className="tech-header">
          <span>
            <h1>Technical Skills</h1>
          </span>
          <span>these are some of my technical skills, i have experience in javascript, java, and python</span>
        </div>
      </div>
    </div>
  );
}

export default App;
