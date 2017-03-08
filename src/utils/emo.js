function emoji_finder(emojis, name){
  return emojis.find((e) => { return e.name === name })
}
module.exports = emoji_finder
