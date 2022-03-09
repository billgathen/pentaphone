import React from "react";

export default function KeyboardKey({ keyboardKey, keyType = "letter-key" }) {
  return (
    <div key={keyboardKey.label} className={`key ${keyType}`}>
      {keyboardKey.label}
    </div>
  );
}
