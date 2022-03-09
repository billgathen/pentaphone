var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var ctx = findAudioContext();
var root = 440;
var defaultForm = "sine";
var defaultGain = 0.3;
var tones = {
  85: { "form": "sine", "gain": 0.3 },
  73: { "form": "square", "gain": 0.05 }
}

function findAudioContext() {
  if (typeof AudioContext !== 'undefined') {
    return new AudioContext();       // Recent Chrome and Firefox
  } else if (typeof webkitAudioContext !== 'undefined') {
    return new webkitAudioContext(); // Safari, older Chrome
  } else if (typeof mozAudioContext !== 'undefined') {
    return new mozAudioContext();    // Older Firefox
  } else {
    throw new Error("Audio Context not supported");
  }
}

function osc(root, detune) {
  var osc = ctx.createOscillator();
  osc.type = defaultForm;
  osc.frequency.value = root;
  osc.detune.value    = detune;
  osc.start(ctx.currentTime);

  return osc;
};

function gain() {
  var gainNode = ctx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(ctx.destination);

  return gainNode;
}

var Note = function(detune, keyName) {
  this.osc = osc(root, detune);
  this.gainNode = gain();
  this.osc.connect(this.gainNode);
  this.gain = defaultGain;
  this.keyName = keyName;

  // Make sure this is still this on the callback
  KeyStore.addChangeListener(this.onChange.bind(this));
}

Note.prototype.onChange = function() {
  var keyEvent = KeyStore.keyEvent();
  switch(keyEvent.name) {
    case this.keyName:
      if (keyEvent.position == Constants.KEY_DOWN) {
        this.start();
      } else {
        this.stop();
      }
      break;
    case 'Organ':
      this.changeTone(85);
      break;
    case '8-Bit':
      this.changeTone(73);
      break;
    default:
  }
}

Note.prototype.start = function() {
  this.gainNode.gain.value = this.gain;
}

Note.prototype.stop = function() {
  this.gainNode.gain.value = 0;
}

Note.prototype.changeTone = function(keyCode) {
  this.osc.type = tones[keyCode]["form"];
  this.gain = tones[keyCode]["gain"];
}

module.exports = Note;