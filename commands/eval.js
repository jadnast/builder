const Discord = require("discord.js");
const beautify = require("beautify")
const cnf = require('../config.json');

module.exports.run = async (client, message, args) => {
try {
        if(message.author.id !== "440200028292907048") {
            return message.channel.send({embed: {
                color: 16734039,
                description: "У вас нет разрешения на запуск этой команды (запускать ее может только владелец бота)!"
            }});
        }

        if(!args[0]) {
		    return message.channel.send({embed: {
                color: 16734039,
                description: "Поместите пожалуйста код для оценки!"
            }});
        }

            if (args.join(" ").toLowerCase().includes("token")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "Вы не можете использовать это (это из соображений безопасности)!"
            }});
            }
			
			if (args.join(" ").toLowerCase().includes("process.env")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "Вы не можете использовать это (это из соображений безопасности)!"
            }});
            }

            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTimestamp()
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));

            message.channel.send(embed);
    } catch (err) {

         let embed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .setTitle("Error!")
            .setDescription("**Error Code:** *" + err + "*")
			.setFooter("Bot created by " + `${cnf.owner}`)
            .setTimestamp()
            return message.channel.send(embed);
        }
}


module.exports.help = {
    name: "eval",
    description: "Оценивает и запускает код JavaScript",
    usage: "eval <code>",
    type: "Owner"  
}