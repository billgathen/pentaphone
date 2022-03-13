import React from "react";
import SoundControl from "./SoundControl";

export default function ControlRow(props) {
  return (
    <div className="control-row">
      <SoundControl
        options={props.options}
        soundType={props.leftHandSoundType}
        setSoundType={props.setLeftHandSoundType}
      />
      <SoundControl
        options={props.options}
        soundType={props.rightHandSoundType}
        setSoundType={props.setRightHandSoundType}
      />
    </div>
  );
}
