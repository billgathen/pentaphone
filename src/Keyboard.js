import React from "react";
import keyboardLayouts from "./keyboardLayouts";
import KeyboardRow from "./KeyboardRow";
import KeyboardKey from "./KeyboardKey";

export default function Keyboard() {
  const layout = keyboardLayouts("us-en");
  return (
    <div className="keyboard">
      <KeyboardRow keys={layout.topRow} />
      <KeyboardRow spacerWidth="middle-row-spacer" keys={layout.middleRow} />
      <KeyboardRow spacerWidth="bottom-row-spacer" keys={layout.bottomRow} />
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <KeyboardKey keyboardKey={layout.spaceBar} keyType="space-bar" />
      </div>
    </div>
  );
}
