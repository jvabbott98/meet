import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';  // Fix the import statement


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('When user has not clicked on a specific event, hide event details.', ({ given, when, then }) => {

        let AppComponent;
        given('the user has searched for a city and has not clicked on an event.', () => {
            AppComponent = render(<App />);
        });

        when('the user selects a city from the list provided after searching for a city.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);  // Fix typo and ensure list is not empty
            });
        });

        then('the user should see a list of upcoming events for that city.', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.description');
            expect(eventDetails).not.toBeInTheDocument();  // Fix typo 'exoect' to 'expect'
        });
    });

    test('User should be able to see more information about an event by clicking on it.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;

        given('a list of events in a given city is presented to the user.', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
        });

        when('a user selects one of the events.', async () => {
            const user = userEvent.setup();
            await user.click(EventComponent.getByText('Show Description'));
        });

        then('more information about that event will be shown to the user.', async () => {
            await waitFor(() => {
                expect(EventComponent.container.querySelector('.description')).toBeInTheDocument();  // Add parentheses to method call
            });
        });
    });

    test('User should be able to hide information about an event by clicking on it.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;

        given('the user has selected an event AND can see additional information about that event.', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user = userEvent.setup();

            await user.click(EventComponent.getByText('Show Description'));

            await waitFor(() => {
                expect(EventComponent.container.querySelector('.description')).toBeInTheDocument();
            });
        });

        when('the user clicks on that event again.', async () => {
            const user = userEvent.setup();
            const hideDescriptionButton = EventComponent.getByText('Hide Description');  // Use 'getByText' instead of 'queryByText'
            await user.click(hideDescriptionButton);
        });

        then('Then additional information will be hidden again.', () => {
            expect(EventComponent.container.querySelector('.description')).not.toBeInTheDocument();
        });
    });
});
