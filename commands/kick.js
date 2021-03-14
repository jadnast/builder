const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("KICK_MEMBERS")) {
        let mentioned = await message.mentions.members.first();
        let reason = await args.slice(1).join(' ');

        if (!mentioned)
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Упомяните действительного участника!"
            }})
        if (!mentioned.kickable)
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Вы не можете выгнать этого участника!"
            }})   
		if (message.author === mentioned) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь ударить себя!"
            }})
		}
        if (!reason)
            reason = "Причина не указана!";
        
        mentioned.kick(reason);
        await message.channel.send({embed: {
            color: 16734039,
            description: ":arrow_right: " + mentioned.displayName + " был выгнан! :door:"
        }});     
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "У вас нет разрешения выгнать участников!"
                }})
	}
}

module.exports.help = {
    name: "kick",
    description: "Выгоняет человека",
    usage: "kick <mention> <reason>",
    type: "Moderation"
}