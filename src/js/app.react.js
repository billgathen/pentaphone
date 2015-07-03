var React = require('react');

var ChordElement                 = require('./components/chord_element.react');
var NoteElement                  = require('./components/note_element.react');
var ToneElement                  = require('./components/tone_element.react');
var KeyListenerElement           = require('./components/key_listener_element.react');
var LaunchpadCommunicatorElement = require('./components/launchpad_communicator_element.react');

var Note       = require('./components/note');
var MajorChord = require('./components/major_chord');
var MinorChord = require('./components/minor_chord');

React.render(
  <ChordElement name="I"  keyName="s" />,
  document.getElementById('I-chord')
);
React.render(
  <ChordElement name="IV" keyName="d" />,
  document.getElementById('IV-chord')
);
React.render(
  <ChordElement name="V"  keyName="f" />,
  document.getElementById('V-chord')
);

React.render(
  <ChordElement name="vi"  keyName="w" />,
  document.getElementById('vi-chord')
);
React.render(
  <ChordElement name="ii"  keyName="e" />,
  document.getElementById('ii-chord')
);
React.render(
  <ChordElement name="iii" keyName="r" />,
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
  <NoteElement name="1" keyName="<spacebar>" />,
  document.getElementById('1-note')
);

React.render(
  <NoteElement name="2" keyName="j" />,
  document.getElementById('2-note')
);

React.render(
  <NoteElement name="3" keyName="k" />,
  document.getElementById('3-note')
);
React.render(
  <NoteElement name="5" keyName="l" />,
  document.getElementById('5-note')
);
React.render(
  <NoteElement name="6" keyName=";" />,
  document.getElementById('6-note')
);

React.render(
  <KeyListenerElement />,
  document.getElementById('key-listener')
);

React.render(
  <LaunchpadCommunicatorElement />,
  document.getElementById('launchpad-listener')
);

// Sound components

new MajorChord(0,    "I",  "2nd");
new MajorChord(500,  "IV", "1st");
new MajorChord(-500, "V",  "root");

new MinorChord(-300, "vi",  "root");
new MinorChord(200,  "ii",  "2nd");
new MinorChord(400,  "iii", "2nd");

new Note(0, "1");
new Note(200, "2");
new Note(400, "3");
new Note(700, "5");
new Note(900, "6");
