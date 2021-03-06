import React from 'react';
import './App.css';

import {Header} from './Components/Header';
import {Notification} from './Components/Notification';

function App() {
  return (
    <>
      <Header headerName="My Cool Website"/>
      <div className="Notifications">
        <Notification notiType="Success" message="oh hey ,you did it right"/>
        <Notification notiType="Error" message="uh oh"/>
        <Notification notiType="Info" message="did you know that cats have 9 lives?"/>
        <Notification notiType="Alert" message="OOf"/>
      </div>
    </>
  );
}

export default App;