// empty objects indicate that key has no responsibilities in this mode
export default function commandLayouts(key) {
  return {
    default: {
      topRow: [
        {},
        {
          label: "vi",
          type: "chord",
          detune: -300,
          tonality: "minor",
          inversion: "root",
        },
        {
          label: "ii",
          type: "chord",
          detune: 200,
          tonality: "minor",
          inversion: "2nd",
        },
        {
          label: "iii",
          type: "chord",
          detune: 400,
          tonality: "minor",
          inversion: "2nd",
        },
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
        {
          label: "I",
          type: "chord",
          detune: 0,
          tonality: "major",
          inversion: "2nd",
        },
        {
          label: "IV",
          type: "chord",
          detune: 500,
          tonality: "major",
          inversion: "1st",
        },
        {
          label: "V",
          type: "chord",
          detune: -500,
          tonality: "major",
          inversion: "root",
        },
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
