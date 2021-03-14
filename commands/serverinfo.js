const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  let serverowner = message.guild.member(message.guild.ownerID);
  var roles = [];
  
  var e = message.guild.emojis.map(e => e.toString())

    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻ (High)", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Highest)"];
    let region = {
        "brazil": ":flag_br: Бразилия",
        "eu-central": ":flag_eu: Центральная Европа",
        "singapore": ":flag_sg: Сингапур",
        "us-central": ":flag_us: Центральная часть США",
        "sydney": ":flag_au: Сидней",
        "us-east": ":flag_us: Восток США",
        "us-south": ":flag_us: Юг США",
        "us-west": ":flag_us: Запад США",
        "eu-west": ":flag_eu: Западная Европа",
        "vip-us-east": ":flag_us: VIP Восток США",
        "london": ":flag_gb: Лондон",
		"europe": ":flag_eu: Европа",
		"india": ":flag_in: Индия",
        "amsterdam": ":flag_nl: Амстердам",
        "hongkong": ":flag_hk: Гонконг",
        "russia": ":flag_ru: Россия",
        "southafrica": ":flag_za:  Южная Африкаa"
    };
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .addField("Владелец сервера", serverowner.user.username + "#" + serverowner.user.discriminator, true)
	.addField("ID", message.guild.id, true)
    .addField("Регион", region[message.guild.region] || message.guild.region, true)
    .addField("Участников", message.guild.memberCount, true)
    .addField("Уровень проверки", verifLevels[message.guild.verificationLevel], true)
    .addField("Каналов", message.guild.channels.size, true)
    .addField("Ролей [" + `${message.guild.roles.size}` + "]", message.guild.roles.filter(r => r.id !== message.guild.id).map(roles => roles.name).join(", ") || "Нет ролей", true)
	.addField("Смайлов [" + `${message.guild.emojis.size}` + "]", e.join(", ") || "Нет смайлов", true)
    .addField("Дата создания", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
	.setTimestamp()
  
  message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Получает информацию о сервере",
    usage: "serverinfo",
    type: "Utility"
}
