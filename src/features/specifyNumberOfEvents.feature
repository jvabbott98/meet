Feature: Specify number of events.
    Scenario: 32 events are shown by default.
        Given a number of events has not been specified.
        When the user is viewing the main page.
        Then 32 events will be shown.

    Scenario: The user should be able to specify the number of events shown.
        Given the user is viewing the main page.
        When the user selects a number of events.
        Then the selected number of events will be shown.