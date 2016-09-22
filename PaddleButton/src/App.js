
var React = require('react');

var App = React.createClass({
  scream: function () {
    alert("That's a paddlin'!");
  },

  render: function () {
    return <button onClick={this.scream}>Paddle</button>;
  }
});


export default App;
