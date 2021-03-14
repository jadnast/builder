const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        const deleteCount = await parseInt(args[0]);

        if(!deleteCount || deleteCount < 1 || deleteCount > 100) {
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Введите число от 1 до 100!"
            }})
        }
       
        // So we get our messages, and delete them. Simple enough, right?
        message.channel.fetchMessages({limit: deleteCount})
            .then(function(list){
                message.channel.bulkDelete(list);
                message.channel.send({embed: {
                    color: 16734039,
                    description: deleteCount + " сообщения удалены! :white_check_mark:"
                }}).then(msg => msg.delete(2000));
            }, function(err){
                message.channel.send({embed: {
                    color: 16734039,
                    description: "ОШИБКА: " + err
                }})
        })  
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "У вас нет разрешения на удаление сообщений!"
                }})
	}
}

module.exports.help = {
    name: "prune",
    description: "Удаляет до 100 сообщений",
    usage: "prune <amount>",
    type: "Moderation"
}