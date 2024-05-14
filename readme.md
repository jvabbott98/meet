# Filter Events by City
## User Story

As a user 
I should be able to filter events by city
so that I can see a list of events taking place in that city.

### Gherkin

Scenario - When user hasn't searched for a specific city, show upcoming events from all cities.
- Given the user hasn't searched for any city.
- When the user opens the app.
- Then the user should see a list of upcoming events.

Scenario - User should see a list of suggestions when they search a city.
Given the main page is open.
When the user starts typing in the city textbox.
Then the user should receive a list of cities that match what they typed.

Scenario - User can select a city from the suggested list.
Given user was typing [city] in the textbox AND the list of suggested cities is showing.
When the user selects a city from the list.
Then their city should be changed to that city AND the user should recieve a list of upcoming events for that city.