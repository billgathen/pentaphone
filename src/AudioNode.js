export default function configure(config) {
  const audioCtx = new AudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const defaultGain = 0.3;
  gain.gain.value = defaultGain;
  osc.type = "sine";
  osc.frequency.value = 440;
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(audioCtx.currentTime);

  const changeGain = (newGain) => {
    gain.gain.setValueAtTime(0, 0);
    gain.gain.setTargetAtTime(newGain, 0, 0.01);
  };

  return {
    on: () => {
      if (gain.gain.value === 0) {
        audioCtx.resume(); // needs to start as a result of a "user gesture"
        changeGain(0, defaultGain);
      }
    },
    off: () => {
      if (gain.gain.value !== 0) {
        audioCtx.suspend();
        changeGain(defaultGain, 0);
      }
    },
  };
}
