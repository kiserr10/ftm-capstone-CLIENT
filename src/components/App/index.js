import React, { Component } from 'react';
import './App.css';
// import { ReactDOM } from 'react-dom';
import Header from '../Header/index.js';
// import { getData } from '../API';
import { Jumbotron, FormControl } from 'react-bootstrap';
import { getData } from '../API';
class App extends Component {
	constructor(props){
		super(props);
		this.selectFarm = this.selectFarm.bind(this);
		this.state = {
			markets: []
		};
	}

	componentDidMount(){
		getData()
			.then(result => {
				this.setState({
					markets: result.data
				});
				const market = this.state.markets;
				console.log(market);
				// this.makeDropDownItems(market);
			});
	}

	makeDropDownItems(){
		return this.state.markets.map(market =>{
			return (
				<option key={market.id} value={market.id}>{market.name}</option>
			);
		});
	}

	selectFarm(e){
		console.log(e.target.value);
		this.props.history.push("/marketInfo/" + e.target.value);
	}

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
						<FormControl componentClass="select" placeholder="select" onChange={this.selectFarm}>
							<option value="select">select</option>
							{this.makeDropDownItems()}
						</FormControl>
					</div>
					<img className="main-app-pic" alt="farmers-market-background" src={require('../../images/clip-image-1.png')}/>
				</div>
			</div>
		);
	}
}

export default App;
