var React = require('react');

var ChordElement = require('./chord_element.jsx');
var NoteElement  = require('./note_element.jsx');

var Note  = require('./note.js');
var Chord = require('./chord.js');

React.render(
  <ChordElement name="I"  keyCode="65" chord={ new Chord(0) } />,
  document.getElementById('I-chord')
);
React.render(
  <ChordElement name="IV" keyCode="83" chord={ new Chord(500) } />,
  document.getElementById('IV-chord')
);
React.render(
  <ChordElement name="V"  keyCode="68" chord={ new Chord(700) } />,
  document.getElementById('V-chord')
);

React.render(
  <NoteElement name="1" keyCode="32"  note={ new Note(0) } />,
  document.getElementById('1-note')
);
React.render(
  <NoteElement name="2" keyCode="74"  note={ new Note(200) } />,
  document.getElementById('2-note')
);
React.render(
  <NoteElement name="3" keyCode="75"  note={ new Note(400) } />,
  document.getElementById('3-note')
);
React.render(
  <NoteElement name="5" keyCode="76"  note={ new Note(700) } />,
  document.getElementById('5-note')
);
React.render(
  <NoteElement name="6" keyCode="186" note={ new Note(900) } />,
  document.getElementById('6-note')
);
