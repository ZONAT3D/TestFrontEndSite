import React from 'react';
import '../App.css';

import {FaInstagram}from 'react-icons/fa';

export function Header(prop) {
  return (
    <div className="App-header">
        <>{prop.headerName}</>
        <div className="Socials">
          <button className="Socials-Buttons">Click Me!</button>
          <button className="Socials-Buttons">Test123456789</button>
          <FaInstagram className="Socials-Buttons">Instagramers</FaInstagram>
        </div>
    </div>
  );
}