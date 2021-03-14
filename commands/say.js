const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        const taggedChannel = await message.mentions.channels.first();

        if(taggedChannel) {
            await taggedChannel.send(args.join(" ").replace(taggedChannel, ""));
        } else {
            const saymessage = await args.join(" ");

            if (saymessage.length >= 1) {
                await message.channel.send(saymessage);
            } else {
                await message.channel.send({embed: {
                    color: 16734039,
                    description: "Вам необходимо ввести сообщение!"
                }});
            }
        }
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "У вас нет разрешения на отправку этого сообщения мной!"
                }})
	}
}

module.exports.help = {
    name: "say",
    description: "Отправляет сообщение через бота",
    usage: "say <channel> <message>",
    type: "Moderation"  
}