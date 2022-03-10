import React, { useEffect, useState } from "react";
import AudioNode from "./AudioNode";

export default function KeyboardKey({ keyboardKey, keyType = "letter-key" }) {
  const [keyIsDown, setKeyIsDown] = useState(false);
  let internalKeyIsDown = false;
  // const audioNode = AudioNode();

  const handleKeyDown = (event) => {
    if (internalKeyIsDown) {
      return;
    }

    if (event.code === keyboardKey.code) {
      console.log(`It's me! ${keyboardKey.code}`);
      // audioNode.on();
      internalKeyIsDown = true;
      setKeyIsDown(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === keyboardKey.code) {
      console.log(`Bye... ${keyboardKey.code}`);
      // audioNode.off();
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
