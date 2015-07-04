var React      = require('react');
var KeyStore  = require('../stores/key_store');
var KeyActions = require('../actions/key_actions');
var Constants = require('../constants/constants');
var keyCodeFor = {
  'I':     '83',
  'IV':    '68',
  'V':     '70',
  'vi':    '87',
  'ii':    '69',
  'iii':   '82',
  'Organ': '85',
  '8-Bit': '73',
  '1':     '32',
  '2':     '74',
  '3':     '75',
  '5':     '76',
  '6':     '59'
};

var LaunchpadCommunicatorElement = React.createClass({
  componentDidMount: function() {
    if (typeof io === 'function') { // not running from a server
      var socket = io();
      this.passLaunchpadEventsToPage(socket);
      this.passPageEventsToLaunchpad(socket);
    }
  },
  passLaunchpadEventsToPage: function(socket) {
    socket.on('keydown', function(name) { KeyActions.keyDown(keyCodeFor[name]); });
    socket.on('keyup',   function(name) { KeyActions.keyUp(keyCodeFor[name]);   });
  },
  passPageEventsToLaunchpad: function(socket) {
    KeyStore.addChangeListener(function() {
      var keyEvent = KeyStore.keyEvent();
      if (keyEvent.position == Constants.KEY_DOWN) {
        socket.emit("keydown", keyEvent.name);
      } else {
        socket.emit("keyup", keyEvent.name);
      }
    });
  },
  render: function() {
    return <span className='launchpad-listener'></span>;
  }
});

module.exports = LaunchpadCommunicatorElement;
