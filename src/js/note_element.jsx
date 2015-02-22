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
      if (e.keyCode === myCode) { self.pressed(); };
    });
    document.addEventListener('keyup', function(e) {
      if (e.keyCode === myCode) { self.released(); };
    });
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