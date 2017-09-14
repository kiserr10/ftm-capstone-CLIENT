import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import './SignupForm.css';


function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

const SignupForm = (props) => (
	<form>
		<FieldGroup
			id="formControlsText"
			type="text"
			label="First Name"
			placeholder="Enter text"
		/>
		<FieldGroup
			id="formControlsText"
			type="text"
			label="Last Name"
			placeholder="Enter text"
		/>
		<FieldGroup
			id="formControlsEmail"
			type="email"
			label="Email Address"
			placeholder="Enter email"
		/>
		<FieldGroup
			id="formControlsPassword"
			label="Password"
			type="password"
		/>
		<Button type="submit">
			Submit
		</Button>
	</form>
);

export default SignupForm;
