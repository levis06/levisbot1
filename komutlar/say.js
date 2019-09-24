const Discord = require('discord.js')
exports.run = async (client, message, args) => {  
  const embed = new Discord.RichEmbed() 
  .addField('Kanal sayısı:', message.guild.channels.size)
  .addField('Sesli Sohbette ki Toplam Üye Sayısı', `{message.guild.member.(m => Voicechannel).}`)
  .setColor("ORANGE")
    .setTimestamp()
  .setFooter(`Komutu Kullanan <@${message.author}> `)
  return message.channel.send(embed)
  };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['say'],
  permLevel: 0
};

exports.help = {
  name: 'sayı',
  description: 'say.',
  usage: 'say'
};