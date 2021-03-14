const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Упомяните пользователя, чтобы получить его ID!"
        }})
    const lolid = new Discord.RichEmbed()
    .setThumbnail(mention.user.avatarURL)
    .setColor("RANDOM")
    .addField('Вот ' + `${mention.user.username}\'s ID`, mention.id)
    message.channel.send(lolid)  
}

module.exports.help = {
    name: "id",
    description: "Отображение идентификатора пользователя",
    usage: "id",
    type: "Utility"  
}