const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

const bot = require('../index.js')
const client = bot.client
const Client = bot.Client

module.exports = async () => {
    const slashCommands = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`);
    
      const arrayOfSlashCommands = [];
      slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);
    
        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
      });
      client.on("ready", async () => {
            
      })
}