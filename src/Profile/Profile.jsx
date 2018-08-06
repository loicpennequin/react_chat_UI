import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../resources/store/store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserService from './../resources/services/UserService.js';
import Card from './../Common/Card/Card.jsx';
import Avatar from './../Common/Avatar/Avatar.jsx';
import css from './Profile.sass';

@subscribe(store)
class Profile extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.match.params.id !== prevState.id) {
			return { id: nextProps.match.params.id };
		} else {
			return null;
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			user: { contacts: [] },
			isOwnProfile: false,
			isFriend: false
		};
	}

	async getData() {
		const user = await UserService.fetch(this.props.match.params.id);
		this.setState({
			user,
			isOwnProfile: user.id === this.props.currentUser.id,
			isFriend: user.contacts.some(
				c => c.contact_id === this.props.currentUser.id
			)
		});
	}

	componentDidMount() {
		this.getData();
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.id !== this.state.id) {
			this.getData();
		}
	}

	render() {
		const { user, isOwnProfile, isFriend } = this.state;
		return (
			<div styleName="clip">
				<Card className={css['profile-wrapper']}>
					{!isOwnProfile ? (
						isFriend ? (
							<button styleName="action-btn">
								<FontAwesomeIcon
									icon="comments"
									size="2x"
									fixedWidth
								/>
							</button>
						) : (
							<button styleName="action-btn">
								<FontAwesomeIcon
									icon="plus"
									size="2x"
									fixedWidth
								/>
							</button>
						)
					) : null}
					<header styleName="profile-header-wrapper">
						<div
							styleName="profile-header"
							style={{ ['--bg']: `url(${user.avatar_url})` }}
						/>
					</header>
					<main styleName="profile-content">
						<Avatar
							src={user.avatar_url}
							size="xl"
							className={css.avatar}
						/>
						<div styleName="profile-infos">
							<h1>{user.username}</h1>
							<h2>{user.email}</h2>
						</div>
						<div styleName="friends-count">
							<FontAwesomeIcon icon="user" size="2x" fixedWidth />
							{user.contacts.length}
						</div>
					</main>
				</Card>
			</div>
		);
	}
}

export default Profile;
