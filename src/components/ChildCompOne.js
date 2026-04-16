import React from 'react'
import { useState } from 'react'


const ChildComponentOne = ({setSelectedOption}) => {

  const handleClick =(e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div className='child-one'>
      <h2>Child Component 1</h2>
      <button value={'Option 1'} onClick={handleClick}>Option 1</button>
    </div>
  )
}

export default ChildComponentOne