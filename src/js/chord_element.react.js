var React = require('react');

var Chord = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'chord' ]
    }
  },
  componentDidMount: function() {
    var name = this.props.name;
    var self = this;
    document.addEventListener(name + '-start', function(e) {
      self.started();
    });
    document.addEventListener(name + '-stop', function(e) {
      self.stopped();
    });
    document.addEventListener('Organ-start', function(e) {
      self.changeTone(85);
    });
    document.addEventListener('8-Bit-start', function(e) {
      self.changeTone(73);
    });
  },
  started: function() {
    if (this.isntStarted()) {
      this.props.chord.start();
      this.setState({
        classes: this.state.classes.concat('started')
      });
    }    
  },
  stopped: function() {
    if (this.isStarted()) {
      this.props.chord.stop();
      this.state.classes.splice(this.state.classes.indexOf('started'),1);
      this.setState({
        classes: this.state.classes
      });
    }
  },
  changeTone: function(keyCode) {
    this.props.chord.changeTone(keyCode);
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