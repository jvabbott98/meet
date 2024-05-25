import React, { useState } from "react";



const NumberOfEvents = ({setCurrentNOE}) => {
    const [textboxValue, setTextboxValue] = useState('32');

const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    setTextboxValue(value);
}

    return (
       <div id='number-of-events' >
        <input
                type="text"
                className="NOE-input"
                placeholder="Number of Events"
                value={textboxValue}
                onChange={handleInputChanged}
            />
       </div>
    );
}

export default NumberOfEvents;