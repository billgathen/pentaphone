var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var ctx = new AudioContext();
var root = 440;
var defaultForm = "sine";
var defaultGain = 0.5;
var tones = {
  85: { "form": "sine", "gain": 0.5 },
  73: { "form": "square", "gain": 0.05 }
}

function osc(root, detune) {
  var osc = ctx.createOscillator();
  osc.type = defaultForm;
  osc.frequency.value = root;
  osc.detune.value    = detune;
  osc.start();

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