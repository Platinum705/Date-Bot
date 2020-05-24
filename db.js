const Discord = require('discord.js')
const fs = require('fs') // подключаем fs к файлу
const client = new Discord.Client()
let p = "tess!"

client.on('message', message => {
if(message.content.startsWith(p + "sex")) {
 let mentionuser = message.mentions.users.first();
  if (mentionuser == null) return; 
     if (message.channel.nsfw == false) { return message.channel.send("Разрешено только в каналах с nsfw") }
   let hentimg = [
    'https://cdn.discordapp.com/attachments/674482419415515146/712583114576101426/5.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583115176149023/7.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583115398184960/1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583116379914240/9.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583116941950996/3.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583261548970024/7-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583262614192128/2.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583263817826384/3-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583264384057385/8.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583265583890483/5-1.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712583266343059486/4.gif',
    'https://img2.gelbooru.com/images/57/af/57afbfed1448d4fc672938339bc5ab9c.gif',
    'https://tbib.org/images/1400/586f25137fc90043cd42c455c5fb48b347da062d.gif?1399296',
    'https://img2.gelbooru.com/images/74/73/74733cc93cf450380027dc27fd388526.gif',
    'http://porngipfy.com/content/2016/01/anal-porn-via-analmom69.gif',
    'https://thehentaiworld.com/wp-content/uploads/Uehara-Ami-Love-Selection-Hentai-GIF.gif',
    'https://hopebedandbreakfast.com/img/736591cd2cae98c9b79e133bdd374853.gif',
    'https://tbib.org/images/956/bd80c6c539749f6fc916467f1fdd148c30f72cde.gif?955469',
    'https://img2.gelbooru.com/images/32/1d/321d6bbebb443f5ccc6c502f0883d5c7.gif',
    'https://78.media.tumblr.com/f0c3d0dbfdfe9bdd75ce7c37c31d63fb/tumblr_pd03uqpZiF1uesqwz_1280.gif',
    'https://img2.gelbooru.com/images/d5/40/d540c8b44e6edb5cdf61861b2527c792.gif',
    'https://tbib.org/images/1418/70443fd279ad2024c301c2d0c96ad3c0a2f3d8b7.gif?1549626',
    'http://img3.uploadhouse.com/fileuploads/7923/7923017ed92ded6d0443efeb9af8e849b008a03.gif',
    'https://img2.gelbooru.com/images/d9/84/d9843e98a704240e292082f592e09361.gif',
    'https://tbib.org/images/1419/d66f1de4f703e6a94c331dda8197a7133d621d76.gif?1714656',
    'https://tbib.org/images/1511/3cc4f3ff4acb9586f1de6e0f2da13334bbaaad1a.gif?2024741',
    'https://img2.gelbooru.com/images/51/3d/513dbb1758dbc04f0d00644e07864e42.gif',
    'https://cdn.discordapp.com/attachments/674482419415515146/712590857009627137/thumbnail.gif']
    let hentimgrand = Math.floor(Math.random() * hentimg.length);
    let hentaimember = message.author;
    let hentgif = message.content.split(" ");
    let hentembed = new Discord.RichEmbed()
    .setColor("#affaff")
    .setDescription(hentaimember + " **отхентаил(а)** " + hentgif[1])
    .setImage(hentimg[hentimgrand])
    .setFooter("TessBot|Hentai")
    .setTimestamp()
    message.channel.send(hentembed)
 }
})

client.login(process.env.BOT_SECRET);
