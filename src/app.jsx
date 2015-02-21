var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <h1>The Pentaphone</h1>;
  }
});

React.render(
  <Hello />,
  document.getElementById('main')
);
