import React, { useEffect, useState } from "react";
import SoundManager from "./SoundManager";

export default function KeyboardKey({
  keyboardKey,
  commandKey,
  soundConfig,
  keyType = "letter-key",
}) {
  const [keyIsDown, setKeyIsDown] = useState(false);
  const [sound, setSound] = useState(null);

  const handleKeyDown = (event) => {
    if (event.code === keyboardKey.code) {
      setKeyIsDown(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === keyboardKey.code) {
      setKeyIsDown(false);
    }
  };

  useEffect(() => {
    sound && sound.configure(soundConfig);
    // eslint-disable-next-line
  }, [soundConfig]);

  useEffect(() => {
    if (keyIsDown) {
      if (commandKey.type === "note" || commandKey.type === "chord") {
        if (!sound) {
          setSound(SoundManager.getSound(commandKey, soundConfig));
        } else {
          sound.on();
        }
      }
    } else {
      sound && sound.off();
    }
    // eslint-disable-next-line
  }, [keyIsDown]);

  useEffect(() => {
    const handleKeyDownEvent = (event) => handleKeyDown(event);
    const handleKeyUpEvent = (event) => handleKeyUp(event);

    window.addEventListener("keydown", handleKeyDownEvent);
    window.addEventListener("keyup", handleKeyUpEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDownEvent);
      window.removeEventListener("keyup", handleKeyUpEvent);
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
