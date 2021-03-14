const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {
        let mentioned = await message.mentions.members.first();
        let reason = await args.slice(1).join(' ');

        if (!mentioned)
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Упомяните действительного участника!"
            }})
        if (!mentioned.bannable)
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Вы не можете забанить этого участника!"
            }})  
			
		if (message.author === mentioned) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Вы не можете забанить себя!"
            }})
		}
        if (!reason)
            reason = "Причина не указана!";
        
        mentioned.ban(reason);
        await message.channel.send({embed: {
            color: 3447003,
            title: ":scream: " + mentioned.displayName + " Был забанен! (От JADNAST: ха, лох) :scream:"
        }});     
    }
}

module.exports.help = {
    name: "ban",
    description: "Забаняет участника",
    usage: "ban <mention> <reason>",
    type: "Moderation"
}