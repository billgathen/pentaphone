var Note = require('./note.js');

var Chord = function(detune) {
  var octaveDown = detune - 1200;
  this.note1 = new Note(octaveDown);
  this.note2 = new Note(octaveDown + 400);
  this.note3 = new Note(octaveDown + 700);
}

Chord.prototype.start = function() {
  this.note1.start();
  this.note2.start();
  this.note3.start();
}

Chord.prototype.stop = function() {
  this.note1.stop();
  this.note2.stop();
  this.note3.stop();
}

module.exports = Chord;