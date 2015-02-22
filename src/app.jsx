var React = require('react');
var Chord = require('./chord.jsx');
var Note  = require('./note.jsx');

React.render(<Chord name="I"  keyCode="65" />, document.getElementById('I-chord'));
React.render(<Chord name="IV" keyCode="83" />, document.getElementById('IV-chord'));
React.render(<Chord name="V"  keyCode="68" />, document.getElementById('V-chord'));

React.render(<Note name="1" keyCode="32" />,  document.getElementById('1-note'));
React.render(<Note name="2" keyCode="74" />,  document.getElementById('2-note'));
React.render(<Note name="3" keyCode="75" />,  document.getElementById('3-note'));
React.render(<Note name="5" keyCode="76" />,  document.getElementById('5-note'));
React.render(<Note name="6" keyCode="186" />, document.getElementById('6-note'));
