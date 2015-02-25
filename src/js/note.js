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

var Note = function(detune) {
  this.osc = osc(root, detune);
  this.gainNode = gain();
  this.osc.connect(this.gainNode);
  this.gain = defaultGain;
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