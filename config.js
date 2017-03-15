const client = require('./src/db/setup')
async function config(){
  let data = await client.get_file('doge.msp')
  let cfg = JSON.parse(data)
  return {
    registerGroups: [
        ['tasks', 'Tasks'],
        ['tools', 'Tools']
    ],
    client: {
      owner: cfg.owner,
      commandPrefix: '>',
      unknownCommandResponse: false
    },
    token: cfg.token
  }
}
module.exports = async ()=>{
  return await config()
}
