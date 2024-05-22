import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<EventList /> component', () => {
   let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
      });

    test('<NumberOfEvents /> contains element with the role of "textbox"', () => {
        const eventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventsTextbox).toBeInTheDocument();
        
    });

    test('Default value of the input field is 32', () => {
        x=1;
    });
  
    test('"Textbox" value changes accordingly when a user types in it', () => {
        x=1;
    })
  
  });