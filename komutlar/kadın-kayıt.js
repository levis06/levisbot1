const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("ORANGE")
  .setTimestamp()
  .setFooter('⸘ The Ruling')
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("**/kadın** __adlı komutu özel mesajlarda kullanamazsın.__")
  return message.author.sendEmbed(ozelmesajuyari); }
  let role = ('621245894683131924')
  if(!message.member.roles.has(role)) return message.reply(`Bu Komutu Kullanabilmek İçin <@&621245894683131924> rolüne sahip olmalısın`)  
  let guild = message.guild 
  let user = message.mentions.members.first()
  
  let modlog = guild.channels.find('name', 'mod-log');
  const embed = new Discord.RichEmbed()
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter('⸘ The Ruling')
    .setThumbnail(message.guild.iconURL)
    .addField('**Kullanılan Komut:**', ' /kadın `⸘ Nyks`, Rolü Verildi.')
    .addField('**Kayıt Edilen Kişi:**', user)
    .addField('**Kayıt Eden Yetkili:**', message.author)
    message.react('621671371339988992')
    guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
  
  let kadın = ('621275162934771712')
  let poa = ('621277456137060362')
  if(user.roles.has(poa)) {
  let isim = args.slice(0)
  user.setNickname('⸘ ' + isim)
  user.addRole(kadın)
  user.removeRole(poa)
  }
  if(!user.roles.has(poa)) {
  user.removeRole(poa)
  user.addRole(kadın)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Kadın'],
  permLevel: 1
};

exports.help = {
  name: 'kadın',
  description: 'kadın.',
  usage: 'kadın'
};