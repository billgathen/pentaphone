import React from "react";

export default function ToneControl({ options, toneOption, setToneOption }) {
  const selectOption = (e) => {
    setToneOption(e.target.value);
  };
  return (
    <div>
      <select value={toneOption} onChange={selectOption}>
        {options.map((val) => (
          <option key={val}>{val}</option>
        ))}
      </select>
    </div>
  );
}
