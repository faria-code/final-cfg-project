import React from 'react';
import { useState } from 'react';
import './Hoverstyles.css';

function ImageA() {
  return (
    <div >
      <img className='image-hover' src="./images/hair8.jpeg" />
    </div>
  )
}

function ImageB() {
  return (
    <div >
      <img className='image-hover-even' src="./images/hair14.jpeg" />
    </div>
  )
}

function ImageC() {
  return (
    <div >
      <img className='image-hover' src="./images/hair4.jpeg" />
    </div>
  )
}

function ImageD() {
  return (
    <div >
      <img className='image-hover-even' src="./images/hair15.jpeg" />
    </div>
  )
}

const HoverEffect = () => {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
  }

  const handleMouseOut = () => {
    setHovering(false);
  }

  const [hoveringB, setHoveringB] = useState(false);

  const handleMouseOverB = () => {
    setHoveringB(true);
  }

  const handleMouseOutB = () => {
    setHoveringB(false);
  }



  const [hoveringC, setHoveringC] = useState(false);

  const handleMouseOverC = () => {
    setHoveringC(true);
  }

  const handleMouseOutC = () => {
    setHoveringC(false);
  }



  const [hoveringD, setHoveringD] = useState(false);

  const handleMouseOverD = () => {
    setHoveringD(true);
  }

  const handleMouseOutD = () => {
    setHoveringD(false);
  }


  return (
    <div>
      <h2>Our Services</h2>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} >
        <h4>Styling Services</h4>
        {hovering && (
          <ImageA />
        )}
      </div>
      <div onMouseOver={handleMouseOverB}
        onMouseOut={handleMouseOutB}>
        <h4>Colour Services</h4>
        {hoveringB && (
          <ImageB />
        )}
      </div>

      <div onMouseOver={handleMouseOverC}
        onMouseOut={handleMouseOutC}>
        <h4>Hair Extensions</h4>
        {hoveringC && (
          <ImageC />
        )}
      </div>
      <div onMouseOver={handleMouseOverD}
        onMouseOut={handleMouseOutD}>
        <h4>Hair Health & Beauty</h4>
        {hoveringD && (
          <ImageD />
        )}
      </div>


    </div>

  )

}

export default HoverEffect