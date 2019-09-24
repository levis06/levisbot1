const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id != "605010232426364941") return message.channel.send("Bunun için iznin yok");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter('⸘ The Ruling')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`<a:tik:621671371339988992> **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dmduyuru'],
  permLevel: 2
};

exports.help = {
  name: 'dmduyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'dmduyuru'
};