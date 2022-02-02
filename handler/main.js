const discord = require('discord.js');
const Discord = discord;
const config = require('../main.json');

const client = new Discord.Client({ intents: config.handler.intents });

require('./slashcommands.js')(client);

module.exports = {
	run() {
		client.login(config.handler.token);
		return client;
	},
	get() {
		return client;
	},
	client
};

require('./events.js')(client);
/*
const client = require('main.js').run(); // Per runnarlo e prenderlo
const client = require('main.js').get(); // Per prenderlo e basta
*/
