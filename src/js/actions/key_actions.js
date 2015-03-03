var Dispatcher = require('../dispatcher/dispatcher');
var Constants  = require('../constants/constants');

var KeyActions = {
  keyDown: function(keyCode) {
    Dispatcher.dispatch({
      actionType: Constants.KEY_DOWN,
      keyCode:    keyCode.toString()
    })
  },
  keyUp:   function(keyCode) {
    Dispatcher.dispatch({
      actionType: Constants.KEY_UP,
      keyCode:    keyCode.toString()
    })
  }
}

module.exports = KeyActions;