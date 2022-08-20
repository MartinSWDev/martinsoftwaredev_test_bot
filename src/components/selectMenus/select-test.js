module.exports = {
    data: {
        name: `select-test`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `You selected: ${interaction.values[0]}`
        });
    }
}