import React, { useState } from "react";
import "./App.css";
import Keyboard from "./Keyboard";
import Instructions from "./Instructions";

export default function App() {
  const [instructionsAreOpen, setInstructionsAreOpen] = useState(false);
  const toggleInstructions = (e) => {
    e.target.blur();
    setInstructionsAreOpen(!instructionsAreOpen);
  };
  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/favicon.ico" alt="Logo" />
        <h1>The Pentaphone</h1>
        <button className="instructions-toggle" onClick={toggleInstructions}>
          {instructionsAreOpen ? "Close Instructions" : "What is this?"}
        </button>
      </div>
      {instructionsAreOpen ? (
        <Instructions toggleInstructions={toggleInstructions} />
      ) : (
        ""
      )}
      <div className="main-interface">
        <Keyboard />
      </div>
      <div className="footer">
        <div>Created by Bill Gathen</div>
        <div>
          <a className="link" href="http://billgathen.com">
            Website
          </a>
        </div>
        <div>
          <a className="link" href="http://github.com/billgathen">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
