import React, { Component } from "react";
import { subscribe } from "react-contextual";
import store from "./../../../../resources/store/store.js";
import UserService from "./../../../../resources/services/UserService.js";
import ContactRequestService from "./../../../../resources/services/ContactRequestService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserThumbnail from "./../../../../Common/UserThumbnail/Userthumbnail.jsx";
import "./FriendRequestManager.sass";

@subscribe(store)
class FriendRequestManager extends Component {
    async accept(requestId) {
        await ContactRequestService.acceptRequest(requestId);
        this.props.setCurrentUser(
            await UserService.fetch(this.props.currentUser.id)
        );
    }

    async deny(requestId) {
        await ContactRequestService.denyRequest(requestIid);
        this.props.setCurrentUser(
            await UserService.fetch(this.props.currentUser.id)
        );
    }

    render() {
        const { currentUser } = this.props;
        return (
            <React.Fragment>
                <h4>Recieved({currentUser.recievedRequests.length})</h4>
                <div styleName="viewer">
                    {currentUser.recievedRequests.map((r, i) => (
                        <div key={"request-" + i}>
                            <UserThumbnail user={r.sender} />
                            <button
                                styleName="btn-deny"
                                onClick={() => this.deny(r.id)}
                            >
                                <FontAwesomeIcon
                                    icon="times"
                                    size="lg"
                                    fixedWidth
                                />
                            </button>
                            <button
                                styleName="btn-accept"
                                onClick={() => this.accept(r.id)}
                            >
                                <FontAwesomeIcon
                                    icon="check"
                                    size="lg"
                                    fixedWidth
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <h4>Sent({currentUser.sentRequests.length})</h4>
                <div styleName="viewer">
                    {currentUser.sentRequests.map((r, i) => (
                        <UserThumbnail key={"request-" + i} user={r.sendee} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default FriendRequestManager;
