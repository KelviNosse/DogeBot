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

	async run(message, args) {
      //remember that discord only allows to bulk delete messages under 14 days old
      const messages_delete = await message.channel.fetchMessages({limit: 50}).catch(() => null)
      message.channel.bulkDelete(messages_delete.array().reverse()).catch((err) => console.log(err.text))
  }
};
