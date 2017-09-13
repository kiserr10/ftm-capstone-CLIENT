import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import { ReactDOM, mountNode }from 'react-dom';a
import './Header.css';
import {
	// BrowserRouter as Router,
	// Route,
	Link
} from 'react-router-dom';


class Header extends Component{

	render(){
		return (
			<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<h1><Link className="main-home-link" to="/">Farm To Market</Link></h1>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem componentClass="nav-link" eventKey={1} href="/"><Link className="info-link" to="/">Login</Link></NavItem>
							<NavItem componentClass="nav-link" eventKey={2} href="./marketInfo"><Link className="info-link" to="/marketInfo">Market Info</Link></NavItem>
							<NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}>Login</MenuItem>
								<MenuItem eventKey={3.2}>Logout</MenuItem>
								<MenuItem eventKey={3.3}>Extras</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={3.3}>Home</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
