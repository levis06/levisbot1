const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname('⸘ ' + isim)
  message.channel.send(`<a:tik:621671371339988992> Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isim'],
    permLevel: 1
}

exports.help = {
    name: 'isim',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isim @kullanıcı <kullanıcı adı>'
}