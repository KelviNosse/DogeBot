const emoji_finder = require('../utils/emo')
exports.run = (client, member) => {
    let guild = member.guild
    guild.defaultChannel.sendMessage(`Wow ${emoji_finder(client.emojis, 'ohmydoge')} __**Bienvenido seas**__ ${member.user} **:^)**`)
}
