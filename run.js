const { Client } = require('discord.js-commando')
const config = require('./config')
const fs = require('fs')
config().then((cfg)=>{
  const bot = new Client(cfg.client)
  bot.registry
     .registerGroups(cfg.registerGroups)
     .registerCommandsIn(__dirname + '/src/commands')
  fs.readdir('./src/events/', (err, files)=>{
    if(err) return console.error(err)
    files.forEach(file => {
      let event_function = require(`./src/events/${file}`)
      let event_name = file.split('.')[0]
      bot.on(event_name, (...args) => event_function.run(bot, ...args))
    })
  })
  bot.login(cfg.token);
})
