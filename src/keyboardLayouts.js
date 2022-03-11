export default function keyboardLayouts(key) {
  return {
    "us-en": {
      topRow: [
        { label: "q", code: "KeyQ" },
        { label: "w", code: "KeyW" },
        { label: "e", code: "KeyE" },
        { label: "r", code: "KeyR" },
        { label: "t", code: "KeyT" },
        { label: "y", code: "KeyY" },
        { label: "u", code: "KeyU" },
        { label: "i", code: "KeyI" },
        { label: "o", code: "KeyO" },
        { label: "p", code: "KeyP" },
        { label: "[", code: "BracketLeft" },
        { label: "]", code: "BracketRight" },
      ],
      middleRow: [
        { label: "a", code: "KeyA" },
        { label: "s", code: "KeyS" },
        { label: "d", code: "KeyD" },
        { label: "f", code: "KeyF" },
        { label: "g", code: "KeyG" },
        { label: "h", code: "KeyH" },
        { label: "j", code: "KeyJ" },
        { label: "k", code: "KeyK" },
        { label: "l", code: "KeyL" },
        { label: ";", code: "Semicolon" },
        { label: "'", code: "Quote" },
      ],
      bottomRow: [
        { label: "z", code: "KeyZ" },
        { label: "x", code: "KeyX" },
        { label: "c", code: "KeyC" },
        { label: "v", code: "KeyV" },
        { label: "b", code: "KeyB" },
        { label: "n", code: "KeyN" },
        { label: "m", code: "KeyM" },
        { label: ",", code: "Comma" },
        { label: ".", code: "Period" },
        { label: "/", code: "Slash" },
      ],
      spaceBar: { label: "", code: "Space" },
    },
  }[key];
}