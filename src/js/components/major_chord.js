var Chord = require('./chord.js');

var MajorChord = function(root, keyName, inversion) {
  var inversions = {
    "root": [ 0, 400, 700 ],
    "1st":  [ -800, -500, 0 ],
    "2nd":  [ -500, 0, 400 ]
  };
  var note1 = inversions[inversion][0];
  var note2 = inversions[inversion][1];
  var note3 = inversions[inversion][2];
  this.chord = new Chord(root, keyName, note1, note2, note3);
}

MajorChord.prototype.start       = function() { this.chord.start(); }
MajorChord.prototype.stop        = function() { this.chord.stop(); }
MajorChord.prototype.changeTone  = function(keyCode) { this.chord.changeTone(keyCode); }

module.exports = MajorChord;