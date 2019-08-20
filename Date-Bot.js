const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var p = "date$"

client.on('message', message => {
    if(message.content.startsWith(p + 'test')) {
    


  }
});

client.login(process.env.HUITEBEANETOKEN);
