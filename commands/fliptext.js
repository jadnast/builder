const Discord = require("discord.js");
const flip = require("flip-text");

module.exports.run = async (client, message, args) => {

if (args.length <= 0) return message.channel.send({embed: {
            color: 16734039,
            description: "Вы должны предоставить текст!"
        }})

      var flipped = [];
  
  args.forEach((arg) => {
      flipped.push(flip(arg));
  });
  

const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
	  .setTitle("Перевернутый текст: " + flipped.join(" "))
  await message.channel.send(embed);
}

module.exports.help = {
    name: "fliptext",
    description: "Отразить текст",
    usage: "fliptext <text>",
    type: "Fun"
}