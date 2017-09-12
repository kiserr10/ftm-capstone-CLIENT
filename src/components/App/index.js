import React, { Component } from 'react';
import './App.css';
import { ReactDOM } from 'react-dom';
import Header from '../Header/index.js';
import { getData } from '../API';

class App extends Component {
	render() {
		return (
			<div>
				<div className="main-app-body">
					
				</div>
				<Header />
			</div>

		);
	}
}

export default App;
