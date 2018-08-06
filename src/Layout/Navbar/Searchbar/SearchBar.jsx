import React from 'react';
import './Searchbar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
						<div styleName="result" key={'searchbar-result-' + i}>
							{result.avatar_url ? null : (
								<FontAwesomeIcon
									icon="user-secret"
									styleName="result_no-avatar"
									size="2x"
								/>
							)}
							{result.username}
						</div>
					))}
				</div>
			) : null}
		</div>
	</React.Fragment>
);

export default SearchBar;
