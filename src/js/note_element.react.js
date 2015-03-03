var React = require('react');

var NoteElement = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'note' ]
    }
  },
  componentDidMount: function() {
    var self = this;
    document.addEventListener(this.props.name + '-start', function(e) {
      self.started();
    });
    document.addEventListener(this.props.name + '-stop', function(e) {
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