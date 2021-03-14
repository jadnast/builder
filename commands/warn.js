const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
            color: 16734039,
            description: "У вас нет разрешения выдавать предупреждения!"
        }})
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send({embed: {
            color: 16734039,
            description: "Я не могу найти пользователя!"
        }})
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
            color: 16734039,
            description: "Я не могу выдать предупреждение!"
        }})
  let reason = args.join(" ").slice(22);

  if (!reason) return message.channel.send({embed: {
            color: 16734039,
            description: "Пожалуйста, введите причину!"
        }})
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Предупреждение")
  .setColor("RANDOM")
  .addField("Для:", `<@${wUser.id}>`)
  .addField("Модератор:", message.channel)
  .addField("Номер предупреждения:", warns[wUser.id].warns)
  .addField("Причина:", reason)
  .setTimestamp()
  message.channel.send(warnEmbed);
}

module.exports.help = {
    name: "warn",
    description: "Выдать предупреждение пользователю",
    usage: "warn <user> <channel>",
    type: "Moderation"
}