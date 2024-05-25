import React, { useState } from "react";



const Event = ({ event }) => {

    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const handleDescriptionClick = () => {
        descriptionVisible ? setDescriptionVisible(false) : setDescriptionVisible(true)
    }

    return (
        <li className='event'>
            <h2>{event.summary}</h2>
            <p>{event.location}</p>
            <p>{event.created}</p>
            {descriptionVisible ? <p className='description' >{event.description}</p> : null}
            <button
                onClick={handleDescriptionClick} className='show-description'
            >
                {descriptionVisible ? 'Hide Description' : 'Show Description'}
            </button>


        </li>


    );
}

export default Event;