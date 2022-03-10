const audioCtx = new AudioContext();
const defaultFrequency = 440;
const defaultType = "sine";
const defaultGain = 0.2;

export const getNote = (detune, config) => {
  const osc = audioCtx.createOscillator();
  osc.detune.value = detune;
  const gain = audioCtx.createGain();
  gain.gain.value = 0;
  const onGain = config.defaultGain || defaultGain;
  osc.type = config.defaultType || defaultType;
  osc.frequency.value = config.defaultFrequency || defaultFrequency;
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(audioCtx.currentTime);

  const changeGain = (currentGain, newGain) => {
    gain.gain.setValueAtTime(currentGain, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(newGain, audioCtx.currentTime + 0.01);
  };

  return {
    on: () => {
      console.log("on");
      changeGain(0, onGain);
    },
    off: () => {
      console.log("off");
      changeGain(onGain, 0);
    },
  };
};

const SoundManager = {
  getNote,
};

export default SoundManager;
