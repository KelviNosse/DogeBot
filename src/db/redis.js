const redis = require('redis')
module.exports = class Redis {
    //this only exists for auth config for the bot, may change on the future
    constructor() {
        this.redis = redis.createClient({
            db: 2
        })
    }
    get db() {
        return this.redis
    }
    set_file(filename, data) {
        this.redis.set(filename, data, this.redis.print) //setting the entire file :O
    }
    get_file(filename) {
        return new Promise((res, rej) => {
            this.redis.get(filename, (err, reply) => {
                if (err) rej(`Got error: ${err}`)
                else {
                    res(reply)
                }
            })
        })
    }
    start() {
        this.redis.on('error', err => console.error(err))
            .on('reconnecting', () => console.warn('Reconnecting lol...'))
    }
}
