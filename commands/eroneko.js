const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "You can use this command in an NSFW Channel!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/erokemo')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle(":smirk: С Хвостиком")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: хвостик`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));
	
}

module.exports.help = {
    name: "eroneko",
    description: "Отображение случайного изображения/gif-изображения eroneko",
    usage: "eroneko",
    type: "NSFW" 
}