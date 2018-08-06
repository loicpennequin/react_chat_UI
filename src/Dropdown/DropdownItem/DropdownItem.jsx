import React from 'react';

const DropdownItem = props =>
	props.children ? props.childran : <div>{props.text}</div>;

export default DropdownItem;
