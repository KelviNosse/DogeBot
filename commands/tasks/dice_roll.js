const commando = require('discord.js-commando')

module.exports = class DiceRoll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'tasks',
            memberName: 'roll',
            description: 'Rolls a dice!'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply(`Tiraste un ${roll}`)
    }
}
