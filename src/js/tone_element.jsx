var React = require('react');

var ToneElement = React.createClass({
  getInitialState: function() {
    return {
      classes: [ 'tone' ]
    }
  },
  componentDidMount: function() {
    var myCode = Number(this.props.keyCode);
    var self = this;
    document.addEventListener(this.props.name + '-start', function(e) {
      self.pressed();
    });
    document.addEventListener(this.props.name + '-stop', function(e) {
      self.released();
    });
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