const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` WLC #4272 .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("***ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("***id**","**لـ معلومات عن الحساب**")
      .addField("***اقتراح :newspaper:**","**لأضافة اقتراحك للادارة**")
      .addField("***server :recycle:**","**لـ معلومات السيرفر**")
      .addField("***roles :medal: **","**لـ رؤية رتب السيرفر**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', async message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("522750131653705771").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('giveaway', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField("***bc  :mega:**","**لـ البرودكاست**")
      .addField("***clear :octagonal_sign:**","**لـ مسح الشات**")
      .addField("***giveaway :tada:**","**لـ عمل قيف اواي**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** 🎶 اوامر الميوزك**","** **")
      .addField("***play :musical_note:**","**لـ تشغيل المطلوب**")
      .addField("***stop  :musical_keyboard:**","**لـ ايقاف المطلوب**")
      .addField("***pause :musical_score:**","**لـ ايقاف المطوب مؤقت**")
      .addField("***resume :mute: **","**لـ تشغيل المطوب بعد التوقيف**")
	  .addField("** :tools:  تحت الصيانة حاليا**","** **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
}
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** مبرمج البوت :wrench: Mohamed Keshk|✙ŁĢĐ™#3900  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith('*ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
var prefix = "*";

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);





    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
var prefix = "*";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});
client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "WLC Bot"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('ready',  () => {
  console.log('WLC');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '*bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})
    client.on('message', message => {
     if (message.content === "*id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("معلومات عن الحــساب")
               .setFooter(`Desert Bot.`, '')
  .setColor("#9B59B6")
  .addField("اســـم الحســاب", `${message.author.username}`)
  .addField('كود الحساب الخاص', message.author.discriminator)
  .addField("الرقـــم الشـــخصي", message.author.id)
  .addField('بــــوت', message.author.bot)
  .addField("تاريخ التسجيل", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === "*help") {
message.reply("**Done | تــم**")
message.reply("**تم ارسال اوامر البوت في الخاص**")
message.react("📩")

}
});
client.on('message', message => {
     if (message.content === "*bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`WLC`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : WLC ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` WLC *help`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('خواطر :' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.on('message', message => {
   if (message.content.startsWith("id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.login("NTIyMTIyNTA0NjAxMzM3ODU2.DvPUiA.4jbgSp0IP2--mKudT2DP2ZOrTeQ");
