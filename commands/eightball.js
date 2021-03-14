const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!args.length) return message.channel.send({embed: {
         color: 16734039,
         description: "Thee needeth to asketh f'r a f'rtune"
         }})


  var fortunes = ["Да.","Несомненно","Совершенно верно","Без сомнения","Да, безусловно","Вы можете на это положиться",
  "Насколько я понимаю, да.", "Скорее всего.", "Outlook в порядке", "Знаки указывают на то, что да", "Ответ туманен, попробуйте еще раз.", "Спросите еще раз позже.",
  "Лучше не говорить тебе сейчас...", "Не могу сейчас предсказать", "Сконцентрируйся и спроси еще раз", "Не рассчитывай на это", "Мой ответ - нет",
  "Мои источники говорят, что нет", "Прогнозы не так хороши...", "Очень сомнительно.",];  
  
  await message.channel.send({embed: {
         color: 3447003,
         description: fortunes[Math.floor(Math.random()*fortunes.length)]
         }})

}

module.exports.help = {
    name: "eightball",
    description: "Говорит вам состояние",
    usage: "eightball <message>",
    type: "Fun"  
}
