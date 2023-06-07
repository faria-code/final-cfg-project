import React from 'react';
import './Accordionstyles.css';
import { useState } from 'react';

const data = [
    {
        Service: 'Styling Services',
        Description: 'Cut & Finish: Get movement, volume and texture with cut and blowdry.'
    },
    {
        Service: 'Colour Services',
        Description: 'Highlights: Get full or half head highlights that look natural and classic.'
    },
    {
        Service: 'Hair Extensions',
        Description: 'Get some of the best quality hair extensions that will give you a new and personlised look.',
    },
    {
        Service: 'Hair Health & Beauty',
        Description: 'Get a specialist treatment for long lasting results that will leave your hair feeling smooth and shiny.'
    }
]

function Accordion() {
    const [show, setShow] = useState(null)

    const handleOpen = (i) => {
        setShow(!show);
    }

    return (
        <div>
            <div className='accordion'>
                {data.map((item, i) => (
                    <div className='item' key={data.service}>
                        <div className='title' onClick={() => handleOpen(i)} >
                            <h4>{item.Service}
                            </h4>
                            <span>+</span>
                        </div>
                        {show && (
                            <div className='content'><p>{item.Description}</p></div>)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion