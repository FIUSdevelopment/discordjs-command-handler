const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('descrizione'),
	// permissions: [],
	execute(interaction, client) {
		
	},
};