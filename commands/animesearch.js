const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports.run = async (client, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM")
      .addField('Английское название', data.englishTitle)
      .addField('Японское название', data.japaneseTitle)
      .addField('Тип', data.type)
      .addField('Эпизоды', data.episodes)
      .addField('Рейтинг', data.rating)
      .addField('Эфир', data.aired)
      .addField('Счет', data.score)
      .addField('Статистика очков', data.scoreStats)
      .addField('Ссылка', data.url);

      message.channel.send(malEmbed);

    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Пожалуйста, введите верное имя!"
            }}));

}

module.exports.help = {
    name: "animesearch",
    description: "Искать аниме",
    usage: "animesearch <name>",
    type: "Fun"  
}

