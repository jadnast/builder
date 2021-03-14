const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.member.hasPermission("BAN_MEMBERS")) {  
    const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;

    const user = args[0];

    if (reason.length < 1) {
		return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны указать причину разблокировки."
                }})
	} else if (!user) {
		return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны предоставить пользовательскую разрешаемую возможность, например идентификатор пользователя."
                }})
	}
    message.guild.unban(user);
		message.channel.send({embed: {
                    color: 16734039,
                    description: "Пользователь раззаблокирован! :scream:"
                }})
  }
};
				
module.exports.help = {
  name: "unban",
  description: "Разбаняет пользователя.",
  usage: "unban <mention> <reason>",
  type: "Moderation"
}