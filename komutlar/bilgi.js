const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter('⸘ The Ruling')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**DM den Mesaj attım**! :rocket: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter('⸘ The Ruling')
    .setAuthor(message.author.username, message.author.avatarURL)
	.addField("**⸘ Kurucu**", " GONE#0631", )
  .addField("**⸘ Yapı Numarası**", "0.4.9 ", )
  .addField("**⸘ Üretim Tarih**", " 13 Ağustos 2019 ", )
	.addField("**⸘ Bot Davet**", "Davet Kapalıdır.", )
  .addField("**⸘ Ana sunucusu**", " [Sunucumuza Katıl](https://discord.gg/XQmn9UM) ", )
	.setThumbnail("https://images-ext-1.discordapp.net/external/-IhLYyJr1yogg3qNgNYozyBHxq2ad4kLbmXJY8p_4lk/https/cdn.discordapp.com/icons/621240013849493504/428784122fe1f41d9ebc60e7f29c4603.jpg");
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 4
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
