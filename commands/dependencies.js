const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
try {
	const embed = new Discord.RichEmbed()
	  .setTitle(":bricks: Зависимости")
      .setDescription(client.user.tag + " запускать на " + Object.keys(require('../package').dependencies).length + " зависимости")
	  .setTimestamp()
	  .setColor("RANDOM")
  message.channel.send(embed);
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
  }
}

module.exports.help = {
    name: "dependencies",
    description: "Возвращает количество используемых мной зависимостей.",
    usage: "dependencies",
    type: "Utility" 
}
