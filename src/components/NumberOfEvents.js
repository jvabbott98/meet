import React, { useState } from "react";



const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [textboxValue, setTextboxValue] = useState('32');

    const handleInputChanged = (event) => {
        const value = event.target.value;

        setTextboxValue(value);
        if (isNaN(value) && value !=='' || value <= 0 && value !=='') {
            setErrorAlert('Must be a positive number')
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }


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