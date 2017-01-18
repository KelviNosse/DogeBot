const commando = require('discord.js-commando')

class DiceRoll extends commando.Command {
  constructor(client){
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls a dice!'
    });
  }

  async run(message, args){
    var roll = Math.floor(Math.random() * 6) + 1;
    message.reply('Tiraste un '+ roll)
  }
}

module.exports = DiceRoll;
