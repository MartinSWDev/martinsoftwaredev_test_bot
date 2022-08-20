const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription("Returns a select menu"),
    async execute (interaction, client){
        const menu = new SelectMenuBuilder()
            .setCustomId(`select-test`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                {
                    label: `Option #1`,
                    description: `This is option one`,
                    value: 'https://google.com',
                },
                {
                    label: 'Option #2',
                    description: `This is option two`,
                    value: `https://facebook.com`,
                },
            );

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        });

    },
};