import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import './SignupForm.css';
import { postSignup } from '../API';
import { Redirect } from 'react-router-dom';


function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

class SignupForm extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			redirect: false
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	}

	onSubmit(event){
		event.preventDefault();
		const {first_name, last_name, email, password} = this.state;
		postSignup({first_name, last_name, email, password})
			.then(() => {
				this.setState({
					redirect: true
				});
			});
	}

	render(){
		if(this.state.redirect){
			return(
				<Redirect push to= {'/createProfile'} />
			);
		}
		return(
			<form onSubmit={this.onSubmit}>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsText"
					name="first_name"
					type="text"
					label="First Name"
					placeholder="Enter text"
					value={this.state.first_name}
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsText"
					name="last_name"
					type="text"
					label="Last Name"
					placeholder="Enter text"
					value={this.state.last_name}
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsEmail"
					name="email"
					type="email"
					label="Email Address"
					placeholder="Enter email"
					value={this.state.email}
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsPassword"
					name="password"
					label="Password"
					type="password"
					value={this.state.password}
				/>
				<Button type="submit">
					Submit
				</Button>
			</form>
		);
	}
}

export default SignupForm;
