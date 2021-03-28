const discord = require("discord.js");

const config = require("./config.json");
const utils = require("./utils/util.js");

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd())
module.exports = { client, config };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

util.loadModules("events");
util.loadModules("commands", true)

client.login("ODI1Njg0MzQxMzc1MzY5MjE2.YGBgdw.8v3o-qiPdNIV5WDhWJ574neIgZU");
