const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['566335709590454283','566335709590454283','566335709590454283','566335709590454283','566335709590454283'];
   var s = ['566335709590454283','566335709590454283','566335709590454283'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'I AM BAD',
    application_id: '468479699543130132',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login(process.env.BOT_TOKEN);
