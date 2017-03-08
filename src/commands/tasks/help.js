const { Command } = require('discord.js-commando')
module.exports = class Help extends Command {
    constructor(client) {
        super(client, {
            name: 'ayuda',
            group: 'tasks',
            memberName: 'ayuda',
            description: 'Muestra todos los comandos disponibles'
        });
    }

    list_commands(){
      const commands = this.client.registry.commands
      const emoji    = this.client.emojis.find((e) => {return e.name === 'cooldoge' })
      let msg = '**Wow, cosas que puedo hacer**\n'
      msg += commands.map((c) => {
        return `${emoji} **${c.name}:** ${c.description}`
      }).join('\n')
      return msg
    }
    async run(message, args) {
        console.log(`Let's see`)
        message.say(this.list_commands())
    }
}
