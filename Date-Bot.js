const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var p = "date$"

client.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
    message.channel.send("Загрузка команд...");
function msdl() {
message.channel.bulkDelete(1)
}
setTimeout(msdl, 1000);

function ls() {
message.channel.send("Я отправил тебе список команд в личные сообщения")
}
setTimeout(ls, 1000);

function helpS() {  
        const embed = new Discord.RichEmbed()
            .setTitle("Помощь")
            .setColor("#00BFFF")
            .setDescription('Мои команды \n **tess!help** - команды бота \n **tess!afk on** - войти в AFK \n **tess!afk off** - выйти из AFK \n **tess!logo** - стырить лого сервера \n **tess!avatar** - стырить аву пользователя \n ***Этот список будет дополняться т.к автор ленивая жопа***')
            .setFooter("Tess bot")
            .setTimestamp();
    client.users.get(message.author.id).send({embed}).then(sentMessage => {   
            sentMessage.react('🇭')
                .then(() => sentMessage.react('🇪'))
                    .then(() => sentMessage.react('🇱'))
                    .then(() => sentMessage.react('🇵'))
                    .catch(console.error)
           
        });
      }
setTimeout(helpS, 2000);
    }
});

client.login(process.env.HUITEBEANETOKEN);
