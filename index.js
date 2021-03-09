const { Client, Embed } = require('./base/structures.js')

const client = new Client()
client.init("commands", "events", "models", "language")
client.login(client.config.token)
client.Embed = Embed

module.exports = client
