const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reactor")
        .setDescription("Returns reactions"),
    async execute(interaction, client){
        const message = await interaction.reply({
            content: `React here!`,
            fetchReply: true
        });

        //  Custom emoji selection
    // const emoji = client.guilds.emojis.cache.find(emoji => emoji.id = 'put emoji id here');


        // Reaction collector
    // message.react('👍')
    // message.react('👎')
    //     const filter = (reaction, user) => {
    //     return reaction.emoji.name == '👍' && user.id == interaction.user.id
    //     };
    //
    // const collector = message.createReactionCollector({
    //     filter,
    //     time: 15000
    // });
    //
    // collector.on("collect", (reaction,user) => {
    //     console.log(`collected ${reaction.emoji.name} from ${user.tag}`)
    // });
    //
    // collector.on("end", collected => {
    //     console.log(`collected ${collected.size} items`)
    // })

        // Await Reactions
        const filter = (reaction, user) => {
            return reaction.emoji.name == '👍' && user.id == interaction.user.id
        };

        message
            .awaitReactions({filter, max:4, time: 10000, errors:["time"]})
            .then((collected)=> console.log(collected.size))
            .catch((collected)=> {
                console.log(`After ten seconds, only ${collected.size} out of 4 reached`)
            })



},
};