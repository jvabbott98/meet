# Meet App

This app will allow users to search for various events across different cities in order to help them find and attend events that they are interested in. This is a serverless, progressive web application built with React and wile taking a Test-Driven Development approach. The app relies on the Google Calendar API to fetch upcoming events.

# App Features
## Filter Events by City
### User Story

As a user 
I should be able to filter events by city
so that I can see a list of events taking place in that city.

### Gherkin

Scenario 1:  When user hasn't searched for a specific city, show upcoming events from all cities.
- Given the user hasn't searched for any city.
- When the user opens the app.
- Then the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search a city.
- Given the main page is open.
- When the user starts typing in the city textbox.
- Then the user should receive a list of cities that match what they typed.

Scenario 3: User can select a city from the suggested list.
- Given user was typing [city] in the textbox AND the list of suggested cities is showing.
- When the user selects a city from the list.
- Then their city should be changed to that city AND the user should recieve a list of upcoming events for that city.

## Show/Hide Event Details
### User Story

As a user 
I should be able to show/hide event details 
so that I can see more/less information about an event

### Gherkin

Scenario 1: When user has not clicked on a specific event, hide event details.
- Given the user has searched for a city and has not clicked on an event.
- When the user selects a city from the list provided after searching for a city.
- Then the user should see a list of upcoming events for that city.

Scenario 2: User should be able to see more information about an event by clicking on it.
- Given a list of events in a given city is presented to the user.
- When a user selects one of the events.
- Then more information about that event will be shown to the user.

Scenario 3: User should be able to hide information about an event by clicking on it or another event.
- Given the user has selected an event AND can see additional information about that event.
- When the user clicks on that event again OR selects another event, the additional information will be hidden again.

## Specify Number of Events
### User Story

As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the event list at once.

Scenario 1: User should be able to adjust the number of events shown to them on a single page.
- Given a list of events for a given city is presented to the user.
- When the user selects the number of events to be shown to them at one time.
- Then that number of events or fewer will be shown to the user.

Scenario 2: The user should be able to load additional events on to the page at their discretion.
- Given a limited number of events are presented to the user.
- When the user selects a [show more events] button.
- Then more events will be loaded to the page.

## Use the App when Offline
### User Story

As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online. 

### Gherkin

Scenario: Recently viewed events should be saved to the user's device.
- Given a list of events is presented to the user. 
- When the user views an event.
- Then information about that event should be saved to the user's device.

Scenario: Events saved to the user's device should be viewable offline.
- Given the user is using the app while not connected to the internet.
- When the user tries to access information about a recently viewed event.
- Information about that event is provided to the user. 

Scenario: Events saved to the user's device that have not been viewed recently OR that have already occured are removed from the user's device.
- Given the user has information about recently viewed events saved to their device.
- When the user hasn't viewed the event for an extended period of time OR that event has already occured.
- Then that event is removed from that user's device.

## Add an App Shortcut to the Home Screen
### User Story

As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster.

### Gherkin

Scenario: The user should be able to add a shortcut for the app to their homescreen.
- Given the user is on the app's main page.
- When the user selects an option to add a shortcut to their device's homescreen.
- Then a shortcut is added to their device's homescreen.

## Display Charts Visualizing Event Details
### User Story

As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

### Gherkin

Scenario: The user should be able to pull up a chart with data about upcoming events across multiple cities.
- Given the user is on the main page.
- When the user selects an option to see a chart of events across multiple cities.
- Then a chart showing events in different cities will be shown to the user.

Scenario: The user should be able to filter the chart to show specific cities of interest.
- Given the user is viewing a chart of events across multiple cities.
- When the user selects cities from a list.
- Then the chart will show events only across the selected cities.

# Servers

This app will take advantage of serverless functions to help users find events in their cities. This will help the app scale dynamically with peak usage times like midday to evening when more events are likely to take place. It then scale down when usage is lower. Because serverless functions are charged based on usage, this would help save money and resources during slower times of the year. Finally, serverless functions allow more seamless integration with the Google Calendar API.