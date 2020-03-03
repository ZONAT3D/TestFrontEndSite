import React from 'react';
import '../App.css';

export class Clock extends React.Component {
    componentDidMount() {
        this.updateTime()
        this.setState({"timer": setInterval(this.updateTime, 1000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }
    
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            currentTime: ''
        }

        this.updateTime = this.updateTime.bind(this)
    }

    render() {
        return (
            <div className="Clock">Time: {this.state.currentTime}</div>
        );
    }

    // Update the current time saved
    updateTime = function() {
        this.setState({
            currentTime: new Date().toLocaleTimeString()
        });
    }
}