# Discord Test Bot
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat-square&logo=node.js&logoColor=white)
![Heroku](https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white)
![Discord](https://img.shields.io/badge/discord.js-%237289DA.svg?style=flat-square&logo=discord&logoColor=white)

This repo provides base code for discord bots that I use to test on my test discord server. 

## Local Copy ##
If you are looking to build your own discord bot I would recommend starting by reading the [Discord.js Guide](https://discordjs.guide) which helped me in building this bot. 

## Prerequisites ##
- **MongoDB:** This bot utilises [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/). In order to replicate this repo you will need your own database. 
- **node.js:** Make sure you have [node.js](https://nodejs.org/en/) installed 

## Set Up ##
1. Run 
    ```
    npm install
    ```
2. Create `.env` file to hold your tokens

Set .env variables for the following
- discord_bot_token (from discord developers once you have set up a bot)
- databaseToken (from mongodb)
- guildId (the id for the discord server)
- clientId (the id for the discord bot)

3. Bring your bot online for testing with
```
npm run test
```

You are then free to edit files and test commands in  your server

You can find out more on about Discord JS and how to build these bots [HERE](https://discordjs.guide/#before-you-begin)


