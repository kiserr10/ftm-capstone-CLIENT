import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index.js';

// import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter as Router,
	Route,
	// Link
} from 'react-router-dom';

import MarketInfo from './components/MarketInfo/';
import Profile from './components/Profile/';
import CreateProfile from './components/CreateProfile';


ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App}/>
			<Route path='/marketInfo' component={MarketInfo}/>
			<Route path='/profile' component={Profile}/>
			<Route path='/createProfile' component={CreateProfile}/>
		</div>
	</Router>
	, document.getElementById('root'));
