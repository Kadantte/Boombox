const Discord = require('discord.js');

const {
	prefix,
	token,
} = require('./config.json');
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("fucking bitches");
 });



var fatFuckFriday = setInterval(function () {
  var date = new Date();
  var day = date.getDay();
  var timeh = date.getHours();
  var timem = date.getMinutes();
  if (day === 5 && timeh === 12 && timem === 00) {
    client.channels.get("592556176009592836").send("@everyone FAT FUCK FRIDAY");
    client.channels.get("592556176009592836").send({files: ["fat.jpg"]});
    console.log("Message sent")
  }
}, 40 * 1000);

var twoFrogTuesday = setInterval(function () {
  var date = new Date();
  var day = date.getDay();
  var timeh = date.getHours();
  var timem = date.getMinutes();
  if (day === 2 && timeh === 12 && timem === 00) {
    client.channels.get("592556176009592836").send("@everyone two frogs tuesday");
    client.channels.get("592556176009592836").send({files: ["frog.png"]});
    console.log("Message sent")
  }
}, 40 * 1000);

var milfMonady = setInterval(function () {
  var date = new Date();
  var day = date.getDay();
  var timeh = date.getHours();
  var timem = date.getMinutes();
  if (day === 1 && timeh === 12 && timem === 00) {
    client.channels.get("592556176009592836").send("@everyone MILF Monday");
    client.channels.get("592556176009592836").send({files: ["milf_monday.mp4"]});
    console.log("Message sent")
  }
}, 40 * 1000);


client.on('message', async msg => {

  if(msg.author.bot) return;
  if (!msg.content.startsWith("!")) return;

  var msgsplit = msg.content.split(" ");

 if (msgsplit.includes('hello') || msgsplit.includes('Hello')) {
  msg.channel.send('Hello!');
 } else if (msg.content === 'Fuck' || msg.content === 'fuck') {
    const nsfwlemon = client.emojis.find(emoji => emoji.name === "nsfwlemon");
    msg.channel.send(`me ${nsfwlemon} `);
 } else if (msgsplit.includes('dinosaur') || msgsplit.includes('Dinosaur')) {
    msg.channel.send('Here have a Dinosaur!')
    msg.channel.send('https://media.giphy.com/media/W0QniYnt2WSMrMwDrS/giphy.gif')
 } else if (msgsplit.includes('pussy') || msgsplit.includes('pussy')) {
   const ahegao = client.emojis.find(emoji => emoji.name === "ahegao");
   msg.channel.send(`${ahegao} `);
 } else if (msg.isMentioned(client.users.get('451641455627206667')) && msgsplit.includes('gay')) {
    const gay = client.emojis.find(emoji => emoji.name === "prideheart");
    msg.react(gay);
    msg.channel.send("<@451641455627206667> gay");
 }else if (msgsplit.includes('trans') || msgsplit.includes('Trans') || msgsplit.includes('transgender') || msgsplit.includes('Transgender') || msgsplit.includes('smore') || msgsplit.includes('Smore') || msgsplit.includes('Transpride') || msgsplit.includes('transpride')) {
   const trans = client.emojis.find(emoji => emoji.name === "transheart");
   msg.react(trans);
 } else if (msgsplit.includes('NB') || msgsplit.includes('non-binary') || msgsplit.includes('Non-Binary') || msgsplit.includes('ENBY') || msgsplit.includes('Non-binary')) {
   const NB = client.emojis.find(emoji => emoji.name === "nbheart");
   msg.react(NB);
 } else if (msgsplit.includes('pan') || msgsplit.includes('Pan') || msgsplit.includes('Pansexual') || msgsplit.includes('pansexual')) {
   const pan = client.emojis.find(emoji => emoji.name === "panheart");
   msg.react(pan);
 } else if (msgsplit.includes('Lesbian') || msgsplit.includes('lesbian')) {
   const lesbian = client.emojis.find(emoji => emoji.name === 'lesbianheart');
   msg.react(lesbian);
 } else if (msgsplit.includes('shrek') || msgsplit.includes('Shrek')) {
   const shrek = client.emojis.find(emoji => emoji.name === 'shrexualheart');
   msg.react(shrek);
   msg.channel.send("Shrek is love...");
   msg.channel.send("Shrek is life.")
 } else if (msgsplit.includes('bi') || msgsplit.includes('Bi') || msgsplit.includes('Bisexual') || msgsplit.includes('bisexual')) {
   const bi = client.emojis.find(emoji => emoji.name === 'biheart');
   msg.react(bi);
 } else if (msgsplit.includes('gay') || msgsplit.includes('Gay')) {
  const gay = client.emojis.find(emoji => emoji.name === "prideheart");
  msg.react(gay);
 } else if (msgsplit.includes("piss") || msgsplit.includes('Piss') || msgsplit.includes('pee') || msgsplit.includes('Pee')) {
  const piss = client.emojis.find(emoji => emoji.name === "7136_piss_heart_time");
   msg.react(piss);
   msg.channel.send(`${piss}`)
 } else if(msgsplit.includes("Life changer")) {
    msg.channel.send('miracle arnager');
 } else if (msgsplit.includes('69')) {
  msg.channel.send('nice');
} else if (msgsplit.includes('emily') || msgsplit.includes('Emily')) {
  msg.channel.send({files: ["Emily.jpg"]});
} else if (msgsplit.includes('FAT') && msgsplit.includes("FUCK")) {
  msg.channel.send({files: ["fat.jpg"]});
} else if (msg.isMentioned(client.users.get('451641455627206667')) && msgsplit.includes('het')) {
  const gay = client.emojis.find(emoji => emoji.name === "prideheart");
  msg.channel.send("<@451641455627206667> het");
} else if (msg.isMentioned(client.users.get('651228303939731466')) && msgsplit.includes('het')) {
  msg.channel.send("<@651228303939731466> het");
} else if (msg.isMentioned(client.users.get('651228303939731466')) && msgsplit.includes('ishet?')) {
  msg.channel.send("<@651228303939731466> is very het");
  msg.channel.send({files: ["EmilyHet.png"]});
} else if (msgsplit.includes('two') && msgsplit.includes("frogs")) {
  msg.channel.send({files: ["frog.png"]});
}
});




client.login("Njc4ODE5OTk0MjUwNzcyNDgw.XowhvQ.rqgZjV0v4hcA7A52yjNTFeIHWjU");