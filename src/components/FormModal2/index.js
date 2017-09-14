import React, { Component } from 'react';
import { ReactDOM, mountNode }from 'react-dom';
import { Popover, Tooltip, Button, Modal, MenuItem, OverlayTrigger, Example } from 'react-bootstrap';
import './FormModal.css';
import SignupForm from '../SignupForm/index';
import LoginForm from '../LoginForm/index';

const FormModal = React.createClass({
	getInitialState() {
		return { showModal: false };
	},
	close() {
		this.setState({ showModal: false });
	},
	open() {
		this.setState({ showModal: true });
	},

	render() {
		const popover = (
			<Popover id="modal-popover" title="popover">
				very popover. such engagement
			</Popover>
		);
		const tooltip = (
			<Tooltip id="modal-tooltip">
				wow.
			</Tooltip>
		);

		return (
			<div>
				<Button
					bsStyle="primary"
					bsSize="small"
					onClick={this.open}
				>
					Login
				</Button>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Signup Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<LoginForm />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});

export default FormModal;
