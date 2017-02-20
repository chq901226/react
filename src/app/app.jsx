import React from 'react';
import ReactDom from 'react-dom';
import Header from './'

const appDom = <div>
	<header/>
	<main/>
	<footer/>
</div>

const App = React.createClass({
	render() {
		return (appDom)
	}
});

ReactDom.render(<App/>, document.getElementById('app'));

export default App;