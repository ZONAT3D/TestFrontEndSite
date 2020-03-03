import React from 'react';
import '../App.css';

export class Notification extends React.Component {
    render() {
        return (
            <div className={ 'Notification ' + this.props.notiType } >
                <p style={{ fontWeight: "bold", minWidth: "90px" }} >{this.props.notiType}:&nbsp;</p>
                <p>{this.props.message}</p>
                <button onClick={closeNotification} style={{ marginRight: "15px", marginLeft: "auto", order: "2"}}>X</button>
            </div>
        );
    }
}

function closeNotification(button) {
    button.target.parentNode.style = "display: none;";
}