const login = require('./utils/function/login');
const config = require('./config.json');
const client = login(config.token, config.client.intents);

client.config = config;