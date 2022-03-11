import React from "react";
import keyboardLayouts from "./keyboardLayouts";
import KeyboardRow from "./KeyboardRow";
import KeyboardKey from "./KeyboardKey";
import commandLayouts from "./commandLayouts";
import soundConfigs from "./soundConfigs";

export default function Keyboard() {
  const keyboardLayout = keyboardLayouts("us-en");
  const commandLayout = commandLayouts("default");
  const soundConfig = soundConfigs("default");

  return (
    <div className="keyboard">
      <KeyboardRow
        keys={keyboardLayout.topRow}
        commands={commandLayout.topRow}
        soundConfig={soundConfig}
      />
      <KeyboardRow
        spacerWidth="middle-row-spacer"
        keys={keyboardLayout.middleRow}
        commands={commandLayout.middleRow}
        soundConfig={soundConfig}
      />
      <KeyboardRow
        spacerWidth="bottom-row-spacer"
        keys={keyboardLayout.bottomRow}
        commands={commandLayout.bottomRow}
        soundConfig={soundConfig}
      />
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <KeyboardKey
          keyboardKey={keyboardLayout.spaceBar}
          commandKey={commandLayout.spaceBar}
          soundConfig={soundConfig}
          keyType="space-bar"
        />
      </div>
    </div>
  );
}