import React, { Component } from 'react';
import { FormGroup, ControlLabel, HelpBlock, Button, FormControl } from 'react-bootstrap';
import { getAccountData } from '../API';
// import { ReactDOM, mountNode }from 'react-dom';a
import './CreateProfile.css';
// import FormModal from '../FormModal/index';
// import FormModal2 from '../FormModal2/index';
import Header from '../Header';
import { postCreateProfile } from  '../API';
import { getData } from '../API';
import { Redirect } from 'react-router-dom';
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link
// } from 'react-router-dom';
function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

class CreateProfile extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleNestedChange = this.handleNestedChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleQuantityChange = this.handleQuantityChange.bind(this);
		this.handleGlChange = this.handleGlChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.makeDropDownItems = this.makeDropDownItems.bind(this);
		this.selectFarm = this.selectFarm.bind(this);
		this.handleATChange = this.handleATChange.bind(this);
		this.redirect = this.redirect.bind(this);
		this.state = {
			account: [],
			account_id: null,
			biography: '',
			farm_name: '',
			image_url: '',
			rating: null,
			products:
				{
					name: '',
					description: '',
					image_url: '',
					quantity: '',
					rating: null,
					growing_location: ''
				},
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
			});
		getAccountData(localStorage.id)
			.then(result =>{
				this.setState({
					account: result.data,
					first_name: result.data.first_name,
					account_id: result.data.id
				});
				console.log(this.state);
			});
	}



	handleChange(e) {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	}
	handleNestedChange(e){
		e.preventDefault();
		var products = {...this.state.products};
		products.name = e.target.value;
		this.setState({products});
		console.log(this.state);
	}
	handleDescriptionChange(e){
		e.preventDefault();
		var products = {...this.state.products};
		products.description = e.target.value;
		this.setState({products});
		console.log(this.state);
	}
	handleGlChange(e){
		e.preventDefault();
		var products = {...this.state.products};
		products.growing_location = e.target.value;
		this.setState({products});
		console.log(this.state);
	}
	handleQuantityChange(e){
		e.preventDefault();
		var products = {...this.state.products};
		products.quantity = e.target.value;
		this.setState({products});
		console.log(this.state);
	}
	handleATChange(e){
		e.preventDefault();
		var attend_date = {...this.state.markets.attend_date};
		attend_date = e.target.value;
		this.setState({attend_date});
		console.log(this.state.attend_date);
	}

	onFormSubmit(event){
		event.preventDefault();
		console.log('hello');
		const {account_id, biography, name, farm_name, products, markets} = this.state;
		console.log(markets);
		postCreateProfile({account_id, biography, name, farm_name, products, markets})
			.then(console.log('posted'));
	}
	makeDropDownItems(){
		return this.state.markets.map(market =>{
			return (
				<option key={market.id} value={market.id} placeholder={market.name}>{market.name}</option>
			);
		});
	}
	selectFarm(e){
		// var market = this.state.markets;
		// console.log(e.target.value);
		this.setState({
			markets: [{
				id: e.target.value,
				attend_date: "9/19/2017"
			}]
		});
		console.log(this.state.markets);
	}
	redirect(){
		this.setState({
			redirect: true
		});
	}


	render(){
		if(this.state.redirect){
			return(
				<Redirect push to= {'/'} />
			);
		}
		return (
			<div>
				<Header />
				<h1 className="welcome-header">Welcome {this.state.first_name}! Please Make A Profile</h1>
				<form className="profile-creation-form" autocomplete="off">
					<FieldGroup
						onChange={this.handleChange}
						id="formControlsText"
						name="farm_name"
						type="hidden"
						label="Name of Your Farm"
						placeholder="Farm Name"
						value={this.state.farm_name}
					/>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Biography</ControlLabel>
						<FormControl
							componentClass="textarea"
							onChange={this.handleChange}
							name="biography"
							type="text"
							value={this.state.biography}
						/>
					</FormGroup>

					<FieldGroup
						onChange={this.handleNestedChange}
						id="formControlsText"
						name="name"
						type="text"
						label="Product Name:"
						value={this.state.products.name}
					/>
					<FieldGroup
						onChange={this.handleDescriptionChange}
						id="formControlsText"
						type="text"
						label="Product Description:"
						name="description"
						value={this.state.products.description}
					/>
					<FieldGroup
						id="formControlsText"
						type="text"
						label="Image URL:"
						name="image_url"
						placeholder="URL Goes Here"
					/>
					<FieldGroup
						onChange={this.handleQuantityChange}
						id="formControlsText"
						type="integer"
						label="Quantity You Plan To Bring"
						placeholder="Number"
						name="quantity"
						value={this.state.products.quantity}

					/>
					<FieldGroup
						onChange={this.handleGlChange}
						id="formControlsText"
						type="text"
						label="Growing Location"
						name="growing_location"
						value={this.state.products.growing_location}
					/>
					<FieldGroup
						id="formControlsText"
						name="attend_date"
						type="text"
						label="Attend Date"
						placeholder="Attend Date"
					/>

					<FieldGroup
						id="formControlsFile"
						type="file"
						name="image_url"
						label="Upoload Photo"
						help="Show us what you got!"
					/>

					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select</ControlLabel>
						<FormControl componentClass="select" onChange={this.selectFarm} >
							<option value="select">Select A Market</option>
							{this.makeDropDownItems()}
						</FormControl>
					</FormGroup>

					<FormGroup>
						<ControlLabel>Email Contact: </ControlLabel>
						<FormControl.Static>
							{this.state.account.email}
						</FormControl.Static>
					</FormGroup>

					<Button onClick={this.redirect} type="submit">
					Submit Form
					</Button>
				</form>
			</div>
		);
	}
}

export default CreateProfile;
