import React, { Component } from 'react';
import ModalHeader from './ModalHeader/ModalHeader.jsx';
import ModalContent from './ModalContent/ModalContent.jsx';
import ModalFooter from './ModalFooter/ModalFooter.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Modal.sass';

class Modal extends Component {
	static Header = ModalHeader;
	static Content = ModalContent;
	static Footer = ModalFooter;

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div styleName="modal-background">
				<button
					styleName="close-btn"
					onClick={() => this.props.onClose()}
				>
					<FontAwesomeIcon icon="times" size="3x" fixedWidth />
				</button>
				<div styleName="modal">{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;
