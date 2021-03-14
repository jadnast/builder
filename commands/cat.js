const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    superagent.get('https://nekos.life/api/v2/img/meow')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setTitle("Кошка")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`мяу`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }}));

}

module.exports.help = {
    name: "cat",
    description: "Отправляет случайное фото кота",
    usage: "cat",
    type: "Fun" 
}