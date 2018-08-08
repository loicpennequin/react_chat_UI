import React, { Component } from "react";
import { subscribe } from "react-contextual";
import store from "./../../resources/store/store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserThumbnail from "./../../Common/UserThumbnail/Userthumbnail.jsx";
import Card from "./../../Common/Card/Card.jsx";
import css from "./ContactList.sass";

@subscribe(store)
class ContactList extends Component {
    isOnline(id) {
        return this.props.onlineContacts.some(c => c === id);
    }

    render() {
        const contacts = this.props.currentUser.contacts;
        return contacts && contacts.length > 0 ? (
            <div styleName="contact-list">
                {contacts.map(c => {
                    const isOnline = this.isOnline(c.user.id);
                    return (
                        <div
                            styleName={`contact ${
                                isOnline ? "online" : "offline"
                            }`}
                            key={"contact-" + c.user.username}
                        >
                            <UserThumbnail user={c.user} />
                            <div styleName="is-online" />
                            <button
                                styleName="open-chat-btn"
                                disabled={!isOnline}
                            >
                                <FontAwesomeIcon
                                    icon="comments"
                                    size="lg"
                                    fixedWidth
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        ) : (
            <Card className={css["no-contacts"]}>
                <p>
                    You don't have any contacts yet. You can search users in the
                    searchbar at the top of the screen, or see the newest
                    members below.
                </p>
            </Card>
        );
    }
}

export default ContactList;
