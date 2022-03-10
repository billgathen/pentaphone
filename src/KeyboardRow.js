import React from "react";
import KeyboardKey from "./KeyboardKey";

export default function KeyboardRow({ spacerWidth, keys, commands }) {
  const row = () => {
    let r = [];
    for (let i = 0; i < keys.length; i++) {
      r.push(
        <KeyboardKey
          key={keys[i].label}
          keyboardKey={keys[i]}
          commandKey={commands[i]}
        />
      );
    }
    return r;
  };
  return (
    <div className="keyboard-row">
      {spacerWidth ? <div className={spacerWidth}></div> : ""}
      {row()}
    </div>
  );
}
