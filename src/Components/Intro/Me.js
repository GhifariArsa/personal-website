import { ReactP5Wrapper } from "@p5-wrapper/react";
import "./intro.css";
import * as box from "./sketch.js";

export default function Me() {
  return (
    <div className="intro">
      <div className="block">
        <span className="header">hello, 👋</span>
        <p>
          Let me introduce my self, my name is <b>Ghifari Arsa</b> and I am a computer science student graduating in November 2024.
        </p>
        <p>
        Allow share my journey and the projects I've worked on. I am fluent various programming languages and frameworks, with a keen interest in full-stack development. Whether it's crafting a sleek user interface or optimizing backend processes, I love turning ideas into reality through code.
      </p>
      </div>
      <div>
        <span style={{ fontSize: "9px" }}>
          built with matter-js and rendered with p5 :)
        </span>
        <ReactP5Wrapper sketch={box.sketch} />
      </div>
    </div>
  );
}
