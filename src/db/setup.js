const fs = require('fs')
const msgpack = require('msgpack-lite')
const Redis = require('./redis')
const client = new Redis()
let read_stream = fs.createReadStream('src/priv/doge.msp')
let decode_stream = msgpack.createDecodeStream()
client.start()
read_stream.pipe(decode_stream).on('data', (data)=>{
  client.set_file('doge.msp', JSON.stringify(data))
})

module.exports = client
