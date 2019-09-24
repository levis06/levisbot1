const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter('⸘ The Ruling')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**DM den mesajlarını kontrol edebilirsin**. :rocket:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setFooter('⸘ The Ruling')
    .setTimestamp()
    .setFooter('⸘ The Ruling')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**⸘ Bot Davet Kapalıdır.**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 4
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
