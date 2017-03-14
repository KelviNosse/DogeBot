const { Client } = require('discord.js-commando')
const config = require('./config')
config().then((cfg)=>{
  const bot = new Client(cfg.client)
  bot.registry.registerGroups(cfg.registerGroups)
  bot.registry.registerCommandsIn(__dirname + '/src/commands')
  bot.login(cfg.token);
})
