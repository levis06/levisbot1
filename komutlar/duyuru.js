const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın! :rocket: ');

    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setDescription(`${mesaj}`)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('⸘ The Ruling')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};