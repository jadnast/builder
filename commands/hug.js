const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (client, message, args) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Вы должны упомянуть кого-нибудь, чтобы обнять его!"
            }})
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь себя обнять!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const embed = new Discord.RichEmbed()
              .setTitle(user.username + " Только что обнял " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " получил объятие от " + message.author.toString()))
              .setFooter(`это так мило`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

        }

module.exports.help = {
    name: "hug",
    description: "Обнять упомянутого пользователя",
    usage: "hug <user>",
    type: "Fun" 
}