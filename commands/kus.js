const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  try {
	let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Кусь, кусь за жопу")
	.setImage("https://media.discordapp.net/attachments/782335196660891708/820740586796875870/Screenshot_6.png")
    message.channel.send(embed);
  } catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
  }
}

module.exports.help = {
    name: "kus",
    description: "Кусает кого-то",
    usage: "kus",
    type: "Fun" 
}
