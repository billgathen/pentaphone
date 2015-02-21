var React = require('react');
var Chord = require('./chord.jsx');
var Note  = require('./note.jsx');

React.render(<Chord name="I"  keyCode="97"  />, document.getElementById('I-chord'));
React.render(<Chord name="IV" keyCode="115" />, document.getElementById('IV-chord'));
React.render(<Chord name="V"  keyCode="100" />, document.getElementById('V-chord'));

React.render(<Note name="1" keyCode="32" />,  document.getElementById('1-note'));
React.render(<Note name="2" keyCode="106" />, document.getElementById('2-note'));
React.render(<Note name="3" keyCode="107" />, document.getElementById('3-note'));
React.render(<Note name="5" keyCode="108" />, document.getElementById('5-note'));
React.render(<Note name="6" keyCode="59" />,  document.getElementById('6-note'));
