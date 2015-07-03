var React      = require('react');
var KeyActions = require('../actions/key_actions');
var keyCodeFor = {
  'I':     '83',
  'IV':    '68',
  'V':     '70',
  'vi':    '87',
  'ii':    '69',
  'iii':   '82',
  'organ': '85',
  '8bit':  '73',
  '1':     '32',
  '2':     '74',
  '3':     '75',
  '5':     '76',
  '6':     '59'
};

var LaunchpadListenerElement = React.createClass({
  componentDidMount: function() {
    var socket = io();
    socket.on('keydown', function(name) { KeyActions.keyDown(keyCodeFor[name]); });
    socket.on('keyup',   function(name) { KeyActions.keyUp(keyCodeFor[name]);   });
  },
  render: function() {
    return <span className='launchpad-listener'></span>;
  }
});

module.exports = LaunchpadListenerElement;
