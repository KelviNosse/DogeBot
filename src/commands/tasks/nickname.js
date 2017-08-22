const {Command} = require('discord.js-commando')
const emoji_finder = require('../../utils/emo')
module.exports = class SetNickname extends Command{
  constructor(client) {
    super(client, {
      name: 'nickname',
      group: 'tasks',
      memberName: 'nickname',
      description: 'Cambia tu sobrenombre actual del servidor',
      examples: ['nickname <nombre>']
    })
  }

  async run(message, args){
    if(!args) {
      return message.say(`Wow ups, especifica un nombre!`)
                              .then(msg => msg.delete(3000))
    }
    message.guild.member(message.author).setNickname(args)
    message.say(`Wow! ${emoji_finder(this.client.emojis, 'ohmydoge')} tu nickname ha sido actualizado!`)
           .then(msg => msg.delete(3000))
  }
}
