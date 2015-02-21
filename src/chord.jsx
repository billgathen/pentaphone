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
        classes: this.state.classes.concat('pressed')
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

module.exports = Chord;