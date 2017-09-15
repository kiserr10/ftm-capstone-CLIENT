import React, { Component } from 'react';
// import { ReactDOM, mountNode }from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import './FormModal.css';
import SignupForm from '../SignupForm/index';
// import LoginForm from '../LoginForm/index';

class FormModal extends Component{
	constructor(){
		super();
		this.state = {
			showModal: false
		};
	}

	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}

	render() {
		return (
			<div>
				<Button
					bsStyle="primary"
					bsSize="small"
					onClick={this.open}
				>
					Signup
				</Button>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Signup Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SignupForm />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default FormModal;
