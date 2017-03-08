const { Command } = require('discord.js-commando');

module.exports = class CleanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clean',
            aliases: ['purge', 'prune', 'clear'],
            group: 'tools',
            memberName: 'clean',
            description: 'Borrar mensajes de este canal',
            guildOnly: true
        })
    }

    allowed(msg){
      let modRole = msg.guild.roles.find('name', 'mod')
      if(msg.member.roles.has(modRole.id)) return true
      return false
    }

    async run(message, args) {
        //remember that discord only allows to bulk delete messages under 14 days old
        if(this.allowed(message)){
          const messages_delete = await message.channel.fetchMessages({
              limit: 50
          }).catch(() => null)
          message.channel.bulkDelete(messages_delete.array().reverse()).catch((err) => console.log(err.text))
        }else{
            message.reply('Wow lo siento, no tienes permiso para hacer eso!')
        }
    }
};
