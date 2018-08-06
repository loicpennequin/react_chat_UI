import React from 'react';
import './DropdownItem.sass';

const DropdownItem = props =>
	props.children ? (
		<div onClick={() => props.onSelect(props.data)}>{props.children}</div>
	) : (
		<div styleName="item" onClick={() => props.onSelect(props.data)}>
			{props.text}
		</div>
	);

export default DropdownItem;
