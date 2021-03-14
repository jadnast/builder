const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if (!message.channel.nsfw) return message.channel.send({embed: {
                color: 16734039,
                description: "Вы можете использовать эту команду в канале NSFW!"
            }})

    superagent.get('https://nekos.life/api/v2/img/cum')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle(":smirk: Сперма")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: сперма`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));
	
}

module.exports.help = {
    name: "cum",
    description: "Показать случайное изображение спермы/гифку",
    usage: "cum",
    type: "NSFW" 
}