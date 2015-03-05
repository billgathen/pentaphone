var Chord = require('./chord.js');

var MinorChord = function(root, keyName) {
  this.chord = new Chord(root, keyName, 0, 300, 700);
}

MinorChord.prototype.start      = function() { this.chord.start(); }
MinorChord.prototype.stop       = function() { this.chord.stop(); }
MinorChord.prototype.changeTone = function(keyCode) { this.chord.changeTone(keyCode); }

module.exports = MinorChord;