import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './../Avatar/Avatar.jsx';
import css from './UserThumbnail.sass';

const UserThumbnail = ({user}) => (
    <Link to ={"/profile/" + user.id}>
        <div styleName="wrapper">
            <Avatar src={user.avatar_url} className={css.img}/>
            {user.username}
        </div>
    </Link>
);

export default UserThumbnail;
