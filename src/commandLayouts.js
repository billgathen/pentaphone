// empty objects indicate that key has no responsibilities in this mode
export default function commandLayouts(key) {
  return {
    default: {
      topRow: [
        {},
        { label: "vi" },
        { label: "ii" },
        { label: "iii" },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      middleRow: [
        {},
        { label: "I" },
        { label: "IV" },
        { label: "V" },
        {},
        {},
        { label: "2", type: "note", detune: 200 },
        { label: "3", type: "note", detune: 400 },
        { label: "5", type: "note", detune: 700 },
        { label: "6", type: "note", detune: 900 },
        {},
      ],
      bottomRow: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      spaceBar: { label: "1", type: "note", detune: 0 },
    },
  }[key];
}
