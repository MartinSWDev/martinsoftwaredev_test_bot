// dotenv
require("dotenv").config()
const { discord_bot_token, databaseToken, guildId, clientId } = process.env;
const { connect }= require('mongoose')

//discord
const {Client, Collection } = require("discord.js");
// fs
const fs = require("fs");

const client = new Client({intents: 32767 });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];
client.colour = ""; // color later

const functionFolders = fs.readdirSync("./src/functions");
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter((file)=> file.endsWith(".js"));
    for (const file of functionFiles){
        require(`./functions/${folder}/${file}`)(client);
    }
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(discord_bot_token);

(async () => {
     await connect(databaseToken)
         .catch(console.error)
 })();
