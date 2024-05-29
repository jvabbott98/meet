import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;

        given('a number of events has not been specified.', () => {

        });

        when('the user is viewing the main page.', () => {
            AppComponent = render(<App />);
        });

        then('32 events will be shown.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('The user should be able to specify the number of events shown.', ({ given, when, then }) => {
        let AppComponent;

        given('the user is viewing the main page.', () => {
            AppComponent = render(<App />);
        });

        when('the user selects a number of events.', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;

            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

            await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
        });

        then('the selected number of events will be shown.', async () => {
            const AppDOM = AppComponent.container.firstChild;

            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

            const EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                const RenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
                expect(RenderedEventItems.length).toEqual(10);
            });
        });
    });

});