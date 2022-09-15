const {ActivityType} = require("discord.js");
module.exports = (client) => {
    client.pickPresence = () => {
        const options = [{
            type: ActivityType.Watching,
            text: "over all the Devs",
            status: "online"
        },
            {
                type: ActivityType.Listening,
                text: "for commands",
                status: "online"
            },
            {
                type: ActivityType.Playing,
                text: "with Discord.js",
                status: "online"
            }];

        const option = Math.floor(Math.random() * options.length);
        client.user.setPresence({
            activities: [{
                name: options[option].text,
                type: options[option].type,
            }],
            status: options[option].status,})
    }
}