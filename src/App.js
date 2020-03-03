import React from 'react';
import './App.css';

import Header from './Components/Header.js';

function App() {
  return (
    <>
      <Header headerName="My Cool Website"
              onButtonClick={() => alert('Button has been clicked! :) Good Job')}
      />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
