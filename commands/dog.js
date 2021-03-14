const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle("Случайная собака")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setFooter(`гав`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

}

module.exports.help = {
    name: "dog",
    description: "Отправляет случайное фото собаки",
    usage: "dog",
    type: "Fun" 
}