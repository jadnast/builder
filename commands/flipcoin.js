const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  
function doanswer() {
    var answers = ["Орел", "Решка"]
    return answers[Math.floor(Math.random()*answers.length)];
}

  await message.channel.send({embed: {
        color: 3447003,
        description: "И так у вас: " + doanswer(),
    }});
	
	
}

module.exports.help = {
    name: "flipcoin",
    description: "Подбросьте виртуальную монету",
    usage: "flipcoin",
    type: "Fun"   
}
