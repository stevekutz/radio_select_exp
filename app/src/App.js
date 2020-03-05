import React from 'react';
import logo from './logo.svg';
import './App.css';

import RadioSelect from './comp/RadioSelect';


function App() {
  return (
    <div className="App">
        <RadioSelect vals = "Radio 1" typeControl = "radio"/>
        <RadioSelect vals = "Radio 2" typeControl = "radio"/>
        <RadioSelect vals = "Checkbox 1" typeControl = "checkbox"/>
        <RadioSelect vals = "Checkbox 2" typeControl = "checkbox"/>
        <RadioSelect vals = "Input 1" typeControl = "input"/>
        <RadioSelect vals = "Input 2" typeControl = "input"/>
    </div>
  );
}

export default App;
