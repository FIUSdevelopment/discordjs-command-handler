const discord = require('discord.js');

module.exports = async function (token, intents) {
    const client = new discord.client(intents);
    client.login(token);

    return client;
}