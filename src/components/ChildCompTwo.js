import React from 'react'
import { useState } from 'react'


const ChildComponentTwo = ({setSelectedOption}) => {

  const handleClick = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className="child-two">
      <h2>Child Component 2</h2>
      <button value={'Option 2'} onClick={handleClick}>Option 2</button>
    </div>
  )
}

export default ChildComponentTwo