var Dispatcher   = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants    = require('../constants/constants');
var assign       = require('object-assign');

var CHANGE_EVENT   = 'change';
var eventTypeForCode = {
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
KeyStore.setMaxListeners(20);

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