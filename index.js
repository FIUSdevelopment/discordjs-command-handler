const login = require('./utils/function/login');
const config = require('./config.json');
// const client = login(config.token);
const discord = require('discord.js')
let client = new discord.Client({intents: 98303});
client.login(config.token);
module.exports = client;

client.config = config;

//const events = require('./utils/handler/events')
//events()