const audioCtx = new AudioContext();
const defaultFrequency = 440;
const defaultType = "sine";
const defaultGain = 0.2;

export const getNote = (command, config) => {
  const osc = audioCtx.createOscillator();
  osc.detune.value = command.detune;
  const gain = audioCtx.createGain();
  gain.gain.value = 0;
  let onGain = config.gain || defaultGain;
  osc.type = config.soundType || defaultType;
  osc.frequency.value = config.baseFrequency || defaultFrequency;
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(audioCtx.currentTime);

  const changeGain = (currentGain, newGain) => {
    gain.gain.setValueAtTime(currentGain, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(newGain, audioCtx.currentTime + 0.01);
  };

  return {
    on: () => {
      changeGain(0, onGain);
    },
    off: () => {
      changeGain(onGain, 0);
    },
    configure: (config) => {
      onGain = config.gain || defaultGain;
      osc.type = config.soundType || defaultType;
      osc.frequency.value = config.baseFrequency || defaultFrequency;
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
  const notes = [];
  buildChordOffsets(tonality, inversion).forEach((noteOffset) => {
    notes.push(getNote({ detune: detune + noteOffset }, config));
  });

  return {
    on: () => {
      notes.forEach((note) => note.on());
    },
    off: () => {
      notes.forEach((note) => note.off());
    },
    configure: (config) => {
      notes.forEach((note) => note.configure(config));
    },
  };
};

const getSound = (command, config) => {
  let sound = null;
  if (command.type === "note") {
    sound = getNote(command, config);
  } else if (command.type === "chord") {
    sound = getChord(command, config);
  }
  sound.on();
  return sound;
};

const SoundManager = {
  getSound,
};

export default SoundManager;
