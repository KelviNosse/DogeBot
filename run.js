const commando = require('discord.js-commando')
const bot = new commando.Client()
const config = require('./config')
bot.registry.registerGroup('tasks', 'Tasks')
bot.registry.registerCommandsIn(__dirname + '/commands')
bot.login(config.token);
