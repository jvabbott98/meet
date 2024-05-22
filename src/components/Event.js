import { getEvents } from "../api";

const setEventsEqualToGetEvents = async () => {
    const events = await getEvents();
}

const Event = () => {
    return (
        <div>
            <li></li>
            <h1>
                {}
            </h1>
        </div>

    );
}

export default Event;