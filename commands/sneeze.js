const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

const sneezes = [
  "***Апчхи!!***",
  "*жевать!*",
  "Ах... Ах... **Апчхи!**",
  "_А..._***АППХЧИИИИИИИИ!***",
  "*Апчхи!* Извинити меня!",
];

await message.channel.send({embed: {
 color: 3447003,
 description: sneezes[Math.floor(Math.random() * Math.floor(sneezes.length))]
}});

}

module.exports.help = {
    name: "sneeze",
    description: "Апчхи!",
    usage: "sneeze",
	type: "Fun"
}
