import React, { useEffect, useState } from "react";
import SoundManager from "./SoundManager";

export default function KeyboardKey({
  keyboardKey,
  commandKey,
  soundConfig,
  keyType = "letter-key",
}) {
  const [keyIsDown, setKeyIsDown] = useState(false);
  // The event handler gets the initial state of keyIsDown from context,
  // which means internally the value is always false.
  // Using this normal variable as well allows us to monitor the condition
  // and avoid retriggering the note when keys are held down.
  // The state variable is still required to trigger re-renders.
  let internalKeyIsDown = false;
  let note = null;

  const handleKeyDown = (event) => {
    if (internalKeyIsDown) {
      return;
    }

    if (event.code === keyboardKey.code) {
      console.log(`It's me! ${keyboardKey.code}`);
      internalKeyIsDown = true;
      setKeyIsDown(true);
      if (commandKey.type === "note") {
        note ||= SoundManager.getNote(commandKey.detune, soundConfig);
        note.on();
      }
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === keyboardKey.code) {
      internalKeyIsDown = false;
      setKeyIsDown(false);
      if (commandKey.type === "note") {
        console.log(`Bye... ${keyboardKey.code}`);
        note.off();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      key={keyboardKey.label}
      className={`key ${keyType} ${keyIsDown ? "is-pressed" : ""}`}
    >
      <div className="keyboard-key-label">{keyboardKey.label}</div>
      <div className="keyboard-command-label">
        {commandKey.label ? <span>{commandKey.label}</span> : ""}
      </div>
    </div>
  );
}
