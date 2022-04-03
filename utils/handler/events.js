const { glob } = require("glob");
const { promisify } = require("util");
const { Client, Message } = require("discord.js");
const globPromise = promisify(glob);

module.exports = async function (client) {
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => {
        const event = require(value)
        if (event.once) {
	    	Client.once(event.name, (...args) => event.execute(...args));
	    } else {
		    Client.on(event.name, (...args) => event.execute(...args));
    	}
  });
}
