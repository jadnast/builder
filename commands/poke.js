const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (client, message, args) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Вы должны упомянуть кого тыкать!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь ткнуть себя!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const embed = new Discord.RichEmbed()
              .setTitle(user.username + " только что ткнул " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " ткнул " + message.author.toString()))
              .setFooter(`rip`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

        }

module.exports.help = {
    name: "poke",
    description: "Ткните упоминания пользователя",
    usage: "poke <user>",
    type: "Fun" 
}