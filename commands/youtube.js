const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../config.json');

const searcher = new YTSearcher(cnf.api);

module.exports.run = async (client, message, args) => {
  try {
    if (!args[0]) return message.channel.send({embed: {
            color: 15158332,
            description: "Пожалуйста, введите слово для поиска!"
        }})
    
    let msg = await message.channel.send({embed: {
            color: 15158332,
            description: "🔎 Ищем на Youtube ..."
        }})
    
    searcher.search(args.join(' ')).then(info => {
      if (!info.first) {
	  let embed2 = new Discord.RichEmbed()
      .setDescription("Я ничего не нашел на Youtube по вашему запросу!")
      .setColor('FFB500');
	   return msg.edit(embed2);
        }
      let embed = new Discord.RichEmbed()
      .setTitle("🔎 Результат поиска Youtube:")
      .setDescription("`Первый результат:` " + info.first.url + " - " + info.first.title + "\n \`\`\`" + info.first.description + "\`\`\`")
      .setColor('RANDOM');
      msg.edit(embed);
    });

  } catch (err) {
	return message.channel.send({embed: {
            color: 16734039,
            description: "Что-то пошло не так... :cry:"
        }})
  }
}

module.exports.help = {
    name: "youtube",
    description: "Искать на YouTube",
    usage: "search <word>",
    type: "Fun"  
}