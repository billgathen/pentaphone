import React, { useState } from "react";
import "./App.css";
import Keyboard from "./Keyboard";
import BasicInstructions from "./BasicInstructions";
import AdvancedInstructions from "./AdvancedInstructions";
import SongExamples from "./SongExamples";

export default function App() {
  const [basicInstructionsAreOpen, setBasicInstructionsAreOpen] =
    useState(false);
  const toggleBasicInstructions = (e) => {
    e.target.blur();
    setBasicInstructionsAreOpen(!basicInstructionsAreOpen);
  };
  const [advancedInstructionsAreOpen, setAdvancedInstructionsAreOpen] =
    useState(false);
  const toggleAdvancedInstructions = (e) => {
    e.target.blur();
    setAdvancedInstructionsAreOpen(!advancedInstructionsAreOpen);
  };
  const [songExamplesAreOpen, setSongExamplesAreOpen] = useState(false);
  const toggleSongExamples = (e) => {
    e.target.blur();
    setSongExamplesAreOpen(!songExamplesAreOpen);
  };
  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/favicon.ico" alt="Logo" />
        <h1>The Pentaphone</h1>
        <button
          className="instructions-toggle"
          onClick={toggleBasicInstructions}
        >
          {basicInstructionsAreOpen
            ? "Close Basic Instructions"
            : "What is this?"}
        </button>
        <button className="instructions-toggle" onClick={toggleSongExamples}>
          {songExamplesAreOpen ? "Close Song Examples" : "Song Examples"}
        </button>
        <button
          className="instructions-toggle"
          onClick={toggleAdvancedInstructions}
        >
          {advancedInstructionsAreOpen
            ? "Close Advanced Instructions"
            : "For the Adventurous"}
        </button>
      </div>
      <div className="main-interface">
        <div className="spacer">
          {basicInstructionsAreOpen ? (
            <BasicInstructions
              toggleBasicInstructions={toggleBasicInstructions}
            />
          ) : (
            ""
          )}
          {advancedInstructionsAreOpen ? (
            <AdvancedInstructions
              toggleAdvancedInstructions={toggleAdvancedInstructions}
            />
          ) : (
            ""
          )}
          {songExamplesAreOpen ? (
            <SongExamples toggleSongExamples={toggleSongExamples} />
          ) : (
            ""
          )}
        </div>
        <Keyboard />
        <div className="spacer"></div>
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
