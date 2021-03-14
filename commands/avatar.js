const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.mentions.users.size) {     
        let embed = new Discord.RichEmbed()
		
          .setColor("RANDOM")
          .setAuthor(message.author.username + "'s Аватар", message.author.displayAvatarURL)
          .setImage(message.author.displayAvatarURL)  
        
        message.channel.send(embed)
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username},${user.displayAvatarURL}`;
    });

    for (var i = 0; i < avatarList.length; i++) {
        let Username = avatarList[i].split(',')[0];
        let AvatarURL = avatarList[i].split(",").pop();

        let embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(Username + "'s Аватар", AvatarURL)
          .setImage(AvatarURL)
        
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "avatar",
    description: "Получает аватар пользователя по упоминанию",
    usage: "avatar <mention>",
    type: "Utility",
}
