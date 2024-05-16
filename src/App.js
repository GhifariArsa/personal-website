import "./App.css";
import About from "./Components/Skills/Skills.js";
import Me from "./Components/Intro/Me.js";
import TopHeader from "./Components/TopHeader/TopHeader.js";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Me />
      <div className="tech">
        <span>
          <h1>Technical Skills</h1>
        </span>
      </div>
      <About />
      <About />
    </div>
  );
}

export default App;
