import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var Button = React.createClass({
	render: function() {
		return <button>PRESS ME</button>
	}
});

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
