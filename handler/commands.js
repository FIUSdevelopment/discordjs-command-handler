const Discord = require("discord.js");
const fs = require("fs");
module.exports = (Client) => {
    const commandsFile = fs.readdirSync("./commands/**/");

    Client.commands = new Discord.Collection();
    
    for(const file of commandsFile){
        const commands = require(`../commands/**/${file}`);
        if (file.name) {
            const properties = { directory, ...file };
            Client.commands.set(file.name, properties);
          }
    }
}
