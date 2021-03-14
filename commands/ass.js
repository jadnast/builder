const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');


module.exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "Вы можете использовать эту команду в канале NSFW!"
            }})
	}


  return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.obutts.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const embed = new Discord.RichEmbed()
      .setTitle(":smirk: Задница")
      .setColor(`RANDOM`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
	  .setFooter(`Tags: задница`)


    message.channel.send(embed);
}).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

}

module.exports.help = {
    name: "ass",
    description: "Display a random ass image/gif",
    usage: "ass",
    type: "NSFW" 
}