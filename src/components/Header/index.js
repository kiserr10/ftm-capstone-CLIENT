import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
// import { ReactDOM, mountNode }from 'react-dom';a
import './Header.css';
import FormModal from '../FormModal/index';
import FormModal2 from '../FormModal2/index';
import {logoutUser} from '../API';
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
							<h1><Link className="main-home-link" to="/">Home</Link></h1>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem componentClass="nav-link" eventKey={1} href="/"><Link className="info-link" to="/">Login</Link></NavItem>
							<NavItem componentClass="nav-link" eventKey={2} href="./marketInfo"><Link className="info-link" to="/marketInfo">Market Info</Link></NavItem>
							<NavDropdown componentClass="nav-link" eventKey={3} title="Account" id="basic-nav-dropdown">
								<MenuItem eventKey={3.1}><FormModal /></MenuItem>
								<MenuItem eventKey={3.2}><FormModal2 /></MenuItem>
								<MenuItem eventKey={3.2}>Extras</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey={3.4}>
									<Button
										bsStyle="primary"
										bsSize="small"
										onClick={logoutUser}
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
