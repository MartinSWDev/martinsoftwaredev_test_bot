const { ActivityType} = require('discord.js')

module.exports= {
    name: "ready",
    once: true,
    async execute(client){
        setInterval(client.pickPresence, 15 * 1000);
        console.log(`${client.user.tag} has logged into discord`);
    }
}