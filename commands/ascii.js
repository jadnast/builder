var figlet = require('figlet');
const Discord = require('discord.js')

module.exports.run = (client, message, args) => {

  var maxLen = 50

  if(args.join(' ').length > maxLen) return message.channel.send({embed: {
                color: 16734039,
                description: "Максимальная длина " + `${maxLen}` + " !"
            }})

  if(!args[0])return message.channel.send({embed: {
                color: 16734039,
                description: "Пожалуйста, введите текст для преобразования!"
            }})

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
return message.channel.send({embed: {
                color: 16734039,
                description: "Что-то пошло не так... :cry:"
            }})
      }
      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

module.exports.help = {
    name: "ascii",
    description: "Преобразование текста в формат ascii",
    usage: "ascii <text>",
    type: "Fun" 
}