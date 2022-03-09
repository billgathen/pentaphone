import React, { useEffect, useState } from "react";

export default function KeyboardKey({
  keyboardKey,
  keyType = "letter-key",
  keysPressed,
}) {
  const [keyIsDown, setKeyIsDown] = useState(false);

  const handleKeyDown = (event) => {
    if (event.code === keyboardKey.code) {
      console.log(`It's me! ${keyboardKey.code}`);
      setKeyIsDown(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === keyboardKey.code) {
      console.log(`Bye... ${keyboardKey.code}`);
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
