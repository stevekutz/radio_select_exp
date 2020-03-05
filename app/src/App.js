import React from 'react';
import logo from './logo.svg';
import './App.css';

import RadioSelect from './comp/RadioSelect';


function App() {
  return (
    <div className="App">
        <div>
            <RadioSelect vals = "Radio 1" typeControl = "radio"/>
            <RadioSelect vals = "Radio 2" typeControl = "radio"/>
        </div>
        <div>
            <input type="radio" id="contactChoice1"
            name="contact" value="email"/>
            <label htmlFor="contactChoice1">Email</label>
        
            <input type="radio" id="contactChoice2"
                name="contact" value="phone"/>
            <label htmlFor="contactChoice2">Phone</label>
        
            <input type="radio" id="contactChoice3"
                name="contact" value="mail"/>
            <label htmlFor="contactChoice3">Mail</label>
        
        </div>

        <RadioSelect vals = "Checkbox 1" typeControl = "checkbox"/>
        <RadioSelect vals = "Checkbox 2" typeControl = "checkbox"/>
        <RadioSelect vals = "Input 1" typeControl = "input"/>
        <RadioSelect vals = "Input 2" typeControl = "input"/>
    </div>
  );
}

export default App;
