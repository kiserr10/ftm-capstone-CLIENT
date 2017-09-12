import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import Header from '../Header/index.js';
import Chart from '../Chart/index.js';
import { getData } from '../API';

class MarketInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			markets: [],
			chartData: {
				labels: [],
				datasets: []
			}
		};
	}

	componentWillMount(){
		this.getChartData();
	}

	componentDidMount(){
		getData()
			.then(result => {
				this.setState({
					market: result.data
				});
				console.log(this.state.market);
				console.log(result.data.farmer_products[0].quantity);
				console.log(result.data.farmer_products[0].product.name);
				const market = this.state.market;
				// let productNames = market.map(data => {
				// 	console.log(data);
				// });
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
							250,
							125,
							750
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
				<Chart chartData={this.state.chartData} />
			</div>
		);
	}
}

export default MarketInfo;
