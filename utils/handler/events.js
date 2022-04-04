const { glob } = require("glob");
const { promisify } = require("util");
const { Client, Message } = require("discord.js");
const globPromise = promisify(glob);
// const client = new Client()
const client = require('../../index')
module.exports = async function () {
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => {
        const event = require(value)
        if (event.once) {
	    	client.once(event.name, (...args) => event.execute(...args));
	    } else {
		    client.on(event.name, (...args) => event.execute(...args));
    	}
  });
}
