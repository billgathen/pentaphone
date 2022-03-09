var React = require('react');
var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var ToneElement = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'tone' ]
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
    switch(keyEvent.name) {
      case this.props.name:
        if (keyEvent.position == Constants.KEY_DOWN) {
          this.pressed();
        } else {
          this.released();
        }
        break;
      default:
    }
  },
  pressed: function() {
    if (this.isntPressed()) {
      this.setState({
        classes: this.state.classes.concat('pressed')
      });
    }    
  },
  released: function() {
    if (this.isPressed()) {
      this.state.classes.splice(this.state.classes.indexOf('pressed'),1);
      this.setState({
        classes: this.state.classes
      });
    }    
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

module.exports = ToneElement;