var React = require('react');

var ChordElement       = require('./chord_element.react');
var NoteElement        = require('./note_element.react');
var ToneElement        = require('./tone_element.react');
var KeyListenerElement = require('./key_listener_element.react');

var Note       = require('./note.js');
var MajorChord = require('./major_chord.js');
var MinorChord = require('./minor_chord.js');

React.render(
  <ChordElement name="I"  keyName="s" chord={ new MajorChord(0) } />,
  document.getElementById('I-chord')
);
React.render(
  <ChordElement name="IV" keyName="d" chord={ new MajorChord(500) } />,
  document.getElementById('IV-chord')
);
React.render(
  <ChordElement name="V"  keyName="f" chord={ new MajorChord(700) } />,
  document.getElementById('V-chord')
);

React.render(
  <ChordElement name="vi"  keyName="w" chord={ new MinorChord(900) } />,
  document.getElementById('vi-chord')
);
React.render(
  <ChordElement name="ii"  keyName="e" chord={ new MinorChord(200) } />,
  document.getElementById('ii-chord')
);
React.render(
  <ChordElement name="iii" keyName="r" chord={ new MinorChord(400) } />,
  document.getElementById('iii-chord')
);

React.render(
  <ToneElement name="Organ" keyName="u" />,
  document.getElementById('organ')
);
React.render(
  <ToneElement name="8-Bit" keyName="i" />,
  document.getElementById('8-bit')
);

React.render(
  <NoteElement name="1" keyName="<spacebar>" note={ new Note(0) } />,
  document.getElementById('1-note')
);
React.render(
  <NoteElement name="2" keyName="j" note={ new Note(200) } />,
  document.getElementById('2-note')
);
React.render(
  <NoteElement name="3" keyName="k" note={ new Note(400) } />,
  document.getElementById('3-note')
);
React.render(
  <NoteElement name="5" keyName="l" note={ new Note(700) } />,
  document.getElementById('5-note')
);
React.render(
  <NoteElement name="6" keyName=";" note={ new Note(900) } />,
  document.getElementById('6-note')
);

React.render(
  <KeyListenerElement />,
  document.getElementById('key-listener')
);