import React from "react";

export default function SoundControl({ options, soundType, setSoundType }) {
  const selectType = (e) => {
    setSoundType(e.target.value);
  };
  return (
    <div className="sound-control">
      <div className="sound-control-label">Tone</div>
      <select value={soundType} onChange={selectType}>
        {options.map((val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
    </div>
  );
}
