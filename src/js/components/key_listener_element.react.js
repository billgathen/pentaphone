var React      = require('react');
var KeyActions = require('../actions/key_actions');

var KeyListenerElement = React.createClass({
  componentDidMount: function() {
    document.addEventListener('keydown', function(e) {
      KeyActions.keyDown(e.keyCode);
    });
    document.addEventListener('keyup', function(e) {
      KeyActions.keyUp(e.keyCode);
    });
  },
  render: function() {
    return <span className='key-listener'></span>;
  }
});

module.exports = KeyListenerElement;