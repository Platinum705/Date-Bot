const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const size = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
var red = sin_to_hex(i, 0 * Math.PI * 2/3); // 0 deg
var blue = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
var sin = Math.sin(Math.PI / size * 2 * i + phase);
var int = Math.floor(sin * 127) + 128;
var hex = int.toString(16);

return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
for (let index = 0; index < servers.length; ++index) {
client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
    .catch(console.error);
 
if(config.logging){
console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
}
if(place == (size - 1)){
place = 0;
}else{
place++;
}
}
}
client.on('ready', () => {
console.log(`Logged in as ${client.user.username}!`);
if(config.speed < 10){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
setInterval(changeColor, config.speed);
});



client.on('message', function(message) {
    
    if(message.content === (p + "loop")) { 
message.delete()
message.channel.send("@everyone, до мирового босса осталось **15 минут**")
setTimeout(int, 2000)

 }

function int() {           
console.log("start TIMER")          
setTimeout(int2, 21600000)
}


function int2() {
client.users.get("405258156063850497").send("Checking Timer activated2")
setTimeout(int3, 21600000)
}


function int3() {
client.users.get("405258156063850497").send("Checking Timer activated3")
setTimeout(int4, 21600000)
}


function int4() {
client.users.get("405258156063850497").send("Checking Timer activated4")
setTimeout(int5, 21600000)
}

function int5() {
message.channel.send("@everyone, до мирового босса **осталось 15 минут**")
client.users.get("405258156063850497").send("Reload Timer")
setTimeout(int, 6000)
}
   
});

client.login(process.env.auth_token);
