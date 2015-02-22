var ctx = new AudioContext();
var root = 440;
var normalVolume = 0.5;

function osc(root, detune) {
  var osc = ctx.createOscillator();
  osc.type = "sine";
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
}

Note.prototype.start = function() {
  this.gainNode.gain.value = normalVolume;
}

Note.prototype.stop = function() {
  this.gainNode.gain.value = 0;
}

module.exports = Note;