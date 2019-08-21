const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var p = "date!"

client.on('ready', () => {
    client.user.setActivity('loading..',{ type: "PLAYING" })
    client.user.setStatus('dnd')
    console.log('ready launched bot...')
});



client.login(config.token);
