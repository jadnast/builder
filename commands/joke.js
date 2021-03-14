const superagent = require('superagent');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.RichEmbed()
        .setTitle("Шутка ваащее огнище!")
        .setDescription(response.body.joke)
        .setColor("RANDOM");
        message.channel.send(jEmbed);
		})
    }

module.exports.help = {
    name: "joke",
    description: "Показать случайную шутку",
    usage: "joke",
    type: "Fun"  
}