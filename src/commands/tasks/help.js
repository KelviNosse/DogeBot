const {Command} = require('discord.js-commando')
const emoji_finder = require('../../utils/emo')
module.exports = class Help extends Command {
    constructor(client) {
        super(client, {
            name: 'ayuda',
            group: 'tasks',
            memberName: 'ayuda',
            description: 'Muestra todos los comandos disponibles',
            examples: ['ayuda']
        });
    }

    list_commands() {
        const commands = this.client.registry.commands
        const emoji = emoji_finder(this.client.emojis, 'cooldoge')
        let msg = '__**Wow, cosas que puedo hacer**__\n\n'
        msg += commands.map((c) => {
            if (!c.guildOnly)
                return `${emoji} **${c.name}:** ${c.description}`
        }).join('\n')
        msg += `\nEjecuta **acerca <comando>** para saber el uso de un comando en específico.`
        return msg
    }
    async run(message, args) {
        message.author.sendMessage(this.list_commands());
        message.say(`${message.author} te he enviado un mensaje con la información.`)
    }
}
