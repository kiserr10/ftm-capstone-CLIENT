import React, { Component } from 'react';
// import { ReactDOM } from 'react-dom';
import Chart from '../Chart/index.js';
import Header from '../Header/index.js';
import { getData } from '../API';
import {Panel, PanelGroup} from 'react-bootstrap';
import './MarketInfo.css';

class MarketInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			markets: [],
			chartData: {},
			labels: [],
			datasets: []
		};
	}

	componentWillMount(){
		this.getChartData();
	}

	componentDidMount(){
		getData()
			.then(result => {
				this.setState({
					markets: result.data,
					chartData: result.data.farmer_products[0].quantity
				});

				const market = this.state.markets;
				console.log(this.state.chartData);
				console.log(result.data.farmer_products[0].product.name);
				console.log(market.address);
			});
	}

	getChartData(){
		this.setState({
			chartData: {
				labels: ['Beets', 'Arugula', 'Heirloom Tomatoes', 'Almonds', 'Heirloom Carrots'],
				datasets: [
					{
						label: 'Product Distribution',
						data: [
							250,
							250,
							125,
							750,
							365
						],
						backgroundColor:[
							'red',
							'green',
							'blue',
							'orange',
							'crimson'
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
				<div className="info row">
					<div className="left-column col-md-6">

						<div className="info-table-1 well">
							<h1>{this.state.markets.name}</h1>
							<PanelGroup>
								<Panel collapsible header="Panel 1" eventKey="1">Panel 1 content</Panel>
								<Panel collapsible header="Panel 2" eventKey="2">Panel 2 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
							</PanelGroup>
						</div>

						<div className="info-table-2 well">
							<h1>Attending Farmers: </h1>
							<PanelGroup>
								<Panel collapsible header="Panel 1" eventKey="1">Panel 1 content</Panel>
								<Panel collapsible header="Panel 2" eventKey="2">Panel 2 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
								<Panel collapsible header="Panel 3" eventKey="3">Panel 3 content</Panel>
							</PanelGroup>
						</div>
					</div>

					<div className="right-column col-md-6 text-center">
						<div className="info-table-3">
							<div className="pie-chart-container">
								<Chart chartData={this.state.chartData} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MarketInfo;
