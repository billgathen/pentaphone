var React = require('react');

var NoteElement = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'note' ]
    }
  },
  componentDidMount: function() {
    var myCode = Number(this.props.keyCode);
    var self = this;
    document.addEventListener('keydown', function(e) {
      if (self.matches(e.keyCode)) { self.pressed(); }
      else if (self.isToneKey(e.keyCode)) { self.changeTone(e.keyCode); }
    });
    document.addEventListener('keyup', function(e) {
      if (self.matches(e.keyCode)) { self.released(); };
    });
  },
  matches: function(keyCode) {
    var matched = false;
    this.props.keyCode.split(',').forEach(function(myCode) {
      if (String(keyCode) === myCode) {
        matched = true;
      }
    });
    return matched;
  },
  pressed: function() {
    if (this.isntPressed()) {
      this.props.note.start();
      this.setState({
        classes: this.state.classes.concat('pressed')
      });
    }    
  },
  released: function() {
    if (this.isPressed()) {
      this.props.note.stop();
      this.state.classes.splice(this.state.classes.indexOf('pressed'),1);
      this.setState({
        classes: this.state.classes
      });
    }    
  },
  isToneKey: function(keyCode) {
    return this.props.note.isToneKey(keyCode);
  },
  changeTone: function(keyCode) {
    this.props.note.changeTone(keyCode);
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

module.exports = NoteElement;