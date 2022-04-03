const {Client} = require('discord.js');
const getIntents = require('./getIntents.js');
const intentsList = getIntents();

module.exports = async function (token) {
    let client = new Client({intents: 98303});
    client.login(token);

    return client ;
}