const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction, client) {
		if (interaction.isCommand()) {
			// Server language
			interaction.guildLanguage = await client.db.get(interaction.guild.id).language;
			interaction.language = client.languages.get(interaction.guildLanguage);
			// Command name
			const command = client.commands.get(interaction.commandName);
			if (!command) return;
			// Member Permissions Check
			if (command.permissions) {
				let missing = false;
				command.permissions.forEach(async permission => {
					if (!interaction.memberPermissions.has(permission.raw, true)) {
						if (!missing) missing = [permission];
						else missing.push(permission.name);
					}
				});
				if (missing) {
					const noPermsEmbed = new MessageEmbed({
						title: 'You don\'t have permissions to do that.',
					});
					return await interaction.reply({
						embeds: [noPermsEmbed],
						ephemeral: true,
					});
				}
			}
			// Command executing
			try {
				await command.execute(interaction, client);
			} catch (error) {
				console.error(error);
				const errorEmbed = new MessageEmbed({
					title: `An error has occured: ${error}`,
					
				});
				await interaction.reply({ embeds: [errorEmbed] }).catch(() => {
					interaction.followUp({ embeds: [errorEmbed] });
				});
			}
		} else { return; }
	},
};