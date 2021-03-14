const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (client, message, args) => {

            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Вы должны упомянуть кого-нибудь, кого можно пощекотать!"
            }});
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь себя пощекотать!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/tickle')
                .end((err, response) => {
              const embed = new Discord.RichEmbed()
              .setTitle(user.username + " просто пощекотал " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " пощекотал " + message.author.toString()))
              .setFooter(`._.`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

        }

module.exports.help = {
    name: "tickle",
    description: "Пощекотать пользователя",
    usage: "tickle <user>",
    type: "Fun"  
}

