import React, { Component } from 'react';
// import { ReactDOM } from 'react-dom';
import Chart from '../Chart/index.js';
import Header from '../Header/index.js';
import { getData } from '../API';
import { Panel, PanelGroup, Thumbnail } from 'react-bootstrap';
import './MarketInfo.css';
class MarketInfo extends Component {
	constructor(props){
		super(props);
		this.getChartData = this.getChartData.bind(this);
		this.state = {
			markets: [],
			chartData: {},
			labels: [],
			datasets: [],
			farmers: [],
			products: []
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
					farmers: result.data.farmers,
					products: result.data.farmer_products
				});
				const market = this.state.markets;
				const farmer = this.state.farmers;
				this.makeFarmerPanels(this.state.farmers, this.state.products);
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

	makeFarmerPanels(farmers, products){
		const farmerPanels = farmers.map(farmer => {
			let newProducts = products.filter(product =>{
				return product.farmer_id === farmer.id;
			});
			newProducts = newProducts.map(product => {
				return (
					<Thumbnail className="product-info-card" src={product.product.image_url} alt="242x200">
						<h3>{product.product.name}</h3>
						<p>{product.product.description}</p>
						<p>Growing Location: {product.growing_location}</p>
						<p>Quantity: {product.quantity}</p>
						<p>Rating: {product.rating}</p>
					</Thumbnail>
				);
			});
			return (
				<Panel collapsible key={farmer.id} header={farmer.farm_name} eventKey="3">{farmer.biography}
					<br></br>
					{newProducts}
				</Panel>);
		});
		this.setState({
			...this.state,
			farmerPanels: farmerPanels
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
								<Panel header="Address">{this.state.markets.address}</Panel>
								<Panel header="Schedule">{this.state.markets.schedule}</Panel>
								<Panel header="Description">{this.state.markets.description}</Panel>
								<Panel header="Google Maps Link">{this.state.markets.google_map_link}</Panel>
							</PanelGroup>
						</div>

						<div className="info-table-2 well">
							<h1>Attending Farmers: </h1>
							<PanelGroup>
								{this.state.farmerPanels}
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
