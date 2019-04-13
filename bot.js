const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['525446190519681024','525446190519681024','525446190519681024','525446190519681024','525446190519681024'];
   var s = ['525446190519681024','525446190519681024','525446190519681024'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'I AM MaNOFDarK ',
    application_id: '468479699543130132',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login(process.env.BOT_TOKEN);
