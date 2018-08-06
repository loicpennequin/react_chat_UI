import React, { Component } from 'react';
import DropdownItem from './DropdownItem/DropdownItem.jsx';
import DropdownHeader from './DropdownHeader/DropdownHeader.jsx';

class Dropdown extends Component {
	static Header = DropdownHeader;
	static Item = DropdownItem;

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			selectedItem: -1
		};
	}

	render() {
		let header;
		let items = [];
		React.Children.map(this.props.children, (child, i) => {
			if (child.type.displayName === 'DropdownHeader') {
				header = child;
			} else if (child.type.displayName === 'DropdownItem') {
				items.push(child);
			}
		});

		return (
			<React.Fragment>
				{header}
				{items}
			</React.Fragment>
		);
	}
}

export default Dropdown;
