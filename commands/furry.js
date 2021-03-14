const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

const Discord = require('discord.js');
const booru = require('booru');

module.exports.run = (client, message, args) => {

    if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                title: "Вы можете использовать эту команду в канале NSFW!"
            }})
	}
        var query = message.content.split(/\s+/g).slice(1).join(" ");

		    if (!query) {
		return message.channel.send({embed: {
                color: 16734039,
                title: "Вы должны ввести текст для поиска booru!"
            }})
	}
        booru.search('e6', [query], {nsfw: true, limit: 1, random: true })
            .then(images => {
                for (let image of images) {
                    const embed = new Discord.RichEmbed()
                    .setTitle(":smirk: Пушистый")
                    .setImage(image.fileUrl)
                    .setColor('RANDOM')
                    .setFooter(`Tags: Пушистый ${query}`)
                    .setURL(image.fileUrl);
                    return message.channel.send({ embed });
                }
            }).catch(err => {
                if (err.name === 'booruError') {
          		return message.channel.send({embed: {
                color: 16734039,
                title: `По запросу ничего не найдено: **${query}**`
            }})
                } else {
                return message.channel.send({embed: {
                color: 16734039,
                title: `По запросу ничего не найдено: **${query}**`
            }})
                }
})

}

module.exports.help = {
    name: "furrry",
    description: "Отправляет случайное пушистое изображение / gif",
    usage: "furry",
    type: "NSFW" 
} 
