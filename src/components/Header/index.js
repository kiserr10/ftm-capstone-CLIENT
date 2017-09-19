import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
// import { ReactDOM, mountNode }from 'react-dom';a
import './Header.css';
import FormModal from '../FormModal/index';
import FormModal2 from '../FormModal2/index';
import { logoutUser } from '../API';
import { Redirect } from 'react-router-dom';
import {
	// BrowserRouter as Router,
	// Route,
	Link
} from 'react-router-dom';


class Header extends Component{
	constructor(props){
		super(props);
		this.redirect = this.redirect.bind(this);
		this.state = {
			redirect: false
		};
	}

	redirect(){
		logoutUser();
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
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<h1><Link className="main-home-link" to="/">Home</Link></h1>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavDropdown componentClass="nav-link" eventKey={3} title="Account" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}><FormModal /></MenuItem>
								<MenuItem eventKey={3.2}><FormModal2 /></MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={3.4}>
									<Button
										bsStyle="primary"
										bsSize="small"
										onClick={this.redirect}
									>
										Logout
									</Button>
								</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
