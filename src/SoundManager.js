const audioCtx = new AudioContext();
const defaultFrequency = 440;
const defaultType = "sine";
const defaultGain = 0.2;

export const getNote = (command, config) => {
  const osc = audioCtx.createOscillator();
  osc.detune.value = command.detune;
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

const buildChordOffsets = (tonality, inversion) => {
  const offsets = {
    major: {
      root: [0, 400, 700],
      "1st": [-800, -500, 0],
      "2nd": [-500, 0, 400],
    },
    minor: {
      root: [0, 300, 700],
      "1st": [-900, -500, 0],
      "2nd": [-500, 0, 300],
    },
  };

  return offsets[tonality][inversion];
};

export const getChord = ({ detune, tonality, inversion }, config) => {
  console.log([detune, tonality, inversion]);
  const notes = [];
  buildChordOffsets(tonality, inversion).forEach((noteOffset) => {
    notes.push(getNote({ detune: detune + noteOffset }, config));
  });

  return {
    on: () => {
      console.log("chordOn");
      notes.forEach((note) => note.on());
    },
    off: () => {
      console.log("chordOff");
      notes.forEach((note) => note.off());
    },
  };
};

const SoundManager = {
  getNote,
  getChord,
};

export default SoundManager;
