import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Avatar.sass';

const Avatar = props =>
	props.src ? (
		<img
			src={props.src}
			styleName={`avatar ${props.size ? props.size : ''}`}
			className={props.className}
		/>
	) : (
		<FontAwesomeIcon
			icon="user-secret"
			styleName={`avatar ${props.size ? props.size : ''}`}
			className={props.className}
		/>
	);

export default Avatar;
