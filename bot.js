const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const request = require("request");
client.guilds.get('<id>');
const express = require("express");
const ms = require("parse-ms");
const db = require('quick.db');
const app = express();
const http = require('http');
client.on('message', message => {'<@616673309169549324>'});
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;
var Long = require("long");

client.on("userUpdate", async(old, nev) => {
  if(old.username !== nev.username) {
  if(!nev.username.includes("⸘") && client.guilds.get("621240013849493504").members.get(nev.id).roles.has("621246530531098626")) {
     client.guilds.get("621240013849493504").members.get(nev.id).removeRole("621246530531098626")
     client.channels.get('623843139819536384').send(`> ${nev} <a:noo:621673686407184414> **- ⸘ -** Tagı çıkardığı için - **⸘ The Rulings** - Rolü Alındı.`)
    } //<a:noo:621673686407184414>
     if(nev.username.includes("⸘") && !client.guilds.get("621240013849493504").members.get(nev.id).roles.has("621246530531098626")) {
      client.channels.get('623843139819536384').send(`> ${nev} <a:okeyy:621673649698635788> **- ⸘ -** Tagı aldığı için - **⸘ The Rulings** - Rolü Verildi.`)
      client.guilds.get("621240013849493504").members.get(nev.id).addRole("621246530531098626")
     }//<a:okeyy:621673649698635788>
  }
  });

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("guildMemberAdd", (member) => {
  const tik = client.emojis.find(emoji => emoji.name === "tik");
  const giris = client.emojis.find(emoji => emoji.name === "giris");
  const kayt = client.emojis.find(emoji => emoji.name === "kayt");
let guild = member.guild; // Reading property `guild` of guildmember object.
let server = member.count;
let user = member.user
let username = member.user.username; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send('**⸘ The Ruling Sunucusuna, Hoş Geldin!** \n > <a:giris:621673767697121285> **'+(user)+'** Senin İle Beraber, **'+(guild.memberCount)+'** Üye Oldu. \n > <a:tik:621671371339988992> Kayıt Olmak İçin **Ses Odalarına** Geçebilir Misin.? \n > <a:kayt:621674712098930689> <@&621245894683131924> Rolünde Ki **Yetkililer** İlgilenecektir.');
}
});

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Sunucudan Biri Ayrıldı.')
    .setDescription(`Ayrılan Kişi;`)
 .setColor("RED")
    .setFooter("⸘ The Ruling", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
function cpanel1() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`621849150006362112`).setName(`⸘ The Ruling`,);
            cpanel2();
        }, 4000);
      });
}

  function cpanel2() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`621849150006362112`).setName(`⸘ The`);
            cpanel3();
        }, 800);
      });
  }
  function cpanel3() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`621849150006362112`).setName(`⸘ Ruling`);
            cpanel1();
        }, 800); //Hızı düşürmeyin
      });
  }
 
 client.on('ready', async message => {
   cpanel1();
 })  
client.on('ready', () => {
  let channel = client.channels.get('621849150006362112');
  channel.join()
});

client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`${message.author}\`${kullanıcı.tag}\` şu anda AFK. Sebep : \`${sebep}\``)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
  }
});

 app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 282000);

const snekfetch = require('snekfetch');
let points = JSON.parse(fs.readFileSync('./xp.json', 'utf8'));
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
client.on("message", async message => {
    if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;
  if (!points[user.id]) points[user.id] = {
    points: 500,
    level: 0,
  };
  let userData = points[user.id];
  userData.points++
  let curLevel = Math.floor(0.0 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
        var user = message.mentions.users.first() || message.author;
message.channel.send(` **`+ user +`**, ${userData.level} **Seviye Oldun. <a:defc:621703458202058752> ** `)
    }
fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
  if (message.content.toLowerCase() === prefix + 'level' || message.content.toLowerCase() === prefix + 'profil') {
const level = new Discord.RichEmbed().setTitle(`${user.username}`).setDescription(`**Seviye:** ${userData.level}\n**EXP:** ${userData.points}`).setColor("RANDOM").setFooter(`Daha çok aktif ol!`).setThumbnail(user.avatarURL)
message.channel.send(level)
  }
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.reply("Başarıyla afk modundan çıktınız.");
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
    message.channel.send(`${USER.tag} kullanıcısı AFK\n AFK süresi: ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\nSebep:\n **${REASON}**` )
  }
});
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});

client.on('message', msg => {
  if (msg.content === '!tag') {
    msg.channel.send('⸘');
  }
});

client.on('message', msg => {
  if (msg.content === '!link') {
    msg.channel.send('https://discord.gg/XQmn9UM');
  }
});

	client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

	client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'selam') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

	client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'Selamun aleyküm') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

	client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sea') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 1
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);