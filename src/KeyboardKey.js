import React, { useEffect, useState } from "react";
import SoundManager from "./SoundManager";

export default function KeyboardKey({ keyboardKey, keyType = "letter-key" }) {
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
      note ||= SoundManager.getNote();
      note.on();
      internalKeyIsDown = true;
      setKeyIsDown(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === keyboardKey.code) {
      console.log(`Bye... ${keyboardKey.code}`);
      note.off();
      internalKeyIsDown = false;
      setKeyIsDown(false);
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
      <span>{keyboardKey.label}</span>
    </div>
  );
}
