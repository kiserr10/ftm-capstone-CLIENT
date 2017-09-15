import React, { Component } from 'react';
import './App.css';
// import { ReactDOM } from 'react-dom';
import Header from '../Header/index.js';
// import { getData } from '../API';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="main-app-body">
					<div className="jumbotron-box col-6">
						<Jumbotron>
							<h1>Farm To Market</h1>
							<p>An Platform for Farmers, Markets, and Consumers</p>
						</Jumbotron>
					</div>
					<img className="main-app-pic" alt="farmers-market-background" src={require('../../images/clip-image-1.png')}/>
				</div>
			</div>
		);
	}
}

export default App;
