const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
	let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Если земля не плоская, объясните этоs:")
	.setImage("https://media.discordapp.net/attachments/782335196660891708/820739007968575498/earth.png")
    message.channel.send(embed);
  } catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
  }
}

module.exports.help = {
    name: "flatearth",
    description: "Показывает, почему Земля плоская",
    usage: "flatearth",
    type: "Fun" 
}
