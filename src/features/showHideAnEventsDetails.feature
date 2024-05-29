Feature: Show/hide event detials
    Scenario: When user has not clicked on a specific event, hide event details.
        Given the user has searched for a city and has not clicked on an event.
        When the user selects a city from the list provided after searching for a city.
        Then the user should see a list of upcoming events for that city.

    Scenario: User should be able to see more information about an event by clicking on it.
        Given a list of events in a given city is presented to the user.
        When a user selects one of the events.
        Then more information about that event will be shown to the user.

    Scenario: User should be able to hide information about an event by clicking on it.
        Given the user has selected an event AND can see additional information about that event.
        When the user clicks on that event again. 
        Then Then additional information will be hidden again.
