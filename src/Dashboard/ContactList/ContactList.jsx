import React, { Component } from 'react';
import { subscribe } from 'react-contextual';
import store from './../../resources/store/store.js';
import UserThumbnail from './../../Common/UserThumbnail/Userthumbnail.jsx';
import './ContactList.sass'

@subscribe(store)
class ContactList extends Component {

    isOnline(id){
        return this.props.onlineContacts.some( c => c === id);
    }
    render() {
        const contacts = this.props.currentUser.contacts;
        return contacts ? (
            <div styleName="contact-list">
                {contacts.map(c => (
                    <div styleName="contact" key={'contact-' + c.user.username}>
                        <UserThumbnail user={c.user}/>
                        <div styleName={`is-online ${this.isOnline(c.user.id) ? 'online' : 'offline'}`}></div>
                    </div>
                ))}
            </div>
        ): null;
    }

}

export default ContactList;
