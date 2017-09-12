import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';
import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import MarketInfo from './components/MarketInfo/index';


ReactDOM.render(
	<Router>
		<div>
			<Route path='/' component={App}/>
			<Route exact path='/marketInfo' component={MarketInfo}/>
		</div>
	</Router>
	, document.getElementById('root'));