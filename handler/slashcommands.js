const Discord = require('discord.js');
const config = require('../main.json');
const fs = require('fs');

module.exports = (client) => {

	client.slashcommands = new Discord.Collection();
	const arrayOfSlashCommands = [];

	const categories = fs.readdirSync('./slashcommands');
	for (const category of categories) {
		const commandFiles = fs.readdirSync(`../slashcommands/${category}`).filter(file => file.endsWith('.js'));
		for (const file of commandFiles) {
			const command = require(`./slashcommands/${category}/${file}`);
			arrayOfSlashCommands.push(command);
			client.slashcommands.set(command.data.name, command.data);
			client.application.slashcommands.set(arrayOfSlashCommands);
		}

	}

};