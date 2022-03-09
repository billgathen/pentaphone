import React from "react";
import KeyboardKey from "./KeyboardKey";

export default function KeyboardRow({ spacerWidth, keys }) {
  return (
    <div className="keyboard-row">
      {spacerWidth ? <div className={spacerWidth}></div> : ""}
      {keys.map((k) => (
        <KeyboardKey keyboardKey={k} />
      ))}
    </div>
  );
}
