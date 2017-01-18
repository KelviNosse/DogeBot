const commando = require('discord.js-commando')
const bot = new commando.Client()

bot.registry.registerGroup('tasks', 'Tasks')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')

bot.login('MjcxMDY3MzA0ODE1NDkzMTI1.C2BCqQ.V1mv5i-WTop_uJWI0E0yo_QFkxY');
