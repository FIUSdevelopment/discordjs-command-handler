const Discord = require("discord.js");

module.exports = {
   name: "ping",
   aliases: ["p", "pong"],
   description: "Returns Websocket Ping",
   botpermissions: ["ADMINISTRATOR"],
   usage: "How Fast The Bot is?",
   cooldowns: 2000,
   developersOnly: false,
   toggleOff: false,
   run: async (client, message, args) => {
      const embed1 = {
         title: "Pong",
         description: "How fast I am??"
      };
      const embed2 = {
         title: "Pinging...",
         description: "Wait a little bit of time..."
      };
      const embed3 = {
         title: "Pong!",
         description: "```js\nI have "+client.ws.ping+" ms of ping\n```"
      };

//      message.channel.send({embeds: [embed1]})
      message.channel.send({embeds: [embed2]}).then((m4) => {
         setTimeout(() => {
            m4.edit({embeds: [embed3]});
         }, 2000);
      });
   },
};
