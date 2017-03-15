const {Command} = require('discord.js-commando')
module.exports = class About extends Command {
  constructor(client) {
    super(client, {
      name: 'acerca',
      group: 'tasks',
      memberName: 'acerca',
      description: 'Muestra el uso de un comando',
      examples: ['ayuda <comando>']
    })
  }

  show_command_use(command){
    let msg = ``
    const commands = this.client.registry.commands
    let command_data = commands.find((c) => { if(!c.guildOnly) return c.name === command })
    if(command_data === null) return `Ups, el comando que ingresaste no existe\nEscribe **>ayuda** para ver la lista de comandos`
    msg += `__**Comando: ${command_data.name}\n**__`
    msg += `\n*${command_data.description}*\n`
    command_data.examples.forEach((d) => {
      msg += `*Ejemplo:* **${d}**`
    })
    return msg
  }

  async run(message, args){
    let command = args.split(' ')
    if(command.length !== 1) return message.say(`Whoa, tranquilo, solo espero un argumento! Intenta de nuevo.`)
                                           .then(msg => msg.delete(3000))
    message.say(this.show_command_use(command[0]))
  }
}
