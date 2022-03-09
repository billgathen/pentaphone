var Chord = require('./chord.js');

var MinorChord = function(root, keyName, inversion) {
  var inversions = {
    "root": [ 0, 300, 700 ],
    "1st":  [ -900, -500, 0 ],
    "2nd":  [ -500, 0, 300 ]
  };
  var note1 = inversions[inversion][0];
  var note2 = inversions[inversion][1];
  var note3 = inversions[inversion][2];
  this.chord = new Chord(root, keyName, note1, note2, note3);
}

MinorChord.prototype.start      = function() { this.chord.start(); }
MinorChord.prototype.stop       = function() { this.chord.stop(); }
MinorChord.prototype.changeTone = function(keyCode) { this.chord.changeTone(keyCode); }

module.exports = MinorChord;