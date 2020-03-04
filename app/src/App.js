import React from 'react';
import logo from './logo.svg';
import './App.css';

import RadioSelect from './comp/RadioSelect';


function App() {
  return (
    <div className="App">
        <RadioSelect vals = "Item 1"/>
        <RadioSelect vals = "Item 2"/>
    </div>
  );
}

export default App;
