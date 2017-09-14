import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';
import './LoginForm.css';


function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

const LoginForm = (props) => (
	<form>
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

export default LoginForm;
