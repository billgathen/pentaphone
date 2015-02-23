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
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === myCode) { self.pressed(); }
      else if (self.isToneKey(e.keyCode)) { self.changeTone(e.keyCode); }
    });
    document.addEventListener('keyup', function(e) {
      if (e.keyCode === myCode) { self.released(); };
    });
  },
  pressed: function() {
    if (this.isntPressed()) {
      this.props.chord.start();
      this.setState({
        classes: this.state.classes.concat('pressed')
      });
    }    
  },
  released: function() {
    if (this.isPressed()) {
      this.props.chord.stop();
      this.state.classes.splice(this.state.classes.indexOf('pressed'),1);
      this.setState({
        classes: this.state.classes
      });
    }
  },
  isToneKey: function(keyCode) {
    return this.props.chord.isToneKey(keyCode);
  },
  changeTone: function(keyCode) {
    this.props.chord.changeTone(keyCode);
  },
  isntPressed: function() {
    return this.state.classes.indexOf('pressed') === -1;
  },
  isPressed: function() {
    return ! this.isntPressed();
  },
  render: function() {
    return <span>
        <strong className={ this.state.classes.join(' ') }>{ this.props.name }</strong>
        <span> </span>
        <small>{ this.props.keyName }</small>
      </span>;
  }
});

module.exports = Chord;