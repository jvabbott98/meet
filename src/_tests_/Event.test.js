import { render } from '@testing-library/react';
import Event from "../components/Event"
import userEvent from "@testing-library/user-event"
import { getEvents } from '../api';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;


    beforeAll(async () => {
        allEvents = await getEvents();
    })
    beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]} />)
    })



    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    });

    test('renders event desctiption button with the title (show description)', () => {
        expect(EventComponent.queryByText('Show Description')).toBeInTheDocument();
    })

    test("by default, event's description section should be hidden", () => {
        expect(EventComponent.container.querySelector('.description')).not.toBeInTheDocument();
    });

    test("shows the description section when the user clicks on the 'show description' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole("button");
        await user.click(button);
        const description = EventComponent.container.querySelector('.description');
        expect(description).toBeInTheDocument();
    });

    test("hides the description section when the user clicks on the 'hide description button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        const description = EventComponent.container.querySelector('.description');
        await user.click(button);
        expect(description).not.toBeInTheDocument();
    });

})