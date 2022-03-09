import React from "react";
import keyboardLayouts from "./keyboardLayouts";

export default function Keyboard() {
  const layout = keyboardLayouts("us-en");
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {layout.topRow.map((l) => (
          <div key={l.letter} className="key letter-key">
            {l.letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <div className="half-key-spacer"></div>
        {layout.middleRow.map((l) => (
          <div key={l.letter} className="key letter-key">
            {l.letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <div className="half-key-spacer"></div>
        <div className="half-key-spacer"></div>
        {layout.bottomRow.map((l) => (
          <div key={l.letter} className="key letter-key">
            {l.letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <div className="key space-bar">{layout.spaceBar.label}</div>
      </div>
    </div>
  );
}
