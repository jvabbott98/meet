import React, { useState } from "react";



const NumberOfEvents = () => {
    return (
       <div id='number-of-events' >
        <input
                type="text"
                className="number"
                placeholder="Number of Events"
                defaultValue= {32}
                // onFocus={() => setShowSuggestions(true)}
                // onChange={handleInputChanged}
            />
       </div>
    );
}

export default NumberOfEvents;