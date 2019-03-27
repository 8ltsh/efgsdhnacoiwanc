const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("HEY",{type: 'PLAYING'})

});

var editedyaklaab = "-";
client.on('message', edddiiiittteeeddd => {
 
  if (edddiiiittteeeddd.content ===  editedyaklaab + 'colors'){
              if (!edddiiiittteeeddd.member.hasPermission('MANAGE_ROLES')) return edddiiiittteeeddd.channel.sendMessage(':radio_button: Hey! || You Don\'t Have Perms . ')
	  edddiiiittteeeddd.channel.send('**Done || Create The Colors . :ballot_box_with_check: **')
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 101; x++){
            edddiiiittteeeddd.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

 // اعمل ريستارت يا بوت يا وسخ

const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('-temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done || Temporary Rooms Has Been Activated . :ballot_box_with_check: **')
              client.on('message' , message => {
               if(message.content === '-temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done || Closed . :ballot_box_with_check:**  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "fgfdkjfdhfgdjghdhghj")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });



const clans = {};
const system = {};
const level = {};


client.on('message',async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let args = message.content.split(' ');
  let random = Math.floor(Math.random() * 5) + 2;
  let author = message.author;

  let xpLeft;
  let nameClan;
  let membersClan = [];
  let levelClan = 0;
  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};


  level[author.id].xp += (+random);
  if(level[author.id].xp >= 300) {
    if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;
    level[author.id] = {
      level: level[author.id].level + 1,
      xp: xpLeft
    };

  }
  if(message.content.startsWith(prefix + "clan")) {
    if(message.content.split(' ')[0] !== `${prefix}clan`) return;

    if(!args[1] || args[1] && args[1] === 'info') {
  let embed = new Discord.RichEmbed()
  .setAuthor('الكلانات', message.author.avatarURL)
  .setDescription(`- \`${prefix}clan\`: نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل
  - \`${prefix}clan info\`: لأظهار رسالة الأوامر ( هذه الرسالة ) ء
  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء
  - \`${prefix}clan room\`: لعمل روم شات او كتابي بأسم الكلان ( صاحب الكلان فقط ) ء`)
  .setFooter(message.author.username, message.author.avatarURL);
  message.channel.send(embed);
}

    if(args[1] && args[1] === 'create') {
      //if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
      if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');

      let m = await message.channel.send('**# أكتب أسم الكلان الان**');
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
        if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
        if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
        collected.first().delete().catch();
        nameClan = collected.first().content;
      });

      m = await m.edit('**# جارى عمل الكلان**');
      awaited = await setTimeout(async() => {
        let membersArray = {
          nameClan: {
            array: []
          }
        };
        let members = membersArray.nameClan.array;
        members.push(message.author.id);
        clans[nameClan] = {
          name: nameClan,
          createdAt: new Date().toLocaleString(),
          level: levelClan,
          creator: message.author.id,
          members: members,
          applylist: [],
          admins: []
        };

        system[author.id] = {
          clan: nameClan,
          joinedAt: new Date().toLocaleString(),
          clanLevel: 0,
          creator: message.author.id
        };

        m = await m.edit('**# تم عمل الكلان بنجاح**');
      }, 2300);

    }
    if(args[1] && args[1] === 'invite') {
      if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");
      let clan = system[author.id].clan;
      if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');
      if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
      let mention = message.mentions.users.first();
      if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');
      if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");
      if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");

      let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
        collected.first().delete().catch();
        if(collected.first().content === 'نعم') {
          clans[clan].members.push(mention.id);

          system[author.id].members += 1;


          system[mention.id] = {
            clan: clan,
            joinedAt: new Date().toLocaleString(),
            clanLevel: 0,
            creator: clans[clan].creator
          };

          message.channel.send(`**${message.author} # تم قبول الدعوة**`);
        }
        if(collected.first().content === 'لا') {
          message.channel.send(`**${message.author} # تم رفض الدعوة**`);
        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'stats') {
      if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');
      let clan = system[author.id].clan;
      let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)
        .setDescription(`الكلان || \`${clan.toString()}\``)
        embed.addField('» اسم الكلان', clan, true)
        embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);
        embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)
        embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);
        embed.addField('» لفل الكلان', clans[clan].level, true);
        embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);
        embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);
        embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);
        embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);
      message.channel.send(embed);

    }
    if(args[1] && args[1] === 'join') {
    let clanName = message.content.split(' ').slice(2).join(" ");
    if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");
    if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");
    if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");
    if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");

    clans[clanName].applylist.push(message.author.id);
    message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");

  }
    if(args[1] && args[1] === 'accept') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);
      clans[system[author.id].clan].members.push(mention.id);
      let clan = system[author.id].clan;


      system[mention.id] = {
        clan: clan,
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0,
        creator: clans[clan].creator
      };


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);
    }
    if(args[1] && args[1] === 'decline') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");

      clans[system[author.id].clan].applylist.shift(mention.id);

      system[mention.id] = {
        clan: clans[system[author.id].clan],
        joinedAt: new Date().toLocaleString(),
        clanLevel: 0
      };


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);

    }
    if(args[1] && args[1] === 'promote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.push(mention.id);


      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);
    }
    if(args[1] && args[1] === 'demote') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");

      clans[system[author.id].clan].admins.shift(mention.id);

      mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
      message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
    }
    if(args[1] && args[1] === 'rename') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let newName;
      let oldName = clans[system[author.id].clan];
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
      if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");

      let c = message.content.split(' ').slice(2).join(" ");
      newName = c;
      let clanInfo = clans[system[author.id].clan];
      let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
      let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
        let collected = c.first();
        collected.delete().catch();
        m.delete().catch();
        if(collected.content === 'نعم') {
          clans[newName] = {
            name: newName,
            createdAt: clanInfo.createdAt,
            level: clanInfo.level,
            creator: clanInfo.creator,
            members: clanInfo.members,
            applylist: clanInfo.applylist,
            admins: clanInfo.admins
          };
          clans[system[author.id].clan] = undefined;

          system[author.id].clan = newName;


            message.channel.send("**# جارى تغيير الاسم**");
            message.channel.send("**# تم تغيير اسم الكلان بنجاح**");

        } else if(collected.content === 'لا') {
          message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);

        } else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
          return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
        }
      });
    }
    if(args[1] && args[1] === 'list') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
      let clan = clans[system[author.id].clan];
      let members = Array.from(clan.members);
      let admins = Array.from(clan.admins);
      let applylist = Array.from(clan.applylist);
      let i = 1;
      let o = 1;

      let embed = new Discord.RichEmbed();
      embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
      embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
      embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
      message.channel.send(embed);
    }
    if(args[1] && args[1] === 'leave') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'نعم') {
          clans[system[author.id].clan].members.shift(author.id);

          system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


          message.channel.send("**# لقد غادرت الكلان**");
        } else if(collected.content === 'لا') {
          message.channel.send("**# تم الغاء الخروج من الكلان**");
        } else if(collected.content !== 'نعم' && collected.content === 'لا') {
          message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
        }
      });
    }
    if(args[1] && args[1] === 'kick') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
      if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};

      if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
      if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");

        let index = clans[system[author.id].clan].members.indexOf(mention.id);
        let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
        clans[system[author.id].clan].members.splice(index, 1);
        if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);

        system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


        message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
        mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
    }
    if(args[1] && args[1] === 'ownership') {
      let mention = message.mentions.users.first();
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          clans[system[author.id].clan].creator = mention.id;


          m.delete();
          message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
        } else
        if(collected.content !== number) {
          m.delete();
        }
      });
    }
    if(args[1] && args[1] === 'disband') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      let o = Math.floor(Math.random() * 8) + 1;
      let t = Math.floor(Math.random() * 8) + 1;
      let th = Math.floor(Math.random() * 8) + 1;
      let f = Math.floor(Math.random() * 8) + 1;
      let fi = Math.floor(Math.random() * 8) + 1;
      let number = `${o}${t}${th}${f}${fi}`;

      message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
        return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
      });

      let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
        let collected = c.first();

        if(collected.content === number) {
          m.delete().catch();
          collected.delete().catch();
          let name = system[author.id].clan;
          let members = clans[system[author.id].clan].members.length;
          let cvlMembers = Array.from(clans[name].members);
          for(let i = 0; i < cvlMembers.length; i++) {
            let g = hero.users.get(cvlMembers[0]);
              g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
              system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};


            cvlMembers.shift();
            if(cvlMembers.length <= 0) {
              message.channel.send(`- \`${name}\`, تم اقفال الكلان`);

              system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
              clans[system[author.id].clan] = undefined;

            }
          }
        } else
        if(collected.content !== number) {
          m.delete();
          message.channel.send(`- \`${name}\`, تم الإلغاء`);
        }
      });
    }
    if(args && args[1] === 'room') {
      if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
      if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
      if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
      let id = '487721170687229977';
      let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
      let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
        let collected = c.first();
        if(collected.content === 'كتابي') {
          message.guild.createChannel(system[author.id].clan, 'text').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true,
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        } else if(collected.content === 'صوتي') {
          message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
            c.setParent(id);
            c.overwritePermissions(message.guild.id, {
              CONNECT: false,
              SPEAK: false
            });

            let newArray = Array.from(clans[system[author.id].clan].members);
            for(let i = 0; i < newArray.length; i++) {
              c.overwritePermissions(newArray[0], {
                CONNECT: true,
                SPEAK: true
              });

              newArray.shift();
            }
          });
          m.edit('**# تم عمل الروم**');
        }
      });
    }
  }
});




  client.on('message', async message => {
  if(message.content.startsWith(prefix + "bcall")) {
    let i = client.users.size;
    if(message.author.id !== '486322208109494282') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
    var args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
    setTimeout(() => {
      message.channel.send(`تم الارسال لـ ${i} شخص`)
    }, client.users.size * 500);
    client.users.forEach(s => {
      s.send(args).catch(e => i--);
    });
  }
});



  client.on('guildCreate', guild => {
client.channels.get("544486231065493514").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("544486231065493514").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
  


client.on('message', message => {
         if (message.content === prefix + "td") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "Time & Date.")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                 .addField('- KSA. :flag_sa: ',
                ""+ hours2 + ":" + minutes +":"+ seconds  + "")
                .addField('- EGY. :flag_eg: ',
                ""+ hours3 + ":" + minutes +":"+ seconds  + "")

                .addField('- Date.',
                ""+ Day + "-" + Month + "-" + Year +  "")

                 message.channel.sendEmbed(Date15);
        }
    });

 
client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(`** - أستعمل : -bc [الرسالة] \n يمكنك أرسال صوره مع البرودكاست :smile:**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `<@${message.author.id}>`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});

client.on('message', message => {
  if(message.content.startsWith(prefix + "ping")) {
message.channel.send(`MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n DiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms. `)
}
});

 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});





client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});


client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});



client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });
 

const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

    client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});



client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


message.guild.member(user).ban(7, user);

message.channel.send(`**Done || ${user.tag} Banned . :ballot_box_with_check: **`)

}
});

 client.on('message' , message => {

    if (message.content === "-inv") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**')
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
.setTitle('Click Here .')
.setURL('die')
  message.channel.sendEmbed(embed);
   }
}); 





client.on('message', message => {
if (message.author.codes) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
             if(!message.channel.guild) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
       
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":x:**انت لا تملك الصلاحيات المطلوبه**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply(":x: **ليس معي الصلاحيات الكافية**");
let user = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.reply("- **منشن شخص**");
if (!message.guild.member(user)
.bannable) return message.reply(":x:**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


message.guild.member(user).kick(7, user);

message.channel.send(`**Done || ${user.tag} Kicked . :ballot_box_with_check: **`)

}
});


        if (message.content.startsWith(prefix + 'help')) {
        let pages = ['\n\`\`\` General Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n-server | معلومات السيرفر \n-id | أيدي حسابك\n-emojis | أيموجي السيرفر\n-rank | مستواك الكتابي \n-avatar | صورة بروفايلك\n-ping | سرعة الأتصال\n-gif | صورة متحركه \n-invites | لرؤية دعواتك\n- \`\`\`** ','**\n\`\`\`Admin Commands \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n-kick | طرد عضو\n-ban | حظر عضو\n-voice | المتصلين بالصوت\n-bc | البرودكاست\n-clear | مسح الشات\n-temp on | لعمل قسم خاص بـ صناعه روم بأسمك\n-temp off | لتقفيل الخاصيه\n-mute |لسكات عضو\n-unmute |فك الميوت \`\`\` ** ']

        let page = 1;

        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/477011368403271680/477011788987367435/monogram-l-logo-letter-overlapping-thin-line-vector-5868172.jpg')
        .setDescription(pages[page-1])

        message.channel.sendEmbed(embed).then(msg => {

            msg.react('🌍').then( r => {
                msg.react('🔌')


            const backwardsFilter = (reaction, user) => reaction.emoji.name === '🌍' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '🔌' && user.id === message.author.id;


            const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                msg.edit(embed)
            })
            })
        })
        }
    });


client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle(':negative_squared_cross_mark: »  Emojis.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});


client.on('message', async message => {
  if(message.content.startsWith(prefix + "voice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**:negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__**');
  if(!args) args = ` » VoiceOnline :  ${message.guild.members.filter(s => s.voiceChannel).size} . `;
  message.channel.send('**:white_check_mark: » تم عمل الروم الصوتي بنجاح**');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


var userData = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }

	
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("» UserName :", message.author.tag)
	.addField("» Level :", userData[message.author.id].Level)
	.addField("» XP :",Math.floor(userData[message.author.id].Xp))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});



client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "id")) {
    let newID = new Discord.RichEmbed()
    .setAuthor(`Userinfo.`, message.author.avatarURL)
    .setTitle(`• ${client.user.tag}`)
    .setThumbnail(client.user.avatarURL)
    .addField('• iD', `${client.user.id}`,true)
    .addField('• Nickname', `${client.nickname || 'None'}`,true)
    .addField('• Status', `${client.status.toUpperCase()}`,true)
    .addField('• Joined Discord', `${client.user.createdAt.toLocaleString()}`,true)
    .addField('• Joined Server', `${client.joinedAt.toLocaleString()}`,true)
    .addField('• Roles', `\`${client.roles.map(a => a.name).join('\n')}\``,true)
    .addField('• VoiceChannel', `${client.voiceChannel.name || 'None'}`,true);

    message.channel.send(newID);
  }
});




 client.login(process.env.BOT_TOKEN); 




client.on('message', message => {
    if (message.content === ('-bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@486322208109494282>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

client.on('message', message => {
    var prefix = '-'
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content === "-info.u") {
    var year = message.createdAt.getFullYear()
    var month = message.createdAt.getMonth()
    var day = message.createdAt.getDate()
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
        .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
          .setThumbnail(message.author.avatarURL)
                   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
      .addField('الكود الخاص بك:', message.author.discriminator)
      .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
        .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
            .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
    
      message.channel.send({embed}); // N3k4a Is the one
        }
    }); // Toxic Code


const devs = ['486322208109494282' , '' , ''];

const adminprefix = "-";

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'ply')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**  ${argresult} ply .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'wt')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**  ${argresult} wt .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'ls')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**  ${argresult} ls .. ✅**`)

  } else 

  if (message.content.startsWith(adminprefix + 'li')) {

    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");

      message.channel.sendMessage(`**  ${argresult} st .. ✅**`)

    }

  if (message.content.startsWith(adminprefix + 'us')) {

  client.user.setUsername(argresult).then

      message.channel.send(`**us ..**${argresult}** `)

  } else

  if (message.content.startsWith(adminprefix + 'ev')) {

  client.user.setAvatar(argresult);

    message.channel.send(`**evatar ... :** `);

  }

  });


client.on('message', message => {

    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ ✅ **")
           });
             }
 if(message.content === prefix + "unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__✅**")
           });
             }
             
      
    
});

client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
  var prefix = "-"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    
 
.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);
 
}
 
});


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Community Members ."));
    });


client.on('message', async msg => {
  if(msg.content.startsWith('-leaveall')) {
    if(msg.author.id !== '486322208109494282') return;
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`Leaving from all servers..`);
  }
});



client.on('message', message => {
    let args = message.content.split(' ').slice(2);//Mrx Dev

    if(message.content.startsWith(prefix + 'dm')) {//Mrx Dev
        let man = message.mentions.users.first();
        let Mrx = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('**🆕 You Have New Message!**')//Mrx Dev
        .setThumbnail(man.avatarURL)
        .addField('**🔨 The Sender:**',man.username ,true)//Mrx Dev
        .addField('**📜 The Messasge:**',args)
        .setFooter(client.user.username,client.user.avatarURL)//Mrx Dev
        
        if(!man) return message.reply('Please mention someone!');
        if (!args) return message.reply('**Type Your Message Plz**');
        man.sendEmbed(Mrx).then(() => {
            message.channel.send('✅ Successfully sent the message!');
        }).catch(() => {
            message.channel.send(':X: The user have dms disabled');
        });
    };
});


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("544486231065493514").send({embed:Dark});
    }
});





client.on("message", (message) => {
 
   if (message.content.startsWith("-new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("-close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب.confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});


client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "say")){
        if(msg.author.id !== '486322208109494282') return;
        let args = '';
        let fltr = m => m.author.id === msg.author.id
        await msg.reply("**اكتب شي لجعلي اكتب شيئ الان**").then(p =>{
            p.delete(2222)
        })
        msg.channel.awaitMessages(fltr, {
time: 60000,
max: 1
        })
        .then(sy => {
            args = sy.first().content
            sy.first().delete();
            msg.delete(2222);
            msg.channel.send(args)
        })
    }
})




client.on('message', msg => {
var prefix = "-";
  if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'cy')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setDescription(`ان كنت تريد انشاء للمستند اظغط علي الايموجي📝`)                                                                                                                                                                       
.setFooter('لديك دقيقه للاختيار')
msg.channel.send(ra3d).then(message => {
    
    
 message.react('📝').then(r=>{
                              
    
 let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;

 let cy  = message.createReactionCollector(Category, { time: 60000 });

cy.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'category');
    msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
    msg.delete();
})
})
})
}
});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith('move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`:white_check_mark: <@${usermentioned}> Moved. `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});



class EventEmitter {
  constructor() {
    this.__events = {};
  }
  remove(event) {
    if (!this.__events[event] || "object" != typeof this.__events[event]) return;
    delete this.__events[event];
  }
  on(event, listener) {
    if (!event || "string" != typeof event) return;
    if (this.__events[event]) return;
    this.__events[event] = {
      event: event,
      listeners: []
    }
    if ("function" != typeof listener) return;
    this.__events[event].listeners.push(listener)
  }
  emit(event, parameters) {
    if (!this.__events[event] || "object" != typeof this.__events[event]) return;
    this.__events[event].listeners.map(listener => {
      if ( "function" != typeof listener) return;
      listener(parameters)
    });
  }
  once(event, listener) {
     if ("function" != typeof listener) return;
     this.on(event, _arguments => {
       listener(_arguments)
       this.remove(event)
     });
   }
   always(listener) {
     for (let id in this.__events) {
       this.on(this.__events[id].event, listener);
     }
   }
}

var events = new EventEmitter()
events.on("test", function(args) {
  console.log(args)
});
events.emit("test", "Hello, World");




client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'Rainbow Quick.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow Quick.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})


client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '-';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'امسح' ) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! ❌`);
    message.channel.send("جاري المسح..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      m.edit(`تم إزالة جميع الالوان.`)
    });
  }
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '544115341085900836').setName("س");
client.channels.find('id', '544115341085900836').setName("سي");
client.channels.find('id', '544115341085900836').setName("سير");
client.channels.find('id', '544115341085900836').setName("سيرف");
client.channels.find('id', '544115341085900836').setName("سيرفر ب");
client.channels.find('id', '544115341085900836').setName("سيرفر با");
client.channels.find('id', '544115341085900836').setName("سيرفربال");
client.channels.find('id', '544115341085900836').setName("سيرفر بالي");
client.channels.find('id', '544115341085900836').setName("سيرفر باليز");
client.channels.find('id', '544115341085900836').setName("سيرفر باليز يرحب");
client.channels.find('id', '544115341085900836').setName("سيرفرباليز يرحب بكم");
  }, 60000);
});





client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("أهلا بك , <@"+rebel.author.id+"> أنأ **أحاول** أن أزيل عنك الأفك.");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> تم فك عنك الأفك بسبب رجوعك."); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** لقد وضعتك بوضع الأفك **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("لقد أضفتك للأفك بسبب "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> مأفك** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> مأفك , سبب الأفك \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});



client.on("message", message => {
  if (message.channel.type === "dm") { //////// Galal , Alpha Codes

      message.channel.startTyping(); //////// Galal , Alpha Codes
      setTimeout(() => { //////// Galal , Alpha Codes
        message.channel.stopTyping(); //////// Galal , Alpha Codes
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  } //////// Galal , Alpha Codes
}); //////// Galal , Alpha Codes





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SAY');
if (!rank) return message.reply('لا تمتلك صلاحيات')
  message.channel.send(args.join("  "))
    message.delete();
  }


});




client.on('message' , message => {
      var prefix = "-";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bcrole")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `$rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });





client.on('message', async message => {//alpha codes & Mrx -Dev
        if (message.content.startsWith(prefix + 'role')) {//alpha codes & Mrx -Dev
          var args = message.content.split(' ').slice(2);
          let member = message.mentions.members.first();
          let role = message.guild.roles.find(r => r.name == args);
          if(!role) return message.channel.send(':no_entry: | I couldnmt find the role!');
          if(role.name === '@everyone') return message.channel.send(':no_entry: | I couldn,t find the role!');
            if (!args) message.reply(`Type Name Role`)
            if (!member) message.reply(`mention someone !`)
            if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
            await message.channel.sendMessage(`**🎁To Give Role
    :x: To Cancel the process **`).then(e => {//alpha codes & Mrx -Dev
                e.react("🎁")//alpha codes & Mrx -Dev
                .then(()=> e.react("❌"))//alpha codes & Mrx -Dev
                .then(()=> e.react("🎁")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
                let reaction1Filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;//alpha codes & Mrx -Dev
                let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
                let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
                let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
                reaction1.on("collect", c => {//alpha codes & Mrx -Dev
                  member.addRole(role);
                  e.edit(`:white_check_mark: | <@${member.id}> Successfully give The role **${role.name}** .`).then(c => {
                     c.delete(5000).then(()=>{
                       msg.delete()
                             })
                     })
                    }
      
                        )//alpha codes & Mrx -Dev
                        reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                          e.edit('**Successfully Canceled :x:**').then(c => {
                            c.delete(5000)
                            message.delete()
                            
            })
          })
        }
            )}
            
    });


client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });





client.on('message', message => {
 
 var ms = require('ms')
 
 var moment = require('moment');
 
 if (message.author.bot) return;
 
 if (!message.content.startsWith(prefix)) return;
 
 let command = message.content.split(" ")[0];
 
 command = command.slice(prefix.length);
 
 let args = message.content.split(" ").slice(1);
 
 let messageArray = message.content.split(" ");
 
 let embed = new Discord.RichEmbed()
 
.setImage("https://d.top4top.net/p_10880lo1r1.png")
 
 if (command == "ban") {
 
 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");
 
 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");
 
 let user = message.mentions.users.first();
 
 let Reason = message.content.split(" ").slice(3).join(" ");
 
 let time = messageArray[2];
 
 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
 
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");
 
 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')
 
 if(!Reason)  {
 
 message.guild.member(user).ban({reason: Reason})
 
 }
 
  if(!Reason && time) {
 
  message.guild.member(user).ban(7, user);
 
  }  
 
  if(!time) {
 
  message.guild.member(user).ban(7, user);
 
  }
  if(time) {
 
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  if(time && Reason && user) {
 
  message.guild.member(user).ban({reason: Reason})
     
     
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)
 
  }
 
  });
 
 
client.on('message', message => {
 
  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
   
  let embed = new Discord.RichEmbed()
 
 .setImage("https://c.top4top.net/p_108825enp1.png")
 
  if (command == "mute") {
   
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
 
  if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')
 
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
       
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});


client.on("message", message => {
  if(message.content.startsWith("verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
        message.channel.send(`**يرجاء كتابة الرقم التالي:** **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "Verify")); // اسم الرتبة
      }).catch(() => {
        m.edit(`لقد أخذت وقتًا طويلاً لكتابة الرقم.  قم بإعادة كتابة الأمر مرة أخرى إذا كنت تريد التحقق من هويتك..`).then(m2 => m.delete(15000));
      });
    });
  }
});


client.on('message', async message => {
    if(message.content.includes('discord.gg')){
        if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
  var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
  name: "muted",
  color: "#000000",
  permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
  await channel.overwritePermissions(muterole, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
  });
});
}catch(e){
console.log(e.stack);
}
}
   if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("ميوت")
    .addField(`**  تم إعطائك ميوت **` , `**السبب : نشر سيرفرات ديسكورد أخرى**`)
    .setColor("RANDOM")
    .setThumbnail(`${message.author.avatarURL}`)
    .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('` تمت معاقبتك بميوت اذا كا ن ذلك خطأ فيرجى مكالمة الإدارة العليا `');
 
 
}
})//AlphaCodes




client.on('message', async message =>{
  var prefix = "-";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});



    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر روابط في هذا السيرفر **`)
    }
 
});




client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});
 
 
client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('name', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "active"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
                                   msg.delete();
                                   msg.delete(2222);
                                   })
                                   })
                                   }
                                   });



client.on('message', message => {
    if(message.content.startsWith('nsfw'))
    if(message.member.hasPermission('ADMINISTRATOR'))  message.channel.setNSFW(true)
    else
    message.reply('You dont have perms')

});




client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'voice')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ميوت صوتي`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك الميوت الصوتي `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم إعطآئه ديفن أو سمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }//ReBeL & Codes
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم فك عنهه الديفن أو السمآعهه`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***نتمنى ان تحضى بوقت جميل معنى***')
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/544243371439292426/558220253604347904/welcome.png')
var channel =member.guild.channels.find('name', 'welcome-👋')
if (!channel) return;
channel.send({embed : embed});
});


client.on('ready', () => { 
client.channels.get("544115341085900836").join();
    });




client.on('message', message => {
   let emoji = client.guilds.get("471337129826451456").emojis.find(r => r.name === "enigma2"); //كود تعريف المتغير emoji
 
    if(message.content === 'enigma'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 


client.on('message', message => {
   let emoji = client.guilds.get("471337129826451456").emojis.find(r => r.name === "ftn"); //كود تعريف المتغير emoji
 
    if(message.content === 'ftn'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 




client.on('message', message => {
   let emoji = client.guilds.get("471337129826451456").emojis.find(r => r.name === "ChikaAutism"); //كود تعريف المتغير emoji
 
    if(message.content === 'ChikaAutism'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 




client.on("message", message => {
  let prefix = "-";
  if (!(message.author.bot) && message.channel.type == "text")
    if (message.content.startsWith(`${prefix}getScreenShareLink`))
      if (message.member.voiceChannel) message.channel.send(`https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id}`);
      else message.channel.send(`**يجب عليك ان تكون في الروم الذي تريد جلب رابط مشاركة بالفيديو خاص به**`);
});




