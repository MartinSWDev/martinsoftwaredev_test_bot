module.exports = {
    data: {
        name: `fav-color`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `You said your fav color is: ${interaction.fields.getTextInputValue("favColorInput")}`
        });
    }
}