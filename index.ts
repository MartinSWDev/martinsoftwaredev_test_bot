import DiscordJS, {Intents} from 'discord.js'
import WOKCommands from "wokcommands";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
// new client and tell discord what I intend to use
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

// let us know bot has connected
client.on('ready', () => {
    console.log('Bot is online')

    const guildId = "997217295539642389"
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    }
    else{
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'pong'
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The first numbers.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })
})

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const {commandName, options} = interaction

    if(commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    } else if (commandName === 'add'){
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        await interaction.deferReply({
            ephemeral: true
        })

        await new Promise(resolve => setTimeout(resolve, 1000))

        interaction.editReply({
            content: `The sum is ${num1 + num2}`,
        })
    }
})


// login with token
client.login(process.env.DISCORD_BOT_TOKEN)