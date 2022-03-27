const Discord = require("discord.js");
module.exports = {
   name: "serverlist",
   aliases: [],
   cooldowns: 3000,
   description: "Fa l'elenco dei server in cui il bot è",
   usage: "",
   toggleOff: false,
   developersOnly: true,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    client.guilds.cache.map(guild => {
        message.channel.send(`${guild.name}`)
    });
   },
};