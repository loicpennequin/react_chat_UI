import React from 'react';
import './Card.sass';
const Card = props => (
	<div styleName="card" className={props.className}>
		{props.children}
	</div>
);

export default Card;
