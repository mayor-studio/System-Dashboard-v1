const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('../dashboard/config/config.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on('ready', () => {
    const timestamp = new Date().toLocaleString();
    console.log('==============================');
    console.log('MAYOR STUDIO');
    console.log('discord.gg/mayor');
    console.log(`Bot is online as: ${client.user.tag}`);
    console.log(`Logged in at: ${timestamp}`);
    console.log('==============================');
    require('../dashboard/server.js')(client);
});

client.Çɱɗ = new Collection()
client.Çʍɗ = new Collection()
client.Prefix = config.prefix

const fs = require('fs')
fs.readdirSync(`${process.cwd()}/bot/Handler/`).forEach((Handler) => {
    require(`${process.cwd()}/bot/Handler/${Handler}`)(client)
})
client.on('error', error => {
    console.error('The bot encountered an error:', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.login(config.token);

module.exports = client;
