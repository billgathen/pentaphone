import React from "react";
import ToneControl from "./ToneControl";

export default function ControlRow(props) {
  return (
    <div className="control-row">
      <ToneControl
        options={props.options}
        toneOption={props.leftHandToneOption}
        setToneOption={props.setLeftHandToneOption}
      />
      <ToneControl
        options={props.options}
        toneOption={props.rightHandToneOption}
        setToneOption={props.setRightHandToneOption}
      />
    </div>
  );
}
