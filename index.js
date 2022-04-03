const login = require('./utils/function/login');
const config = require('./config.json');
const client = login(config.token);

client.config = config;

const events = require('./utils/handler/events')
events(client)