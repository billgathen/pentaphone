var React     = require('react');
var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var Chord = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'chord' ]
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
          this.started();
        } else {
          this.stopped();
        }
        break;
    }
  },
  started: function() {
    if (this.isntStarted()) {
      this.setState({
        classes: this.state.classes.concat('started')
      });
    }    
  },
  stopped: function() {
    if (this.isStarted()) {
      this.state.classes.splice(this.state.classes.indexOf('started'),1);
      this.setState({
        classes: this.state.classes
      });
    }
  },
  isntStarted: function() {
    return this.state.classes.indexOf('started') === -1;
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

module.exports = Chord;