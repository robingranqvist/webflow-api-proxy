# Webflow API Proxy Express Server

You really don't want to expose your API keys in your Webflow front-end code. So use this instead.

## How to use it

Clone the repo & run __yarn install__ or __npm install__.

Add a .env file. Add your secret token(s) (and or URL) inside the .env file and modify the Axios request to fit whatever API you're calling. I'm calling the Dribbble API, which needs an URL, an amount of shots to be pulled & an access token. 

[Deploy in a firebase function](https://firebase.google.com/docs/functions/get-started)

[Deploy on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

## Usage in Webflow

When deployed, simply call your proxy with a simple [Javascript fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) and you have access to whatever API you're calling without exposing your keys. Boom, that's it.

## Start 

__yarn start__

## Dev (Nodemon)

__yarn dev__