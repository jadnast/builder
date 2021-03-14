const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

       if(message.guild === null)return;


    if(args.length < 1) {
	    return message.channel.send({embed: {
            color: 16734039,
            description: "Вы должны предоставить уравнение для решения на калькуляторе! (например, 9 + 10)"
        }}) 
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21 (🤣 XD, Вы нашли пасхалку)';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send({embed: {
                color: 16734039,
                description: "Неверное математическое уравнение: " + `${err}`
            }});
          return;
        }
    }

  const calc = new Discord.RichEmbed()
              .setTitle("Калькулятор")
              .setColor(`RANDOM`)
              .addField("Вопрос: ", `${question}`)
              .addField("Ответ: ", `${answer}`)
          message.channel.send(calc);
}

module.exports.help = {
    name: "calc",
    description: "Калькулятор",
    usage: "calc <task>",
    type: "Fun" 
}