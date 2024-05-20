import { ReactP5Wrapper } from "@p5-wrapper/react";
import "./intro.css";
import * as box from "./sketch.js";

export default function Me() {
  return (
    <div className="intro">
      <div className="block">
        <span className="header">hello, 👋</span>
        <span>
          nice to meet you! i'm arsa, student learning software development
          graduating in november 2024
        </span>
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
