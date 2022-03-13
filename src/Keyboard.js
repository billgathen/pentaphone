import React, { useState, useEffect } from "react";
import keyboardLayouts from "./keyboardLayouts";
import ControlRow from "./ControlRow";
import KeyboardRow from "./KeyboardRow";
import KeyboardKey from "./KeyboardKey";
import commandLayouts from "./commandLayouts";
import soundConfigs from "./soundConfigs";

export default function Keyboard() {
  const keyboardLayout = keyboardLayouts("us-en");
  const commandLayout = commandLayouts("default");
  const [leftHandSoundConfig, setLeftHandSoundConfig] = useState(
    soundConfigs("default")
  );
  const [leftHandSoundType, setLeftHandSoundType] = useState(
    leftHandSoundConfig.soundType
  );
  const [rightHandSoundConfig, setRightHandSoundConfig] = useState(
    soundConfigs("default")
  );
  const [rightHandSoundType, setRightHandSoundType] = useState(
    rightHandSoundConfig.soundType
  );

  useEffect(() => {
    setLeftHandSoundConfig(soundConfigs(leftHandSoundType));
  }, [leftHandSoundType]);

  useEffect(() => {
    setRightHandSoundConfig(soundConfigs(rightHandSoundType));
  }, [rightHandSoundType]);

  return (
    <div className="keyboard">
      <ControlRow
        leftHandSoundType={leftHandSoundType}
        setLeftHandSoundType={setLeftHandSoundType}
        rightHandSoundType={rightHandSoundType}
        setRightHandSoundType={setRightHandSoundType}
        options={soundConfigs("options")}
      />
      <KeyboardRow
        keys={keyboardLayout.topRow}
        commands={commandLayout.topRow}
        leftHandSoundConfig={leftHandSoundConfig}
        rightHandSoundConfig={rightHandSoundConfig}
      />
      <KeyboardRow
        spacerWidth="middle-row-spacer"
        keys={keyboardLayout.middleRow}
        commands={commandLayout.middleRow}
        leftHandSoundConfig={leftHandSoundConfig}
        rightHandSoundConfig={rightHandSoundConfig}
      />
      <KeyboardRow
        spacerWidth="bottom-row-spacer"
        keys={keyboardLayout.bottomRow}
        commands={commandLayout.bottomRow}
        leftHandSoundConfig={leftHandSoundConfig}
        rightHandSoundConfig={rightHandSoundConfig}
      />
      <div className="keyboard-row">
        <div className="space-bar-spacer"></div>
        <KeyboardKey
          keyboardKey={keyboardLayout.spaceBar}
          commandKey={commandLayout.spaceBar}
          soundConfig={rightHandSoundConfig}
          keyType="space-bar"
        />
      </div>
    </div>
  );
}
