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




const { Client, RichEmbed } = require("discord.js");
const yt_api_key = "AIzaSyDFRGtM6WzFmqAXIgQcCB1_Q8L0NJj7a3M"
const ytdl = require("ytdl-core");
const devs = ["515096989369761802"]
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const youtube = new simpleytapi(yt_api_key);
var guilds = {};
 
const yt = "<:megYT:476798168684691457>"
 
 
client.on('message', async function(message) {
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    let args = message.content.split(' ').slice(1).join(" ");
    const novc = "**:x: | أنت لست في روم صوتي**"
     if (message.content.toLowerCase().startsWith(`$lyrics`)) {
const lyricistapi = require('lyricist');
const lyric = new lyricistapi("3u50HX1N0KeDBMCN_y3W126tTcJizSOz-yJtJE7TOmQepOGkAPuzQhuZiRLG9BDn");
try {
    if(!args) {
        args = guilds[message.guild.id].queueNames[0].replace(/\[[^\]]*\]/g, "").replace(/ *\([^)]*\) */g, "").replace(/[^\w\s]/gi, "");
    }
} catch (error) {
    return message.channel.send(`**:x: | لم أجد هذا**`)
}
const song = await lyric.search(args)
if(song[0]) {
const msg22 = await message.channel.send(`:bookmark_tabs: يتم البحث عن : **\`${song[0].full_title} Lyrics.\`**`);
const songlyrics = await lyric.song(song[0].id, {fetchLyrics: true, textFormat: "dom"})
let fixedsonglyrics;
if(songlyrics.lyrics.length > 2047) fixedsonglyrics = songlyrics.lyrics.slice(0, 2000 - songlyrics.url.length) + `......\n\n[**Continue Here**](${songlyrics.url})`
else fixedsonglyrics = songlyrics.lyrics
let youtube;
let spotify;
if(songlyrics.media.find(g => g.provider === 'youtube')) youtube = `[**YouTube**](${songlyrics.media.find(g => g.provider === 'youtube').url})`
else youtube = "N/A"
if(songlyrics.media.find(g => g.provider === 'spotify')) spotify = `[**Spotify**](${songlyrics.media.find(g => g.provider === 'spotify').url})`
else if(songlyrics.media.find(g => g.provider === 'apple_music')) spotify = `[**iTunes**](${songlyrics.media.find(g => g.provider === 'apple_music').url})`
else spotify = "N/A"
msg22.edit("", {embed: {
    description: `\n${fixedsonglyrics}`,
    color:  0x7ec0ee,
    title: songlyrics.full_title,
    url: songlyrics.url,
    thumbnail: {
        url: songlyrics.header_image_url,
    },
fields: [{
name: "Watch on",
value: youtube,
inline: true
}, {
name: "Listen on",
value: spotify,
inline: true
}]
}})
} else return message.channel.send(`:x: | لا يوجد نتائح لـ : **\`\`${args}\`\`**`)
     }
 
     function clear() {
        guilds[message.guild.id].queue = [];
        guilds[message.guild.id].queueNames = [];
        guilds[message.guild.id].isPlaying = false;
        guilds[message.guild.id].dispatcher = null
        guilds[message.guild.id].voiceChannel = null;
        guilds[message.guild.id].skipReq = 0;
        guilds[message.guild.id].skipReq = [];
        guilds[message.guild.id].loop = false;
        guilds[message.guild.id].volume = 1;
    }
   
    const mess = message.content.toLowerCase();
 
    if (!guilds[message.guild.id]) {
        guilds[message.guild.id] = {
            queue: [],
            queueNames: [],
            isPlaying: false,
            dispatcher: null,
            voiceChannel: null,
            volume: 1,
            skipReq: 0,
            skippers: [],
            loop: false
        };
    }
 
    if (mess.startsWith(prefix + "play") || mess.startsWith(prefix+"شغل")) {
        if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
        const voiceChannel = message.member.voiceChannel
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "** :x: | ليس لدي صلاحيات لدخول الروم**"}});
        if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "** :x: | ليس لدي صلاحيات للتكلم في الروم **"}});
         if (args.length == 0 || !args) return message.channel.send(`**:musical_note: | $play \`SONGLINK|NAME\`**`)
            if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
                    description: `**🔒 | عذرًا ، الحد الأقصى لطول قائمة الانتظار هو 100 ، افعل ** $clear  لمسح قائمة الانتظار بالكامل أو  $clear \`NUMBER\` لمسح عنصر واحد**`
                   
                }})
                if(args.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi) && !isYoutube(args)) {
                return message.channel.send(`**:x: | لبعض الأسباب ، لا يمكنك لعب أي عمل ستريم آخر إذا لم يكن رقم # 1 في قائمة الانتظار. افعل \`$clear\` وحاول مرة أخرى.**`)
                    }
                 if (args.match(/[?&]list=([^#\&\?]+)/)) {
                    const playlist = await youtube.getPlaylist(args);
                    if(!playlist) return message.channel.send(`**:x: | لم أستطيع الحصول على قائمة التشغيل هذه **`)
                   
                    const videos = await playlist.getVideos();
                    const queuesync = 100 - guilds[message.guild.id].queue.length
                    if(queuesync < 0 || queuesync == 0) return message.channel.send(`**:x: | لا يمكن إضافة قائمة التشغيل هذه ،  \`MAX_QUEUE = 100\`  امسح قائمة الانتظار الحالية وحاول مرة أخرى**`)
                    videos.filter(m => m.thumbnails !== undefined).slice(0, queuesync).forEach(video => {
                        guilds[message.guild.id].isPlaying = true;
                        guilds[message.guild.id].queueNames.push(video.title)
                        guilds[message.guild.id].queue.push(video.id)
                    })
                    return message.channel.send(`**:musical_score: \`${playlist.title}\` | \`${queuesync}\` تمت الاِضافة اِلي القائمة **`)                    ;
                }
                message.channel.send(`**:mag_right: | يتم البحث عن : \`\`${args}\`\`**`).then(()=> {
                getID(args, function(id) {
                if(!id) return message.channel.send(`**:x: | لم أتمكن من العثور على أي شيء بهذا العنوان \`${args}\`**`);
                   fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        if(videoInfo.duration > 1800) return message.channel.send(`**:x: | لا أستطيع تشغيل أغنيه مدتها فوق 30 دقيقة**`).then(message.react(nope));
                        else message.react("✔")
                        add_to_queue(id, message);
                        message.channel.send(new RichEmbed()
                        .setAuthor("Added to queue", message.author.avatarURL)
                        .setTitle(videoInfo.title)      
                        .setURL(videoInfo.url)
                        .addField("القناة : ", videoInfo.owner, true)
                        .addField("مدة الأغنية : ", convert.fromS(videoInfo.duration, 'mm:ss') , true)
                        .addField("نشرت في تاريخ : ", videoInfo.datePublished, true)
                        .addField("مكانها في القائمة : ", guilds[message.guild.id].queueNames.length, true)
                        .setColor("RED")
                        .setThumbnail(videoInfo.thumbnailUrl)
                        )
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                    });
                })
            })
            } else {
            if (args.match(/[?&]list=([^#\&\?]+)/)) {
                const playlist = await youtube.getPlaylist(args);
                if(!playlist) return message.channel.send(`**:x: | لم أستطيع الحصول على قائمة التشغيل هذه **`)
                const videos = await playlist.getVideos(100)
                playMusic(videos[0].id, message)
                guilds[message.guild.id].queueNames.push(videos[0].title)
                guilds[message.guild.id].queue.push(videos[0].id)
                videos.filter(m => m.thumbnails !== undefined).slice(1, 100).forEach(video => {
                    guilds[message.guild.id].isPlaying = true;
                    guilds[message.guild.id].queueNames.push(video.title)
                    guilds[message.guild.id].queue.push(video.id)
                })
                return message.channel.send(`**:musical_score: | \`${playlist.title}\` | \`${videos.filter(m => m.thumbnails !== undefined).slice(0, 100).length}\` تمت أضافتهم للقائمة \n :notes: | يعمل الأن : \`\`${videos[0].title}\`\`**`)                    ;
            } else {
                if(args.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi) && !isYoutube(args)) {
                    if(guilds[message.guild.id].queue[0]) return message.channel.send(`**:x: | لبعض الأسباب ، لا يمكنك لعب أي عمل ستريم آخر إذا لم يكن رقم # 1 في قائمة الانتظار. افعل \`$clear\` وحاول مرة أخرى.**`)
                 
                    playMusic(args, message).catch(err => message.channel.send(`**:x: | لا يمكن تشغيل هذا الشيء**`))
                    guilds
                    guilds[message.guild.id].isPlaying = true;
                    return message.channel.send(`**:arrow_forward: | يعمل الأن من : ${args}**`);
                    } else {
                message.channel.send(`** :mag_right: | يتم البحث عن :  \`\`${args}\`\` **`).then(() => {
                getID(args, function(id) {
                    if(!id) return message.channel.send(`**:x: | لا يمكن تشغيل هذا الشيء ${args}**`);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        if(videoInfo.duration > 1800) return message.channel.send(`**:x: | لا أستطيع تشغيل أغنيه مدتها فوق 30 دقيقة**`).then(message.react("❌"))
                        else message.react("✔")
                        playMusic(id, message);
                        guilds[message.guild.id].isPlaying = true;
                        guilds[message.guild.id].queue.push(id);
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        message.channel.send(`**:notes: | يعمل الأن : \`\`${videoInfo.title}\`\`**`);
                    })
                })})}}
            }
        } else {
            message.channel.send(novc);
        }
 
    } else if (mess.startsWith(prefix + "skip") || mess.startsWith(prefix+"عدي")) {
        if(!message.member.voiceChannel) return message.channel.send(novc)
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
        if (guilds[message.guild.id].queueNames[0]) {
            message.channel.send(`**:fast_forward: | تم التخطي ${guilds[message.guild.id].queueNames[0]}**`);
            return skip_song(message);
        } else return message.channel.send(`**:x: | لا شيء يعمل هنا**`);
        }
        else
        if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
            guilds[message.guild.id].skippers.push(message.author.id);
            guilds[message.guild.id].skipReq++;
            if (guilds[message.guild.id].skipReq >= Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
                if (guilds[message.guild.id].queueNames[0]) {
                message.channel.send(`**:fast_forward: | تم التخطي ${guilds[message.guild.id].queueNames[0]}**`);
                skip_song(message);
                } else return message.channel.send(`**:x: | لا شيء يعمل هنا**`);
            } else {
                message.channel.send(`**:point_up::skin-tone-1: | ${message.author.username} قام بالتصويت للتخطي | ${Math.floor(Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq)} المزيد من التصويتات للتخطي **`);
            }
        } else {
            message.channel.send("**:x: | انت قمت بالتصويت بالفعل**");
        }
 
    } else if (mess.startsWith(prefix + "queue") || mess.startsWith(prefix+"قائمة")) {
        if(guilds[message.guild.id].queueNames.length < 1) return message.channel.send(`**:x: | لا شيء يعمل هنا**`);
        const numbaone = await youtube.getVideoByID(guilds[message.guild.id].queue[0])
        if(!guilds[message.guild.id].queueNames[1]) return message.channel.send('', {embed: {
        description: `** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]}) \`\`${convert.fromS(numbaone.durationSeconds)}\`\` ** `,
        author: {
        name: `${message.guild.name}'s Queue.`,
        icon_url: message.guild.iconURL
        },
        color: 3447003
        }});
        else {
            let x;
            if(args > 1) {
             x = Math.floor(args)*10+1
            } else {
              x = Math.floor(11)
            }
            let i;
            if(args > 1) {
                i = x-11
               } else {
                 i = 0
               }
 
            let queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
            if(!queuelist) return message.channel.send(`** :x: | هذة الصفحة غير موجودة **`)
            const embed = new RichEmbed()
            embed.setDescription(`** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})\n\n:arrow_down: | التالي | :arrow_down:\n\n${queuelist}\n\nجميع الأغراض في القائمة : ${guilds[message.guild.id].queueNames.length}**`)
            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png")
            embed.setAuthor(`${message.guild.name}'s Queue (${Math.floor(x/10)} / ${Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10)})`)
            embed.setColor(3447003);
            message.channel.send(embed).then(async msg => {
                if(Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10) > 1) {
                    await msg.react("⏪")
                    await msg.react("◀")
                    await msg.react("🔵")
                    await msg.react("▶")
                    await msg.react("⏩")
                    const pages = Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10)
                    let page = Math.floor(x/10)
                    const back = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "◀" && user.id === message.author.id, {time: 60000})
                    const doubleback = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id, {time: 60000})
                    const doubleforwad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id, {time: 60000})
                    const forwad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "▶" && user.id === message.author.id, {time: 60000})
                    back.on('collect', async r => {
                        if(page === 1) return;
                        await r.remove(message.author);
                        await page--
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
            embed.setDescription(`** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})\n\n:arrow_down: | التالي | :arrow_down:\n\n${queuelist}\n\nجميع الأغراض في القائمة : ${guilds[message.guild.id].queueNames.length}**`)                      
            embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
            msg.edit(embed)
                    })
                    forwad.on('collect', async r => {
                        if(page === pages) return;
                        await r.remove(message.author);
                        await page++
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                       
                        embed.setDescription(`** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})\n\n:arrow_down: | التالي | :arrow_down:\n\n${queuelist}\n\nجميع الأغراض في القائمة : ${guilds[message.guild.id].queueNames.length}**`)                      
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                    doubleback.on('collect', async r => {
                        if(page === 1) return;
                        await r.remove(message.author);
                        page = 1
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})\n\n:arrow_down: | التالي | :arrow_down:\n\n${queuelist}\n\nجميع الأغراض في القائمة : ${guilds[message.guild.id].queueNames.length}**`)                      
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                    doubleforwad.on('collect', async r => {
                        if(page === pages) return;
                        await r.remove(message.author);
                        page = pages
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`** :notes: | يعمل الأن : \n[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})\n\n:arrow_down: | التالي | :arrow_down:\n\n${queuelist}\n\nجميع الأغراض في القائمة : ${guilds[message.guild.id].queueNames.length}**`)                        
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                } else return;
            })
        }
    }
 
if(mess.startsWith(prefix+"np")) {
    const short = require('short-number');
    if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) return message.channel.send(`**:x: Nothing playing in this server**`)
    await message.channel.startTyping()
    const embed = new RichEmbed()
    await fetchVideoInfo(guilds[message.guild.id].queue[0], function(err, videoInfo) {
                        if (err) {
                             embed.setAuthor("يعمل الأن :", client.user.avatarURL)
                             embed.setTitle(guilds[message.guild.id].queueNames[0])
                             embed.setURL(guilds[message.guild.id].queue[0])
                             throw new Error(err);
                        } else {
                            embed.setAuthor(`يعمل الأن : `, client.user.avatarURL)
                            embed.setTitle(videoInfo.title)      
                            embed.setURL(videoInfo.url)
                            embed.addField("القناة : ", `[**${videoInfo.owner}**](https://youtube.com/channel/${videoInfo.channelId})`, true)
                            embed.addField("مدة الأغنية : ", `${convert.fromS(videoInfo.duration, 'mm:ss')} — [**Download MP3**](https://www.flvto.biz/sa/downloads/mp3/yt_${videoInfo.videoId})`, true)
                            embed.addField("المشاهدات : ", short(videoInfo.views), true)
                            embed.addField("لايكات/دسلايكات", `👍 **${short(videoInfo.likeCount)}** / 👎 **${short(videoInfo.dislikeCount)}**`, true)
                            embed.setColor("RED")
                            embed.setImage(videoInfo.thumbnailUrl)
                        }
                        message.channel.stopTyping(true);
                        message.channel.send(embed)
    })
}
 
if(mess.startsWith(prefix+"stop") || mess.startsWith(prefix+"اطلع")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
    if (guilds[message.guild.id].voiceChannel)
    {
    await clear()
    message.guild.voiceConnection.disconnect();
    message.channel.send(`**:mailbox_with_no_mail: | تم الخروج من الروم**`)
    }
}
 
if(mess.startsWith(prefix+"stpsdksjdkshdkshdskhdjshsqwqwojqfu") || message.content.startsWith(`<@${client.user.id}> stfu`)) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
    if (guilds[message.guild.id].voiceChannel)
    {
    await clear()
    message.guild.voiceConnection.disconnect();
    message.channel.send(`:cry: k sempai!`)
    }
}
 
if(message.content.startsWith(prefix+"search")) {
    let index = 0
    if(!args) return message.channel.send(`**:x: | أنت لم تدخل شيء للبحث عنة**`)
    const videos = await youtube.searchVideos(args, 5)
    message.channel.send(`** :e_mail: | نتائح البحث لـ : \`\`${args}\`\`**`,{embed: {
    description: `**:information_source: | أكتب رقم الأغنية التي تريد أو \`cancel\` للاِلغاء .\n\n${videos.map(song =>`${++index}. [${song.title}](${song.url})**`).join('\n')}`,
    footer: {
        text: `Requested by ${message.author.username} (${message.author.id})`,
        icon_url: message.author.avatarURL
    }
    }})
try {
var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11 || msg2.content === 'cancel' || msg2.content.startsWith("$search") && msg2.author.id === message.author.id, {
    maxMatches: 1,
    time: 30000,
    errors: ['time'],
});
} catch (error) {
return message.channel.send(`**:x: | أنتهي وقت الأختيار**`)
}
if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
    description: `🔒 | عذرًا ، الحد الأقصى لطول قائمة الانتظار هو 100 ، افعل ** $clear  لمسح قائمة الانتظار بالكامل أو  $clear \`NUMBER\` لمسح عنصر واحد**`
}})
if(!message.member.voiceChannel) return;
if(response.first().content === 'cancel') return message.channel.send(`**:thumbsup: | تم الاِلغاء**`)
if(response.first().content === '$search') return;
const videoIndex = parseInt(response.first().content)
const voiceChannel = message.member.voiceChannel
const permissions = voiceChannel.permissionsFor(message.client.user)
if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "** :x: | ليس لدي صلاحيات لدخول الروم**"}});
if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "** :x: | ليس لدي صلاحيات للتكلم في الروم**"}});    
const id = videos[videoIndex - 1].id;
message.delete();
if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) {
fetchVideoInfo(id, function(err, videoInfo) {
if (err) throw new Error(err);
if(videoInfo.duration > 1800) return message.channel.send(`**:x: | لا أستطيع تشغيل أغنيه مدتها فوق 30 دقيقة**`).then(message.react(nope));
if(!message.member.voiceChannel) return message.channel.send(novc);
else message.react("✔")
playMusic(id, message);
guilds[message.guild.id].isPlaying = true;
guilds[message.guild.id].queue.push(id);
guilds[message.guild.id].queueNames.push(videos[videoIndex - 1].title);
message.channel.send(`** :notes: | يعمل الأن : \`\`${videos[videoIndex - 1].title}\`\`**`);
});
} else {
        fetchVideoInfo(`${id}`, function(err, videoInfo) {
            if (err) throw new Error(err);
            if(videoInfo.duration > 1800) return message.channel.send(`**:x: | لا أستطيع تشغيل أغنيه مدتها فوق 30 دقيقة**`).then(message.react(nope));
            else message.react("✔")
            add_to_queue(id, message);
            message.channel.send(new RichEmbed()
            .setAuthor("Added to queue", message.author.avatarURL)
            .setTitle(videoInfo.title)
            .setURL(videoInfo.url)
            .addField("القناة : ", videoInfo.owner, true)
            .addField("مدة الأغنية : ", convert.fromS(videoInfo.duration, 'mm:ss') , true)
            .addField("نشر في : ", videoInfo.datePublished, true)
            .addField("مكانها في القائمة : ", guilds[message.guild.id].queueNames.length, true)
            .setColor("RED")
            .setThumbnail(videoInfo.thumbnailUrl)
            )
            guilds[message.guild.id].queueNames.push(videoInfo.title);
        });
}
    }
 
else if (mess.startsWith(prefix + 'vol') || mess.startsWith(prefix + "volume")|| mess.startsWith(prefix+"صوت")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: | لا شيء يعمل هنا**")
    if(!args) return message.channel.send(`**:loud_sound: | الصوت الحالي :** ${guilds[message.guild.id].dispatcher.volume*100}`)
    if(isNaN(args)) return message.channel.send(`**:x: | الصوت بالارقام فقط**`)
    if (args > 200) return message.channel.send('**:headphones: | لدواعي صحية | لا يجب أن يعلو الصوت عن 200 .**');
    if (args < 1) return message.channel.send("**:headphones: | الصوت بين 1 و 200 .**");
    guilds[message.guild.id].dispatcher.setVolume((0.01 * parseInt(args)))
    guilds[message.guild.id].volume = 0.01 * parseInt(args)
    message.channel.send(`**:loud_sound: | الصوت :** ${guilds[message.guild.id].dispatcher.volume*100}`);
}
 
 
else if (mess.startsWith(prefix + 'pause') || mess.startsWith(prefix+"وقف")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying !== true || !guilds[message.guild.id].queue[0]) return message.channel.send(`**:x: | لا شيء يعمل هنا**`)
    if (guilds[message.guild.id].dispatcher.paused === true) return message.channel.send("*:hash: | متوقف بالفعل*")
    message.channel.send(':pause_button: **توقف**').then(() => {
        guilds[message.guild.id].dispatcher.pause(false);
    });
}
 
else if (mess.startsWith(prefix + 'resume') || mess.startsWith(prefix+"كمل")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (guilds[message.guild.id].dispatcher.paused === false) return message.channel.send("*:hash: | لا يوجد شيء لتكملتة*")
    message.channel.send(':play_pause: **مكتمل**').then(() => {
        guilds[message.guild.id].dispatcher.resume();
    });
}
 
else if (mess.startsWith(prefix + 'loop') || mess.startsWith(prefix+"عيد")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: | لا شيء يعمل هنا**")
    if(guilds[message.guild.id].loop === true) {
        message.channel.send(`:arrow_right_hook: | **التكرار متوقف**`)
        guilds[message.guild.id].loop = false;        
        return;
    } else if(guilds[message.guild.id].loop === false) {
    guilds[message.guild.id].loop = true;
    message.channel.send(':repeat_one: | **التكرار مفتوح**')
    return;
    }
   
}
 
else if (mess.startsWith(prefix + 'clear') || mess.startsWith(prefix+"نظف")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(!guilds[message.guild.id].queueNames[0] || !guilds[message.guild.id].isPlaying) return message.channel.send(`**:x: | لا شيء يعمل هنا**`)
   if(guilds[message.guild.id].queueNames.length > 1) {
    if(!args || isNaN(args) && args != 0) {
    guilds[message.guild.id].queueNames.splice(1, guilds[message.guild.id].queueNames.length)
    guilds[message.guild.id].queue.splice(1, guilds[message.guild.id].queue.length)
    message.channel.send(`:asterisk: | تم مسح القائمة من : **${message.guild.name}**`)
    } else if(args > 0) {
        const removedsong = guilds[message.guild.id].queueNames[parseInt(args)]
        if(!removedsong) return message.channel.send(`:x: | **لا يوجد مثل هذا العنصر ، أو العنصر غير موجود **`)
       
        guilds[message.guild.id].queueNames.splice(parseInt(args), 1)
        guilds[message.guild.id].queue.splice(parseInt(args), 1)
        return message.channel.send(`:wastebasket: | تمت ازالة **${removedsong}** من القائمة.`);}
   } else if(guilds[message.guild.id].queueNames.length <= 1 ) {
       message.channel.send(`**:x: | يوجد عنصر واحد في القائمة , من الأفضل أن تستخدم أمر : \`$skip\`.**`)
   }
}
});
 
async function skip_song(message) {
  await guilds[message.guild.id].dispatcher.end();
}
 
async function playMusic(id, message) {
    guilds[message.guild.id].voiceChannel = message.member.voiceChannel;
    guilds[message.guild.id].voiceChannel.join().then(function(connection) {
        if(!isYoutube(id) && id.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi)) {
            stream = id
        } else {
        stream = ytdl("https://www.youtube.com/watch?v=" + id, {
            filter: 'audioonly',
            quality: 'highestaudio',
            audioEncoding: "opus"
        })};
        guilds[message.guild.id].skipReq = 0;
        guilds[message.guild.id].skippers = [];
        guilds[message.guild.id].dispatcher = connection.playStream(stream, {bitrate: "auto", volume: guilds[message.guild.id].volume})
        guilds[message.guild.id].dispatcher.on('end', async function() {
            guilds[message.guild.id].skipReq = 0;
            guilds[message.guild.id].skippers = [];
           if(guilds[message.guild.id].loop === true) return playMusic(guilds[message.guild.id].queue[0], message)
           else                      
           await guilds[message.guild.id].queue.shift();
           await guilds[message.guild.id].queueNames.shift();
            if (guilds[message.guild.id].queue.length === 0) {
                guilds[message.guild.id].queue = [];          
                guilds[message.guild.id].queueNames = [];
                guilds[message.guild.id].isPlaying = false;
                setTimeout(function() {
                if(guilds[message.guild.id].voiceChannel !== null) return message.channel.send(`**:stop_button: | أنتهت الأغنية.** `)
            }, 1000)
            } else {
                setTimeout(async function() {
                    if(!guilds[message.guild.id].queueNames || guilds[message.guild.id].queueNames[0] == undefined) return;
                    await playMusic(guilds[message.guild.id].queue[0], message);
                   message.channel.send(`**:notes: | يعمل الأن : \`\`${guilds[message.guild.id].queueNames[0]}\`\`**`)
                }, 500);
            }
        });
        guilds[message.guild.id].dispatcher.on('error', function(error) {
          return message.channel.send(`:x: | خطأ \`\`\`${error}\`\`\``)
        });
    });
}
 
async function getID(str, cb) {
    if (isYoutube(str)) {
         const video = await youtube.getVideo(str)
         cb(video.raw.id);
    } else {
        const video = await youtube.searchVideos(str, 1)
        if(!video) return cb(null);
        cb(video.map(m => m.id).toString());
    }
}
 
function add_to_queue(strID, message) {
    if (isYoutube(strID)) {
        guilds[message.guild.id].queue.push(getYouTubeID(strID));
    } else {
        guilds[message.guild.id].queue.push(strID);
    }
}
 
function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1 || str.toLowerCase().indexOf("youtu.be") > -1;
}
