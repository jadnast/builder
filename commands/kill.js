const Discord = module.require("discord.js");
var deaths = [
  "[NAME1] вызвал Кусака Тано и направил на [NAME2]",
  "Кусака подошла к [NAME2] и закусала...",
  "Кусь, кусь, кусь за жопу!"
];


module.exports.run = async (client, message, args) => {
    let member = await message.mentions.members.first();

    if (!member) {
        return message.channel.send({embed: {
            color: 16734039,
            description: "Укажите действительного члена этого сервера!"
        }})
    }

		if (message.author === member) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Ты не можешь ударить себя!"
            }})
		}
    var pickeddeath = deaths[Math.floor(Math.random()*deaths.length)];
    var change1 = pickeddeath.replace("[NAME1]", message.author.username);
    var change2 = change1.replace("[NAME2]", member.displayName);
  
    await message.channel.send({embed: {
        color: 16734039,
        author: {
          name: "Надгробие " + member.displayName + "!",
          icon_url: member.user.displayAvatarURL
        },
        title: "Причина смерти",    
        description: change2
    }});
}

module.exports.help = {
    name: "kill",
    description: "Убивает пользователя",
    usage: "kill <user>",
    type: "Fun" 
}