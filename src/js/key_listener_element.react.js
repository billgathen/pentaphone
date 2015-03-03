var React = require('react');

var KeyListenerElement = React.createClass({
  getInitialState: function() {
    return {
      eventTypeForCode: {
        '83':  'I',
        '68':  'IV',
        '70':  'V',
        '87':  'vi',
        '69':  'ii',
        '82':  'iii',
        '85':  'Organ',
        '73':  '8-Bit',
        '32':  '1',
        '74':  '2',
        '75':  '3',
        '76':  '5',
        '59':  '6',
        '186': '6'
      }
    }
  },
  componentDidMount: function() {
    var self = this;
    document.addEventListener('keydown', function(e) {
      var eventType = self.state.eventTypeForCode[String(e.keyCode)];
      if (eventType) {
        var evt = new document.defaultView.CustomEvent(eventType + '-start');
        document.dispatchEvent(evt);
      }
    });
    document.addEventListener('keyup', function(e) {
      var eventType = self.state.eventTypeForCode[String(e.keyCode)];
      if (eventType) {
        var evt = new document.defaultView.CustomEvent(eventType + '-stop');
        document.dispatchEvent(evt);
      }
    });
  },
  render: function() {
    return <span className='key-listener'></span>;
  }
});

module.exports = KeyListenerElement;