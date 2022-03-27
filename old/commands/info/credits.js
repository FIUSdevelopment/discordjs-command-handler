const Discord = require("discord.js");
const {version, updateinfo, updatetoshow} = require("../../package.json")
module.exports = {
   name: "credit",
   aliases: ["credits"],
   cooldowns: 3000,
   description: "View the Creator Info",
   usage: "",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args, db) => {
    const embed = {
        color: 0x000000,
        title: "Credits",
        description: "This is The Credits",
        url: "https://greatnetwork.eu",
        author: {
            name: "FIUS Development",
            url: "https://github.com/fiusdevelopment",
            iconUrl: "https://media.discordapp.net/attachments/835593145076940900/922809290895544340/FIUS.png"
        },
        thumbnail: {
            url: "https://media.discordapp.net/attachments/835593145076940900/922809290895544340/FIUS.png",
        },
        fields: [
            {
                name: "Author",
                value: "FIUS Development (https://bit.ly/discord-fius) - Killer Boss Original"
            }
        ],
        timestamp: new Date(),
        footer: {
            text: "By FIUS Development",
            iconUrl: "https://media.discordapp.net/attachments/835593145076940900/922809290895544340/FIUS.png"
        }
    }
   message.channel.send({embeds: [embed]})
   },
};