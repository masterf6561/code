import React, { useState } from 'react';

export const TubeCountInput = (props) => {
    const [currentCount, setCurrentCount] = useState("");

    return (
        <div className='input-container'>
            <input
                type="text"
                className="styled-input"
                onChange={(e) => setCurrentCount(e.target.value)}
                placeholder="Number of Tubes"
            />
             <button className='styled-button' onClick={() => props.setTubeCount(Number(currentCount))}>Submit</button>
        </div>
    )
}
