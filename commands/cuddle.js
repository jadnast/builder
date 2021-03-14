const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports.run = async (client, message, args) => {
            const user = message.mentions.users.first();

            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Вы должны упомянуть кого-нибудь, кого нужно обнимать!"
            }})

            superagent.get('https://nekos.life/api/v2/img/cuddle')
                .end((err, response) => {
              const embed = new Discord.RichEmbed()
              .setTitle(user.username + " Только что получил объятия от " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + "получил объятия от " + message.author.toString()))
              .setFooter(`как это мило`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

        }

module.exports.help = {
    name: "cuddle",
    description: "Прижаться к упоминанию пользователя",
    usage: "cuddle <user>",
    type: "Fun" 
}