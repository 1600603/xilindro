import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import Home from './pages/Home';

const trackingId = 'UA-73866939-10';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
