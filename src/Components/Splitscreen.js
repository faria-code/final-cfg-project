import React from 'react';
import './Splitscreenstyles.css';
import Button from './Button';

function Split() {
    return (
        <div className="split-screen">
            <div className="split-left">
                <img className="split-image-left" src="./images/hair12.jpeg" alt="hair" />
                <h1> About The Hair Salon</h1>
                <p>Featuring hair extensions, cut, colour and hair health. We provide the best service in London!</p>
                <Button />
            </div>
            <div className="split-right">
                <img className="split-image-right" src="./images/hair16.jpeg" alt="purple hair" />
            </div>
        </div>
    )
}

export default Split;