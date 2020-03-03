import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import '../App.css';

export class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNoti: true
        }

        // Binds
        this.closeNotification = this.closeNotification.bind(this)
    }

    render() {
        return (
            <>
                {this.state.showNoti && 
                <div className={ 'Notification ' + this.props.notiType } >
                    <p style={{ fontWeight: "bold", minWidth: "90px" }} >{this.props.notiType}:&nbsp;</p>
                    <p>{this.props.message}</p>
                    <FaRegWindowClose class="far" onClick={this.closeNotification} style={{ marginRight: "15px", marginLeft: "auto", order: "2"}}></FaRegWindowClose>
                </div>
                }
            </>
        );
    }

    // Handles the closing of Notifications
    closeNotification = function() {
        this.setState({ showNoti: false });
    }
}