import React from 'react';
import {Clock} from './Clock';
import '../App.css';

import {FaInstagram} from 'react-icons/fa';

export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClock: true
    }
    this.toggleClock = this.toggleClock.bind(this);
  }

  render() {
    return (
      <div className="App-header">
          {this.state.isClock && <Clock style={{ selfJustify: "left" }} />}
          <div>{this.props.headerName}</div>
          <div className="Socials">
            <button className="Socials-Buttons" onClick={this.toggleClock}>Toggle Clock</button>
            <button className="Socials-Buttons">Test123456789</button>
            <FaInstagram className="Socials-Buttons">Instagramers</FaInstagram>
          </div>
      </div>
    );
  }

  toggleClock = function(){
    if (this.state.isClock) {
      this.setState({ isClock: false })
    } else {
      this.setState({ isClock: true })
    }
  }
}