
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
let p = "tess!";
client.on('message', message => {
if(message.content.startsWith(p + "info")) {
  let guildID = message.guild.id
  let verifilv = ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий']
    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setAuthor(guildID.name, guildID.iconURL) // параметры: имя: string, картинка: string, url: string
        .addField('Владелец', guildID.owner, true) // параметры: название: string, значение: string, в линию?: boolean (true, false)
        .addField('ID', guildID.id, true)
        .addField('Регион', guildID.region, true)
        .addField('Участники', `${guildID.presences.size} в сети\n${guildID.memberCount} всего`, true)
        .addField('Каналы', `${message.guild.channels.filter(c => c.type == 'text').size} тестовых\n${guildID.channels.filter(c => c.type == 'voice').size} голосовых`, true)
        .addField('Уровень проверки', verifilv[guildID.verificationLevel], true)
        .addField('Ролей', guildID.roles.size, true)
        .addField('Эмодзи', guildID.emojis.size, true)
        .setFooter('Сервер создан') // параметры: текст: string, картинка: string
        .setTimestamp(new Date(guildID.createdTimestamp)) // конверт времени
        .setColor("#affaff") // цвет
       message.channel.send(embed)
  }
})


client.login(process.env.BOT_SECRET);





