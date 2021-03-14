const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "Вы можете использовать эту команду в канале NSFW!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/eroyuri')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle(":smirk: Двое")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: двое`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));
	
}

module.exports.help = {
    name: "eroyuri",
    description: "Отображение случайного изображения/gif-изображения двоих",
    usage: "eroyuri",
    type: "NSFW" 
}