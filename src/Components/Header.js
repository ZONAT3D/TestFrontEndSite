import React from 'react';
import '../App.css';

export function Header(prop) {
  return (
    <div className="App-header">
        <>{prop.headerName}</>
          <socials className="Socials">
            <button className="Socials-Buttons" onClick={prop.onButtonClick}>Click Me!</button>
            <button className="Socials-Buttons" onClick={prop.onButtonClick}>Test123456789</button>
            <button className="Socials-Buttons" onClick={prop.onButtonClick} style={{marginRight: "15px"}}>Instagramers</button>
        </socials>
    </div>
  );
}