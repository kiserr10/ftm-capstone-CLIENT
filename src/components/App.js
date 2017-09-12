import React, { Component } from 'react';
import '../App.css';
import { ReactDOM, mountNode } from 'react-dom';
import Header from './Header';
import Chart from './Chart';
import { getData } from './API';

class App extends Component {
	constructor(){
		super();
		this.state = {
			markets: [],
			chartData: {}
		};
	}

	componentWillMount(){
		this.getChartData();
	}

	componentDidMount(){
		getData()
			.then(result => {
				this.setState({
					markets: result.data
				});
				console.log(result.data);
			});
	}



	getChartData(){
		this.setState({
			chartData: {
				labels: ['Beets', 'Arugula', 'Heirloom Tomatoes', 'Almonds'],
				datasets: [
					{
						label: 'Product Distribution',
						data: [
							250,
							500,
							750,
							25
						],
						backgroundColor:[
							'red',
							'purple',
							'orange',
							'green'
						]
					}
				]
			}
		});
	}
	render() {
		return (
			<div>
				<Header />
				<Chart chartData={this.state.chartData} />
			</div>
		);
	}
}

export default App;
