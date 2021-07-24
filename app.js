const Discord = require('discord.js');
const fs = require('fs');
const { config } = require('./config.js');

// Initialize bot
const client = new Discord.Client();
client.login(config.DISCORD_BOT_TOKEN);

// Reading command files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Reply message
client.on('message', async (message) => {
    if (!message.content.startsWith(config.PREFIX_MESSAGE) || message.author.bot) return;

    const args = message.content.slice(config.PREFIX_MESSAGE.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`Sorry, Boss ${message.author.username}. Please try again that command!`);
    }
});
