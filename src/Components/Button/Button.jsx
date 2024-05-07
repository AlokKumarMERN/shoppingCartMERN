import React, { useState } from 'react';
import './Button';

function Buttons({name}) {
    const [underlineButton, setUnderlineButton] = useState(null);

    const handleMouseEnter = (buttonId) => {
        setUnderlineButton(buttonId);
    };

    const handleMouseLeave = () => {
        setUnderlineButton(null);
    };

    return (
        <div className='p-lg-2 m-1'>
            <button
                onClick={() =>{
                    return console.log({name});
                }}
                className='border-0 bg-transparent p-1'
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                style={{
                    textDecoration: underlineButton === 1 ? 'underline' : 'none' ,
                    color: underlineButton === 1 ? 'green' : 'black' 

                }}
            >
                {name}
            </button>
        </div>
    );
}

export default Buttons;
