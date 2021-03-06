const client = require("../index.js");
const MapDB = require("quickmap.db");
const config = client.config;
const db = new MapDB(config.databasefilename);
client.on("interactionCreate", async (interaction) => {
   // ———————————————[Slash Commands]———————————————
   if (interaction.isCommand()) {
      const command = client.slashCommands.get(interaction.commandName);
      if (!command)
         return interaction.reply({ content: "An error has occured " });

      const args = [];

      for (let option of interaction.options.data) {
         if (option.type === "SUB_COMMAND") {
            if (option.name) args.push(option.name);
            option.options?.forEach((x) => {
               if (x.value) args.push(x.value);
            });
         } else if (option.value) args.push(option.value);
      }
      interaction.member = interaction.guild.members.cache.get(
         interaction.user.id
      );

      command.run(client, interaction, args, db);
   }
   // ———————————————[Buttons]———————————————
   if (interaction.isButton()) {
   }
   // ———————————————[Select Menu]———————————————
   if (interaction.isSelectMenu()) {
   }
   // ———————————————[Context Menu]———————————————
   if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const command = client.slashCommands.get(interaction.commandName);
      if (command) command.run(client, interaction);
   }
});

