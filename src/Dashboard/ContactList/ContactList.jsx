import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../../resources/store/store.js';
import UserThumbnail from './../../Common/UserThumbnail/Userthumbnail.jsx';
import './ContactList.sass'

@subscribe(store)
class ContactList extends Component {

    render() {
        const contacts = this.props.currentUser.contacts;
        return (
            <div styleName="contact-list">
                {contacts.map(c => (
                    <div styleName="contact" key={'contact-' + c.user.username}>
                        <UserThumbnail user={c.user}/>
                    </div>
                ))}
            </div>
        );
    }

}

export default ContactList;
