import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import './SignupForm.css';
import { postLogin } from '../API';


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
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: ''
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}


	render(){
		return(
			<form>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsText"
					type="text"
					label="First Name"
					placeholder="Enter text"
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsText"
					type="text"
					label="Last Name"
					placeholder="Enter text"
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsEmail"
					type="email"
					label="Email Address"
					placeholder="Enter email"
				/>
				<FieldGroup
					onChange={this.handleChange}
					id="formControlsPassword"
					label="Password"
					type="password"
				/>
				<Button type="submit">
					Submit
				</Button>
			</form>
		);
	}
}

export default SignupForm;
