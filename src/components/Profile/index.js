import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, FormControl } from 'react-bootstrap';

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
		return (
			<div>
				<Header />
				<h1>Welcome Back!</h1>
			</div>
		);
	}
}

export default Profile;
