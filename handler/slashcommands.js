const Discord = require('discord.js');
const config = require('../main.json');
module.exports = (client) => {
  const slashFiles = fs.readdirSync('./slashcommands').filter(file => file.endsWith('.js'));

  client.slashcommands = new Discord.Collection();

  for (const file of slashFiles) {
    const command = require(`../slashcommands/${file}`);
    client.slashcommands.set(command.data.name, command);
    if (command.public) client.application.slashcommands.set(arrayOfSlashCommands);
    else client.guilds.cache.get(config.global.testserverid).slashcommands.set(arrayOfSlashCommands);
  }
}