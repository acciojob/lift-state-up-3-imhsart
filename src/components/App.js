
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import ChildComponentOne from './ChildCompOne'
import ChildComponentTwo from './ChildCompTwo'

const App = () => {
  const [selectedOption, setSelectedOption] = useState('')
  return (
    <div className="parent">  
    <h1>Parent Component</h1>
        <ChildComponentOne setSelectedOption= {setSelectedOption} />
        <ChildComponentTwo setSelectedOption={setSelectedOption} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
