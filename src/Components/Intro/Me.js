import Game from "./Game";
import "./intro.css";

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
      <Game />
    </div>
  );
}
