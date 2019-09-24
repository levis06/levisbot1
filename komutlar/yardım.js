const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("` ⸘ The Ruling`")
  .setColor('ORANGE')
  .addField("**⸘ Mars Kayıt Komutları**", "**/erkek** = @Kişiyi Etiketle - İsim,\n**/kadın** = @Kişiyi Etiketle - İsim,")
  .addField("**⸘ Mars Rol Verme Komutları**", "**/ra** = @Kişiyi Etiketle - @Rolİsmi, \n**/rv** = @Kişiyi Etiketle - @Rolİsmi,")
  .addField("**⸘ Kullanıcı Komutları**", "**/av** = Avatarınınızı Gösterir. \n**/rapor** = İstediğiniz Kullanıcıyı Reportlarsınız. \n**/sunucubilgi** = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n**/sunucuresmi** = Bulunduğunuz Sunucunun Resmin Gösterir. \n**/kullanıcıbilgim** = Sizin Hakkınızda Bilgi Verir.")
  .addField("**⸘ Sunucu Yetkilisi Komutları**", "**/ban** = İstediğiniz Kişiyi Sunucudan Banlar. \n**/at**  = İstediğiniz Kişiyi Sunucudan Atar. \n**/modlog** = Modlog kanal ayarlar. \n**/sustur** = İstediğiniz Kişiyi Susturur. \n**/sil** = Belirtilen Miktarda Mesajı Siler. \n**/sayac** = Sayac Ayarla. \n**/duyuru** = Güzel Bir Duyuru Görünümü Sağlar.")
  .addField("**⸘ Botun Ana Komutları**", "**/yardım** = Komutlarını Atar. \n**/bilgi** = Bot Hakkında Bilgi Verir. \n**/ping** = Gecikme Süresini Söyler. \n**/davet** = Davet Linkini Atar. \n**/istatistik** = İstatistiklerini Gösterir.")
  .setTimestamp()
  .setThumbnail(message.guild.iconURL)
  .setFooter('⸘ The Ruling')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'halp', 'help', 'y'],
  permLevel: 2
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
