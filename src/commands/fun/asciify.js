const {
    Command
} = require('discord.js-commando')
const popsicle = require('popsicle')
const emoji_finder = require('../../utils/emo')
module.exports = class Asciify extends Command {
    constructor(client) {
        super(client, {
            name: 'asciify',
            group: 'fun',
            memberName: 'asciify',
            description: 'Convierte texto en arte ASCII',
            examples: ['asciify <texto>']
        })
        this.site = `http://artii.herokuapp.com/`
    }
    get_random_font() {
        return this.font_list[Math.floor(Math.random() * this.font_list.length)]
    }
    async asciify_it(message) {
        try {
            let response = await popsicle.get(`${this.site}make?text=${message}`)
            console.log(response)
            if (response.body) return {
                status: response.status,
                msg: response.body
            }
        } catch (err) {
            console.error(err)
        }
    }
    async run(message, args) {
        if (!args) return message.say(`Ups! Uso invalido! Ejemplo: **asciify** _Pony Rosado_`)
            .then(msg => msg.delete(3000))
        let ascii = await this.asciify_it(args)
        if(ascii.status !== 200) return message.say(`Ups! Algo salio mal ${emoji_finder(this.client.emojis, 'dogesad')}`)
        else return message.say('\`\`\`' + ascii.msg + '\`\`\`')
    }
}
