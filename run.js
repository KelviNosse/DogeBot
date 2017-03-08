const { Client } = require('discord.js-commando')
const config = require('./config')
const bot = new Client(config.client)
bot.registry.registerGroups(config.registerGroups)
bot.registry.registerCommandsIn(__dirname + '/src/commands')
bot.login(config.token);
