const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

await message.channel.send({embed: {
 color: 3447003,
 description: "Буп!"
}});

}

module.exports.help = {
    name: "beep",
    description: "Бип!",
    usage: "beep",
	type: "Fun"
}
