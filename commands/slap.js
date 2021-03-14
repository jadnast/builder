const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (client, message, args) => {

            const user = message.mentions.users.first();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                description: "Вы должны упомянуть кого-нибудь, чтобы дать пощечину!"
            }});

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь дать себе пощечину!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const embed = new Discord.RichEmbed()
              .setTitle(user.username + " только что получил пощечину " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " получил пощечину " + message.author.toString()))
              .setFooter(`Это должно быть больно ._.`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

        }

module.exports.help = {
    name: "slap",
    description: "Дать пощечину пользователю",
    usage: "slap <user>",
    type: "Fun" 
}