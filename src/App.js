import { useState } from "react";
import Quiz from "./Quiz";
import AreaOfTriangles from "./AreaofTriangles";
import "./styles.css";
import IsTriangle from "./IsTriangle";
import Hypotenuse from "./Hypotenuse";
import Footer from "./Footer";

export default function App() {
  const [screen, setScreen] = useState("areaOfTriangles");
  return (
    <div className="App">
      <h1>Fun with Triangles</h1>
      <div className="d-flex justify-space-between align-items-center">
        <span
          className={`${screen === "isTriangle" ? "active-btn" : ""}`}
          onClick={() => setScreen("isTriangle")}
        >
          isTriangle
        </span>
        <span
          className={`${screen === "quiz" ? "active-btn" : ""}`}
          onClick={() => setScreen("quiz")}
        >
          Quiz
        </span>
        <span
          className={`${screen === "hypotenuse" ? "active-btn" : ""}`}
          onClick={() => setScreen("hypotenuse")}
        >
          Hypotenuse
        </span>
        <span
          className={`${screen === "areaOfTriangles" ? "active-btn" : ""}`}
          onClick={() => setScreen("areaOfTriangles")}
        >
          Area of triangle
        </span>
      </div>
      {screen === "quiz" ? (
        <Quiz />
      ) : screen === "isTriangle" ? (
        <IsTriangle />
      ) : screen === "hypotenuse" ? (
        <Hypotenuse />
      ) : (
        screen === "areaOfTriangles" && <AreaOfTriangles />
      )}
      <Footer />
    </div>
  );
}
