module.exports = {
    data: {
        name: `do-something`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `https://google.com`
        })
    }
}