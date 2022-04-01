const bot = require('../index');
const client = bot.client;
const Client = bot.client;
const chalk = require('chalk');
const prefix = bot.config.prefix
client.on('ready', async () => {
	const supportServer = client.guilds.cache.get(`${main_json.TestingServerID}`);
	if (!supportServer) return console.log('');
	// ———————————————[Status]———————————————
	client.user.setActivity(
		`${prefix}help || ${client.guilds.cache.size} ${client.guilds.cache.size > 1 ? 'Servers' : 'Server'}`,
		//    'Maintenance',
		{ type: 'WATCHING' },
	);
	// ———————————————[Ready MSG]———————————————
	console.log(chalk.green.bold('Success!'));
	console.log(chalk.gray('Connected To'), chalk.yellow(`${client.user.tag}`));
	console.log(
		chalk.white('Watching'),
		chalk.red(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
		chalk.white(
			`${
				client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1
					? 'Users,'
					: 'User,'
			}`,
		),
		chalk.red(`${client.guilds.cache.size}`),
		chalk.white(`${client.guilds.cache.size > 1 ? 'Servers.' : 'Server.'}`),
	);
	console.log(
		chalk.white('Prefix:' + chalk.red(' mr.')),
		chalk.white('||'),
		chalk.red(`${client.commands.size}`),
		chalk.white('Commands'),
	);
	console.log(
		chalk.white('Support-Server: ') +
      chalk.red(`${supportServer.name || 'None'}`),
	);
	console.log('');
	console.log(chalk.red.bold('——————————[Statistics]——————————'));
	var package = require('../package.json');
	console.log(
		chalk.gray(`Discord.js Version: ${discordjsVersion}\nRunning on Node ${process.version} on ${process.platform} ${process.arch}\nBot Version: ${package.version}`),
	);
	console.log(
		chalk.gray(`Memory: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`),
	);

	client.channels.cache.get('908857841081782352').send(`MR.Handy Started Successfully\nBot Version: ${package.version}\nDiscord.JS Version: ${package.dependencies['discord.js']}`);
	console.log('Bot started')
});