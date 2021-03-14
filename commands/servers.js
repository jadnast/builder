const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Я есть на " + `${client.guilds.size}` + " серверах!")
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "servers",
    description: "Показать количество серверов",
    usage: "servers",
    type: "Utility"   
}