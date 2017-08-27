const { Command, User } = require('discord.js-commando')
const { stripIndents } = require('common-tags')
const moment = require('moment')

module.exports = class UserInfo extends Command {
    constructor(client){
        super(client, {
            name: 'userinfo',
            group: 'info',
            memberName: 'userinfo',
            description: 'Info acerca de un usuario',
            examples: ['userinfo <usuario>']
        })
    }

    async run(message, args){
        const mention = message.mentions.users.first()
        const member = message.member
        const user = mention === undefined ? member.user : mention
        return message.embed({
            color: 3447003,
            fields: [
                {
					name: '❯ Detalles del Usuario',
					value: stripIndents`
                        • **Status**: ${user.presence.status}
                        
                        • **Jugando**: ${user.presence.game ? user.presence.game.name : 'None'}

                        • **En Discord desde**: ${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} ${user.bot ? '\n\n• **Lol, soy un bot**' : ''}
					`
				}
            ],
            thumbnail: { url: user.displayAvatarURL }
        });
    }
}