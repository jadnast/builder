const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
        await message.channel.send({embed: {
            color: 3447003,
            description: "🏓 Пинг.."
        }}).then(msg=>{
        const ping = new Discord.RichEmbed()
        .setTitle(':ping_pong: Понг!')
		.addField("Пинг Бота:", + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms")
		.addField("Пинг API:", + `${Math.round(client.ping)}` + "ms")
        .setColor('RANDOM')
		.setTimestamp()
        msg.edit(ping);
        msg.edit("\u200B")
    })
}



module.exports.help = {
    name: "ping",
    description: "Получает пинг",
    usage: "ping",
    type: "General"
}