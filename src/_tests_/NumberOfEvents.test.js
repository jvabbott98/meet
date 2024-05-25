import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents
                setCurrentNOE={() => { }}
            />
        );
    });


    test('<NumberOfEvents /> contains element with the role of "textbox"', () => {
        const eventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventsTextbox).toBeInTheDocument();

    });

    test('Default value of the input field is 32', () => {
        const eventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventsTextbox.defaultValue).toBe('32');
    });

    test('"Textbox" value changes accordingly when a user types in it', async () => {
        const user = userEvent.setup();
        const eventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(eventsTextbox, '{backspace}{backspace}10');
        expect(eventsTextbox).toHaveValue('10');
    })

});

