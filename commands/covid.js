const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	
    let embed = new Discord.RichEmbed()
    .setTiatle(`Статистика Короновируса`)
    .setColor(0x00AE86)
    .addField(`Россия: 4,33 млн`)
    .addField(`США: 24,9 млн`)
    .addField(`Украина: 1,5 млн`)
    .addField(`Казахстан: 120 тыс`)
    message.channel.send(embed)
};

module.exports.help = {
    name: "covid",
    description: "Показать статистику короновируса",
    usage: "covid",
    type: "Utility"  
}