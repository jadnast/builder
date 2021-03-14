const Discord = require("discord.js");
const weather = require('weather-js')

module.exports.run = async (client, message, args) => {

if(args.length === 0){
    let errorembed = new Discord.RichEmbed()
    .setTitle("Ошибка :cry:")
    .setDescription("Пожалуйста, введите местоположение!")
	.setColor("FF5757")
    .setTimestamp()
  return message.channel.send(errorembed);
}

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(result.length === 0){
    let errorembed = new Discord.RichEmbed()
    .setTitle("Ошиька :cry:")
    .setDescription("Пожалуйста, введите действительное местоположение!")
	.setColor("FF5757")
    .setTimestamp()
  return message.channel.send(errorembed);
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) {
	let errorembed = new Discord.RichEmbed()
    .setTitle("Ошбка :cry:")
    .setDescription("Пожалуйста, введите действительное местоположение!")
	.setColor("FF5757")
    .setTimestamp()
  return message.channel.send(errorembed);
	}

	
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Погода для ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00AE86)
    .addField('Часовой пояс', `UTC${location.timezone}`, true)
    .addField('Тип степени', location.degreetype, true)
    .addField('Температура', `${current.temperature} Градусов`, true)
    .addField('По ощущениям', `${current.feelslike} Градусов`, true)
    .addField('Ветер', current.winddisplay, true)
    .addField('Влажность', `${current.humidity}%`, true)
    message.channel.send(embed)
});


}

module.exports.help = {
    name: "weather",
    description: "Показать статистику погоды",
    usage: "weather <location>",
    type: "Utility"  
}