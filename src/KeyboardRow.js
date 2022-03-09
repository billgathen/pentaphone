import React from "react";
import KeyboardKey from "./KeyboardKey";

export default function KeyboardRow({ spacerWidth, keys, keysPressed }) {
  return (
    <div className="keyboard-row">
      {spacerWidth ? <div className={spacerWidth}></div> : ""}
      {keys.map((k) => (
        <KeyboardKey key={k.label} keyboardKey={k} keysPressed={keysPressed} />
      ))}
    </div>
  );
}
