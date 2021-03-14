const Discord = require("discord.js")
const db = require("quick.db")
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
if (message.member.hasPermission("ADMINISTRATOR")) {
if (args[0] == 'welcome') {
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны указать канал, который нужно установить!"
                }})
    }
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
	let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Канал приветствия установлен как ${channel} (Примечание: если у вас есть канал с именем "hello-or-bye", приветственные сообщения будут отправлены ему.)`);
    message.channel.send(embed)
  } else if(args[0] == 'bye') {
	  
	let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send({embed: {
                    color: 16734039,
                    description: "Вы должны указать канал, который нужно установить!"
                }})
    }
    
    db.set(`byechannel_${message.guild.id}`, channel.id)
    
	let embed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
  .setDescription(`Пока канал установлен как ${channel} (Примечание: если у вас есть канал с именем "hello-or-bye", прощальные сообщения будут отправлены ему.)`);
    message.channel.send(embed)

  } else if(args[0] == 'log') {
    let log = message.guild.channels.find("name", "log")  
    if(log) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Канал #log уже существует!"
                }})

    if(!log) {   
		var name = "log";
 message.guild.createChannel(name, { type: "text" }).then(
  (chan) => {
  chan.overwritePermissions(message.guild.id, {
     'SEND_MESSAGES': false
  })
  }
)}
  let success = new Discord.RichEmbed()
  .setDescription("Канал создан, журналы каналов - #logs")
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(success);
  } else if(args[0] == 'list') {
	let list = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Список всех значений для установки")
     	.addField("Добро пожаловать", "Установите приветственный канал. Использование " + `${prefix}` + " set welcome <channel>")
        .addField("Пока", "Установить прощальный канал. Используйте " + `${prefix}` + " set bye <channel>")
		.addField("Логи", "Установит канал логов. Используйте " + `${prefix}` + " set log <channel>")
		message.channel.send(list) 
  } else {
        let embed = new Discord.RichEmbed()
        .setColor("FF5757")
        .setDescription("Введите значение для установки, введите " + `${prefix}` + " установить список для отображения всех значений")
        message.channel.send(embed)
    }

 } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "У вас нет прав на установку конфигурации!"
                }})
	}
}

module.exports.help = {
    name: "set",
    description: "Установите конфигурационную переменную, например. добро пожаловать, пока, канал журналов",
    usage: "set <welcome/bye/log> <channel>",
    type: "Moderation" 
}