var React     = require('react');
var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var NoteElement = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'note' ]
    }
  },
  componentDidMount: function() {
    KeyStore.addChangeListener(this.onChange);
  },
  componentDidUnmount: function() {
    KeyStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    var keyEvent = KeyStore.keyEvent();
    switch(keyEvent.keyName) {
      case this.props.name:
        if (keyEvent.position == Constants.KEY_DOWN) {
          this.started();
        } else {
          this.stopped();
        }
        break;
      case 'Organ':
        this.changeTone(85);
        break;
      case '8-Bit':
        this.changeTone(73);
        break;
      default:
    }
  },
  started: function() {
    if (this.isntStarted()) {
      this.props.note.start();
      this.setState({
        classes: this.state.classes.concat('pressed')
      });
    }    
  },
  stopped: function() {
    if (this.isStarted()) {
      this.props.note.stop();
      this.state.classes.splice(this.state.classes.indexOf('pressed'),1);
      this.setState({
        classes: this.state.classes
      });
    }    
  },
  changeTone: function(keyCode) {
    this.props.note.changeTone(keyCode);
  },
  isntStarted: function() {
    return this.state.classes.indexOf('pressed') === -1;
  },
  isStarted: function() {
    return ! this.isntStarted();
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