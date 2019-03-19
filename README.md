This project was bootstrapped with Create React App.
Hosted on Heroku

Heroku App URL - https://goodreads-search-app.herokuapp.com/

To run the app-

1. Clone the repo
2. Run npm install
3. Run cd client
4. Run npm install
5. Run cd ..
3. Run npm run dev
4. The magic happens at PORT 3000!

To run the tests-

1. Run cd client
2. Run npm run test


Things that could have been implemented with more time-

1. Could have written more test cases
2. CSS could be segregated for different components


Existing issue- 

In order to bypass the CORS issue, I have created a node server and making the 3rd party api call from my node server api. Currently I am facing issues after deploying my code to Heroku. Since Heroku assigns a random port number to the node server, so for making a call to my node api from react, I don't know the port number where to make the call. I am working on this and trying to find a solution.

A workaround for the CORS issue is to set
"proxy": "https://www.goodreads.com/" in package.json
But this is not the best solution.