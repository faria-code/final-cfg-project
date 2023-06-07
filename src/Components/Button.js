import React from 'react';
import './Buttonstyles.css';
import { useState } from 'react';



function Button() {
  const [initial, setInitial] = useState('');

  const handleClick = () => {
    setInitial('🥂50% off first haircut!🥂')
  }
  return (
    <div>
      <button onClick={handleClick}>Book now for a surprise</button>
      <h2 className='button-subheading'> {initial} </h2>
    </div>)
}

export default Button;