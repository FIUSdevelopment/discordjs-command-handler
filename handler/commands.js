const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

const bot = require('../index.js')
const client = bot.client
const Client = bot.Client

module.exports = async () => {
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
      const file = require(value);
      const splitted = value.split("/");
      const directory = splitted[splitted.length - 2];
  
      if (file.name) {
        const properties = { directory, ...file };
        client.commands.set(file.name, properties);
      }
    });
}