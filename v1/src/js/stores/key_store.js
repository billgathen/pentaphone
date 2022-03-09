var Dispatcher   = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants    = require('../constants/constants');
var assign       = require('object-assign');

var CHANGE_EVENT   = 'change';
var eventTypeForCode = {
  '83':  'I',     // s
  '68':  'IV',    // d
  '70':  'V',     // f
  '87':  'vi',    // w
  '122': 'vi',    // z
  '69':  'ii',    // e
  '82':  'iii',   // r
  '85':  'Organ', // u
  '73':  '8-Bit', // i
  '32':  '1',     // spacebar
  '74':  '2',     // j
  '75':  '3',     // k
  '76':  '5',     // l
  '59':  '6',     // ; (Firefox)
  '186': '6',     // ;
  '109': '6',     // m
  '0':   '6',     // ö (German umlauts not correctly recognized)
  '88':  'Examples'
};
var state = {};

var KeyStore = assign({}, EventEmitter.prototype, {
  keyEvent: function() {
    return state;
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});
KeyStore.setMaxListeners(50);

Dispatcher.register(function(action){
  switch(action.actionType) {
    case Constants.KEY_DOWN:
      state = { name: eventTypeForCode[action.keyCode], position: Constants.KEY_DOWN };
      KeyStore.emitChange();
      break;
    case Constants.KEY_UP:
      state = { name: eventTypeForCode[action.keyCode], position: Constants.KEY_UP };
      KeyStore.emitChange();
      break;
    default:
      // must be event we don't care about
  }
});

module.exports = KeyStore;
