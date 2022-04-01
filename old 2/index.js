const Discord = require('discord.js');
const bot = [];
bot.config = require('./config.json');

bot.Client = new Discord.Client(bot.config.client);
bot.client = bot.Client;
const Collection = Discord.Collection;
bot.client.commands = new Collection();
bot.client.aliases = new Collection();
bot.client.cooldowns = new Collection();
bot.client.slashCommands = new Collection();

bot.Client.login(bot.config.token);
require('./handler/commands');
require('./handler/events');
require('./handler/slashcommands');
module.exports = bot