const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

const bot = require('../index.js')
const client = bot.client
const Client = bot.Client

module.exports = async () => {
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));
}