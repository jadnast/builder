const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("Сегодня:", `${Day}` + ", " + `${Month}` + ", " + `${Year}`)
.addField("Время суток:", `${today.toString().split(" ")[4]}`)
message.channel.send({ embed })

}

module.exports.help = {
    name: "time",
    description: "Отображение фактического времени",
    usage: "time",
    type: "Utility"   
}