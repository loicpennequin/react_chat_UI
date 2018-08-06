import React from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './../../../Common/Avatar/Avatar.jsx';

const SearchBar = props => (
	<React.Fragment>
		<div styleName="wrapper">
			<FontAwesomeIcon icon="search" styleName="icon" size="2x" />
			<input
				styleName="searchbar"
				type="text"
				onChange={e => props.onChange(e)}
				onFocus={() => props.toggle(true)}
				onBlur={() => props.toggle(false)}
			/>
			{props.isSearching ? (
				<FontAwesomeIcon icon="adjust" styleName="loader" size="2x" />
			) : null}
			{props.focused ? (
				<div styleName="results-wrapper">
					{props.searchResults.map((result, i) => (
						<Link
							to={'/profile/' + result.id}
							key={'searchbar-result-' + i}
						>
							<div styleName="result">
								<Avatar size="sm" src={result.avatar_url} />
								{result.username}
							</div>
						</Link>
					))}
				</div>
			) : null}
		</div>
	</React.Fragment>
);

export default SearchBar;
