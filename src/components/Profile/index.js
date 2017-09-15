import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';

// import { ReactDOM, mountNode }from 'react-dom';a
import './Profile.css';
import FormModal from '../FormModal/index';
import FormModal2 from '../FormModal2/index';
import Header from '../Header';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


class Profile extends Component{
	render(){

		function FieldGroup({ id, label, help, ...props }) {
			return (
				<FormGroup controlId={id}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
					{help && <HelpBlock>{help}</HelpBlock>}
				</FormGroup>
			);
		}

		return (
			<div>
				<Header />
				<h1>Welcome Back!</h1>
				<form className="profile-creation-form">
					<FieldGroup
						id="formControlsText"
						type="text"
						label="Text"
						placeholder="Enter text"
					/>
					<FieldGroup
						id="formControlsEmail"
						type="email"
						label="Email address"
						placeholder="Enter email"
					/>
					<FieldGroup
						id="formControlsPassword"
						label="Password"
						type="password"
					/>
					<FieldGroup
						id="formControlsFile"
						type="file"
						label="File"
						help="Example block-level help text here."
					/>

					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Select</ControlLabel>
						<FormControl componentClass="select" placeholder="select">
							<option value="select">select</option>
							<option value="other">...</option>
						</FormControl>
					</FormGroup>
					<FormGroup controlId="formControlsSelectMultiple">
						<ControlLabel>Multiple select</ControlLabel>
						<FormControl componentClass="select" multiple>
							<option value="select">select (multiple)</option>
							<option value="other">...</option>
						</FormControl>
					</FormGroup>

					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>Textarea</ControlLabel>
						<FormControl componentClass="textarea" placeholder="textarea" />
					</FormGroup>

					<FormGroup>
						<ControlLabel>Static text</ControlLabel>
						<FormControl.Static>
							email@example.com
						</FormControl.Static>
					</FormGroup>

					<Button type="submit">
					Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default Profile;
