import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import './LoginForm.css';
import { postLogin } from '../API';
import {Redirect} from 'react-router-dom';


function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

class LoginForm extends Component{
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
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
		const {email, password} = this.state;
		postLogin({email, password})
			.then(() => {
				this.setState({
					redirect: true
				});
			});
	}

	render(){
		if(this.state.redirect){
			return(
				<Redirect push to= {'/profile'} />
			);
		}
		return(
			<form onSubmit={this.onSubmit}>
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


export default LoginForm;
