// empty objects indicate that key has no responsibilities in this mode
export default function soundConfigs(key) {
  return {
    default: {
      defaultFrequency: 440,
      defaultType: "sine",
      defaultGain: 0.2,
    },
  }[key];
}
