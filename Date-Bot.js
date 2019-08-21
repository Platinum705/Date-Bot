const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var p = "date$"

client.on('ready', () => {
    client.user.setActivity('loading..',{ type: "PLAYING" })
    client.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});

function status1() {
client.user.setActivity("фигню", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});
}

client.on('message', message => {
    if(message.content.startsWith(p + 'test')) {
    let now = new Date();
console.log(now)


  }
});

client.login(process.env.HUITEBEANETOKEN);
