const Discord = require("discord.js");
const cnf = require('../config.json');

module.exports.run = async (client, message, args) => {

const pollmessage = await args.join(" ");

var pollrandom = ["✅", "❌",];  

if (pollmessage.length <= 0) return message.channel.send({embed: {
            color: 16734039,
            description: "Вы должны предоставить текст, чтобы задать вопрос!"
        }})
const embed = new Discord.RichEmbed()
.setTitle(":ballot_box: " +`${message.author.username}` + " Голосование началось! Реагируйте с помощью смайлов, чтобы проголосовать! :ballot_box:",)
.setColor("RANDOM")
.addField("Голосование", pollmessage,)
.setFooter("Примечание: голосование завершится через 30 секунд! • Бот создан " + `${cnf.owner}`,)
.setTimestamp()
const pollTopic = await message.channel.send({embed})
await pollTopic.react(`✅`);
await pollTopic.react(`❌`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: 30000 });
collector.on('окончено', collected => message.channel.send({embed: {
            color: 3447003,
            title: ":tada: Собрано " + `${collected.size}` + " положительные голоса! :tada:",
			description: "Мой ответ: " + pollrandom[Math.floor(Math.random()*pollrandom.length)] + ", но боюсь голосовать."
        }})
);
}

module.exports.help = {
    name: "poll",
    description: "Создание голосования",
    usage: "poll (arguments)",
    type: "Fun"  
}