var Chord = require('./chord.js');

var MajorChord = function(root) {
  this.chord = new Chord(root, 0, 400, 700);
}

MajorChord.prototype.start       = function() { this.chord.start(); }
MajorChord.prototype.stop        = function() { this.chord.stop(); }
MajorChord.prototype.isToneKey   = function(keyCode) { return this.chord.isToneKey(keyCode); }
MajorChord.prototype.changeTone  = function(keyCode) { this.chord.changeTone(keyCode); }

module.exports = MajorChord;