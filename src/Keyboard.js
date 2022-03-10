import React from "react";
import keyboardLayouts from "./keyboardLayouts";
import KeyboardRow from "./KeyboardRow";
import KeyboardKey from "./KeyboardKey";
import commandLayouts from "./commandLayouts";

export default function Keyboard() {
  const keyboardLayout = keyboardLayouts("us-en");
  const commandLayout = commandLayouts("default");

  return (
    <div className="keyboard">
      <KeyboardRow
        keys={keyboardLayout.topRow}
        commands={commandLayout.topRow}
      />
      <KeyboardRow
        spacerWidth="middle-row-spacer"
        keys={keyboardLayout.middleRow}
        commands={commandLayout.middleRow}
      />
      <KeyboardRow
        spacerWidth="bottom-row-spacer"
        keys={keyboardLayout.bottomRow}
        commands={commandLayout.bottomRow}
      />
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <KeyboardKey
          keyboardKey={keyboardLayout.spaceBar}
          commandKey={commandLayout.spaceBar}
          keyType="space-bar"
        />
      </div>
    </div>
  );
}
