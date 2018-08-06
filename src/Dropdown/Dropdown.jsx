import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownItem from './DropdownItem/DropdownItem.jsx';
import DropdownHeader from './DropdownHeader/DropdownHeader.jsx';
import './Dropdown.sass';

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

	toggle() {
		this.setState({ open: !this.state.open });
	}

	select(data) {
		this.props.onSelect(data);
		this.setState({
			open: false
		});
	}

	render() {
		let header;
		let items = [];
		React.Children.map(this.props.children, (child, i) => {
			if (child.type.displayName === 'DropdownHeader') {
				header = child;
			} else if (child.type.displayName === 'DropdownItem') {
				items.push(
					React.cloneElement(child, {
						onSelect: data => this.select(data)
					})
				);
			}
		});

		return (
			<div styleName="dropdown">
				<div styleName="header-wrapper" onClick={() => this.toggle()}>
					{header}
					<FontAwesomeIcon icon="caret-down" size="lg" fixedWidth />
				</div>
				{this.state.open ? (
					<div styleName="items-wrapper">{items}</div>
				) : null}
			</div>
		);
	}
}

export default Dropdown;
