var React = require('react');

var ChordElement = require('./chord_element.jsx');
var NoteElement  = require('./note_element.jsx');

var Note       = require('./note.js');
var MajorChord = require('./major_chord.js');
var MinorChord = require('./minor_chord.js');

React.render(
  <ChordElement name="I"  keyCode="65" keyName="a" chord={ new MajorChord(0) } />,
  document.getElementById('I-chord')
);
React.render(
  <ChordElement name="IV" keyCode="83" keyName="s" chord={ new MajorChord(500) } />,
  document.getElementById('IV-chord')
);
React.render(
  <ChordElement name="V"  keyCode="68" keyName="d" chord={ new MajorChord(700) } />,
  document.getElementById('V-chord')
);

React.render(
  <ChordElement name="vi"  keyCode="81" keyName="q" chord={ new MinorChord(900) } />,
  document.getElementById('vi-chord')
);
React.render(
  <ChordElement name="ii"  keyCode="87" keyName="w" chord={ new MinorChord(200) } />,
  document.getElementById('ii-chord')
);
React.render(
  <ChordElement name="iii" keyCode="69" keyName="e" chord={ new MinorChord(400) } />,
  document.getElementById('iii-chord')
);

React.render(
  <NoteElement name="1" keyCode="32"  keyName="<spacebar>" note={ new Note(0) } />,
  document.getElementById('1-note')
);
React.render(
  <NoteElement name="2" keyCode="74"  keyName="j" note={ new Note(200) } />,
  document.getElementById('2-note')
);
React.render(
  <NoteElement name="3" keyCode="75"  keyName="k" note={ new Note(400) } />,
  document.getElementById('3-note')
);
React.render(
  <NoteElement name="5" keyCode="76"  keyName="l" note={ new Note(700) } />,
  document.getElementById('5-note')
);
React.render(
  <NoteElement name="6" keyCode="186" keyName=";" note={ new Note(900) } />,
  document.getElementById('6-note')
);
