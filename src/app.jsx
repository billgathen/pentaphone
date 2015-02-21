var React = require('react');

var Chord = React.createClass({
  render: function() {
    return <h1>{ this.props.name }</h1>;
  }
});

var Note = React.createClass({
  render: function() {
    return <h2>{ this.props.name }</h2>;
  }
});

React.render(<Chord name="I" />, document.getElementById('I-chord'));
React.render(<Chord name="IV" />, document.getElementById('IV-chord'));
React.render(<Chord name="V" />, document.getElementById('V-chord'));

React.render(<Note name="1" />, document.getElementById('1-note'));
React.render(<Note name="2" />, document.getElementById('2-note'));
React.render(<Note name="3" />, document.getElementById('3-note'));
React.render(<Note name="5" />, document.getElementById('5-note'));
React.render(<Note name="6" />, document.getElementById('6-note'));
