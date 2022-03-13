// empty objects indicate that key has no responsibilities in this mode
export default function soundConfigs(key) {
  const defaultConfig = {
    baseFrequency: 440,
    soundType: "sine",
    gain: 0.2,
  };

  return {
    default: defaultConfig,
    sine: { ...defaultConfig, soundType: "sine" },
    triangle: { ...defaultConfig, soundType: "triangle" },
    sawtooth: { ...defaultConfig, soundType: "sawtooth" },
    square: { ...defaultConfig, soundType: "square" },
    options: ["sine", "triangle", "sawtooth", "square"],
  }[key];
}
