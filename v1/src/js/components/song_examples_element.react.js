var React     = require('react');
var KeyStore  = require('../stores/key_store');
var Constants = require('../constants/constants');

var SongExamplesElement = React.createClass({
  getInitialState: function() {
    return {
      visible: false
    }
  },
  componentDidMount: function() {
    KeyStore.addChangeListener(this.onChange);
  },
  componentDidUnmount: function() {
    KeyStore.removeChangeListener(this.onChange);
  },
  onChange: function() {
    var keyEvent = KeyStore.keyEvent();
    switch(keyEvent.name) {
      case this.props.name:
        if (keyEvent.position == Constants.KEY_DOWN) {
          this.setState({ visible: ! this.state.visible });
        } else {
          // no op
        }
        break;
      default:
    }
  },
  render: function() {
    return (
      <div className="container">
        <small>Press <label>x</label> for song examples</small>
        { this.state.visible ? this.exampleText() : <div/> }
      </div>
    );
  },
  exampleText: function() {
    return (
      <div>
        <p>
          Here are a few American folk tunes that can by played by the Pentaphone, notated to match the key layout.
        </p>
        <p>
          "Swing Low" sounds a bit odd with the high 5, 6 in the middle. :)
        </p>
        <p>
          <span className="label label-info">S</span> = space,&nbsp;
          <span className="label label-info">-</span> = hold the key down,&nbsp;
          <span className="label label-info">.</span> = rest (don't play anything)
        </p>

        <table>
          <tr>
            <th>Farmer in the Dell</th>
            <td>S - S S - S S - - - . . . . . j k - k k - k k - - - . l - l - ; l k S - j k k j j S - - -</td>
          </tr>
          <tr>
            <th>Swing Low, Sweet Chariot&nbsp;</th>
            <td>k S - - k S - S ; l - k k k k k k l - ; - - ; l k - - l k - k j S - k k k k k k j - S - - -</td>
          </tr>
          <tr>
            <th>Camptown Races</th>
            <td>l l k l ; l k - k j - - - k j - - - l l k l ; l k - j - k j S - -</td>
          </tr>
        </table>
      </div>
    );
  },
});

module.exports = SongExamplesElement;
