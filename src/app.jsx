var React = require('react');
var Chord = require('./chord.jsx');
var Note  = require('./note.jsx');

var ctx = new AudioContext();
var a_note = 440;

//
// Start/stop only works once!
//
function osc(root, detune) {
  var osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = root;
  osc.detune.value    = detune;
  var gainNode = ctx.createGain();
  gainNode.gain.value = 0.5;

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  return osc;
};

React.render(<Chord name="I"  keyCode="65" />, document.getElementById('I-chord'));
React.render(<Chord name="IV" keyCode="83" />, document.getElementById('IV-chord'));
React.render(<Chord name="V"  keyCode="68" />, document.getElementById('V-chord'));

React.render(<Note name="1" keyCode="32"  oscillator={ osc(a_note, 0) }/>, document.getElementById('1-note'));
React.render(<Note name="2" keyCode="74"  oscillator={ osc(a_note, 200) }/>, document.getElementById('2-note'));
React.render(<Note name="3" keyCode="75"  oscillator={ osc(a_note, 400) }/>, document.getElementById('3-note'));
React.render(<Note name="5" keyCode="76"  oscillator={ osc(a_note, 700) }/>, document.getElementById('5-note'));
React.render(<Note name="6" keyCode="186" oscillator={ osc(a_note, 900) }/>, document.getElementById('6-note'));
