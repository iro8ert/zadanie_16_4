import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

function Title(props) {
	return (
		<h1>{props.title}</h1>
	)
};
