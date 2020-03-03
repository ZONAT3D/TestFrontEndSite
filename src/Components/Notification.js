import React from 'react';
import { IoIosClose } from "react-icons/io";
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
                    <div style={{ fontWeight: "bold", minWidth: "90px" }} >{this.props.notiType}:&nbsp;</div>
                    <div>{this.props.message}</div>
                    <div><IoIosClose  style={{ position: "absolute", right: "1px", top: "1px"}} onClick={this.closeNotification} ></IoIosClose></div>
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