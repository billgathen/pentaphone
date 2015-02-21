var React = require('react');

var Chord = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'chord' ]
    }
  },
  componentDidMount: function() {
    var myCode = Number(this.props.keyCode);
    var self = this;
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === myCode) { self.pressed(); };
    });
  },
  pressed: function() {
    if (this.isntPressed()) {
      this.setState({
        classes: this.state.classes.push('pressed')
      });
    }    
  },
  isntPressed: function() {
    return this.state.classes.indexOf('pressed') === -1;
  },
  render: function() {
    return <h1 className={ this.state.classes.join(' ') }>{ this.props.name }</h1>;
  }
});

var Note = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'note' ]
    }
  },
  componentDidMount: function() {
    var self = this;
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === Number(self.props.keyCode)) {
        console.log(self.props.name + " pressed");
      };
    });
  },
  render: function() {
    return <h2 className={ this.state.classes.join(' ') }>{ this.props.name }</h2>;
  }
});

React.render(<Chord name="I"  keyCode="97"  />, document.getElementById('I-chord'));
React.render(<Chord name="IV" keyCode="115" />, document.getElementById('IV-chord'));
React.render(<Chord name="V"  keyCode="100" />, document.getElementById('V-chord'));

React.render(<Note name="1" keyCode="32" />,  document.getElementById('1-note'));
React.render(<Note name="2" keyCode="106" />, document.getElementById('2-note'));
React.render(<Note name="3" keyCode="107" />, document.getElementById('3-note'));
React.render(<Note name="5" keyCode="108" />, document.getElementById('5-note'));
React.render(<Note name="6" keyCode="59" />,  document.getElementById('6-note'));
