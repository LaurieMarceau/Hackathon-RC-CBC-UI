# Mozaik UI

This project was made during the CBC/Radio-Canada 2019 Hackathon under the theme "Personalisation". Our team of five had less than 40 hours to make our idea of a web page called Mozaik work with the data we were given by CBC and RC. The UI was done with Vue.js.

## Project setup
This project cannot work at the moment without the Mozaik API since it gives the needed recommanded articles in each of the three defined categories. Web development standards were not exactly followed since we only had a short period of time (and it was the first time I was working with CSS, HTML, JS and Vue).

## Results
The home page once everything was wired together:
<img src="https://github.com/LaurieMarceau/Hackathon-RC-CBC-UI/blob/master/results/Homepage%20UI.png" width="900">
The three articles catogories, "Recommended for you", "Others Like" and "To discover" are all provided by the mozaik prediction model. Mozaik api provide those articles, getting them from CBC and/or Radio-Canada depending on the user preference to read in french, english or both. The UI was ressembling the one from Netflix, providing easy browsing and choices view to the user.

The reader page:
<img src="https://github.com/LaurieMarceau/Hackathon-RC-CBC-UI/blob/master/results/Readerpage%20UI.png" width="900">
Accessibility features like changing text size, tab selection and moving the article with keyboard arrows were implemented. An "Up next" side bar is also available to receive reading suggestions (like the Youtube one).

The basic functionment of the Mozaik app:
<img src="https://github.com/LaurieMarceau/Hackathon-RC-CBC-UI/blob/master/results/Principle.png" width="900">

The final presentation is available in the results folder.

## Acknowledgement
In our team of five, three were working on the backend (scrapping data, machine learning, recommandations generation, api, etc) and I worked with another teammate on the frontend. It was the first time for me and my teammate that we developped web front-end.
