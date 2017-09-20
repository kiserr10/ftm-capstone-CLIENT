import React, { Component } from 'react';
import { Image, Well, PanelGroup, Panel } from 'react-bootstrap';
// import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import {getAccountData} from '../API';
// import { ReactDOM, mountNode }from 'react-dom';a
import './Profile.css';
// import FormModal from '../FormModal/index';
// import FormModal2 from '../FormModal2/index';
import Header from '../Header';
import {getFarmerData} from '../API';
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link
// } from 'react-router-dom';

class Profile extends Component{
	constructor(props){
		super(props);
		// this.makeProductPanel = this.makeProductPanel.bind(this);
		this.state = {
			account: [],
			farmer: {},
			products: {}
		};
	}

	componentDidMount(){
		getAccountData(localStorage.id)
			.then(result =>{
				this.setState({
					account: result.data,
					first_name: result.data.first_name
				});
				const currentAccount = this.state.account.id;
				getFarmerData(currentAccount)
					.then(result =>{
						this.setState({
							farmer: result.data,
							products: result.data.products[0]
						});
						console.log(this.state.products[0]);
					});
			});
	}

	// makeProductPanel(products){
	// 	const product = this.state.products.map(products => {
	// 		return (
	// 			<Panel key={product.id} header={product.name} eventKey="3">{product.name}</Panel>
	// 		);
	// 	});
	// 	console.log(product);
	// }



	render(){
		return (
			<div>
				<Header />
				<h1 className="welcome-header">Welcome Back {this.state.first_name} !</h1>
				<Well>
					<div className="profile-info-well row">
						<div className="col-md-6">
							<Image src={this.state.farmer.image_url}  height="350px" circle />
						</div>
						<div className="profile-info col-md-6">
							<h1>{this.state.farmer.farm_name}</h1>
							<PanelGroup>
								<Panel header="Biography">{this.state.farmer.biography}</Panel>
								<Panel header="Product Specialty">{this.state.products.name}</Panel>
							</PanelGroup>
						</div>
					</div>
				</Well>
			</div>
		);
	}
}

export default Profile;
