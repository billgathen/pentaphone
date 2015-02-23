var Chord = require('./chord.js');

var MinorChord = function(root) {
  this.chord = new Chord(root, 0, 300, 700);
}

MinorChord.prototype.start      = function() { this.chord.start(); }
MinorChord.prototype.stop       = function() { this.chord.stop(); }
MinorChord.prototype.isToneKey  = function(keyCode) { return this.chord.isToneKey(keyCode); }
MinorChord.prototype.changeTone = function(keyCode) { this.chord.changeTone(keyCode); }

module.exports = MinorChord;