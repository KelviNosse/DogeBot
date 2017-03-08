const { Client } = require('discord.js-commando')
const bot = new Client()
const config = require('./config')
bot.registry.registerGroup('tasks', 'Tasks')
bot.registry.registerCommandsIn(__dirname + '/src/commands')
bot.login(config.token);
