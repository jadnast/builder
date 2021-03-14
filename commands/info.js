const cnf = require('../config.json');
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {

const prefix = process.env.PREFIX;
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
let embed = new Discord.RichEmbed()
.setTitle(`Information for developers`)
.setColor('RANDOM')
.setDescription(`My prefix is: \`${prefix}\`\n`)
.setThumbnail(client.user.displayAvatarURL)
.addField('• Разработчик', `${cnf.owner}`)
.addField('• Версия', `${process.version}`)
.addField('• Время безотказной работы', `${duration}`)
.addField('• Кол-во участников', `${client.users.size}`)
.addField('• Кол-во каналов', `${client.channels.size}`)
.addField('• Использование памяти', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
.setFooter(`Бот создан ${cnf.owner}`)
message.channel.send(embed);
}

module.exports.help = {
    name: "info",
    description: "Display a bot info for developers",
    usage: "info",
    type: "General"  
}
