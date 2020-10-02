# token-bot

This repository contains both a working sample client (compliments of Luke) va-oauth, as well as a selenium bot to generate tokens.

To run client alone `node index.js`

To run selenium bot `npm run token-bot` (client needs to be running). The bot will go through the entire ID.me flow & log the token to the console.
User can be edited in `token-bot/TokenBot.js` (password always the same)