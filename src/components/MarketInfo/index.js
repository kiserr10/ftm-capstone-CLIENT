import React, { Component } from 'react';
import Iframe from 'react-iframe';
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
			market: {},
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
				const market = result.data.filter(market =>{
					return market.id === +this.props.match.params.id;
				})[0];
				console.log(market, this.props.match, result.data);
				this.setState({
					markets: result.data,
					market,
					farmers: market.farmers,
					products: market.farmer_products
				});
				// const market = this.state.markets;
				// const farmer = this.state.farmers;
				this.makeFarmerPanels(this.state.farmers, this.state.products);
			});
	}

	getChartData(){
		this.setState({
			chartData: {
				labels: ['Root Vegetables', 'Stem/Leaf Vegetables', 'Berry Fruits', 'Nut Fruits', 'Fruit Vegetables', 'Flower Vegetables', 'Seed Vegetables'],
				datasets: [
					{
						label: 'Product Distribution',
						data: [
							250,
							250,
							125,
							750,
							365,
							320,
							85
						],
						backgroundColor:[
							'red',
							'orange',
							'yellow',
							'green',
							'lightblue',
							'blue',
							'purple'
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
						<div className="info-table-1">
							<h1>{this.state.market.name}</h1>
							<PanelGroup className="grouping-panels">
								<Panel header="Google Map">
									<div className="map-container">
										<Iframe
											url={this.state.market.google_map_link}
											width="750px"
											height="450px"
											display="initial"
											position="relative"
											allowFullScreen/>
									</div>
								</Panel>
								<Panel header="Address">{this.state.market.address}</Panel>
								<Panel header="Schedule">{this.state.market.schedule}</Panel>
								<Panel header="Description">{this.state.market.description}</Panel>
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


					<div className="row">
						<div className="info-table-2 col-md-7">
							<h1>Attending Farmers: </h1>
							<PanelGroup>
								{this.state.farmerPanels}
							</PanelGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MarketInfo;
