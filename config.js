const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255679425931";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm52RXA0Z0xkMWorSUdqVEtjUnpOd1U0M3IrMG9nS3VsWlFaSUNqb05pbjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNzUUc0SFBEU1hPQkhwWnFkVXJ2OFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjg0YjYyN2EtODFhOC00NjIyLTlhMzEtZjZhYmY4MGE3ZWFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAyMTUsXG4gICAgICAyMjcsXG4gICAgICAxMTgsXG4gICAgICA3NSxcbiAgICAgIDQ1LFxuICAgICAgMTU3LFxuICAgICAgMjUsXG4gICAgICAxMyxcbiAgICAgIDE1MSxcbiAgICAgIDI0LFxuICAgICAgNzcsXG4gICAgICA0LFxuICAgICAgMjEzLFxuICAgICAgNzUsXG4gICAgICAxMzMsXG4gICAgICAxNDgsXG4gICAgICAyMzEsXG4gICAgICAxMDAsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDIzNixcbiAgICAgIDIzLFxuICAgICAgMjQzLFxuICAgICAgOTEsXG4gICAgICAxNTcsXG4gICAgICAzMixcbiAgICAgIDE5NixcbiAgICAgIDg3LFxuICAgICAgMTA3LFxuICAgICAgMjEzLFxuICAgICAgNDcsXG4gICAgICA1MSxcbiAgICAgIDk1LFxuICAgICAgMTc1LFxuICAgICAgODEsXG4gICAgICAzLFxuICAgICAgOTgsXG4gICAgICA0LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkMyMlI5S1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3OTQyNTkzMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUzMjEwMjQ5OTczODAxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xxS3g4UUhFTlRjN2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibHY1UC9rZjBjb04wdXRpSmtSc0pjdlRxbXFTdnl0TS84RCtpZnhtYWxFTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrOGJsWmM0cDkwQXI0aktHRFlrMjg2Nk9aeExnMzRpb0VXMnpZbkNYMGVmWnVieWFhTFdGYVhwcmszQ2NJcHhsNXNpTGlmd3YxUm8ydEMzRC9seW5DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQQWZXZlJ4a0pNZEpDNjBGUnI0ZjlNdzhMMHNRQy9xZ042cXpxVm01MTU5em10M3pXeTBieVJjZ0piT0tDWmp3cmZ1OHF6ak14Qm9aOEdva3ZsUUZCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Nzk0MjU5MzE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NjIzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHSWFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdJYS5qc29uIjogIntcImtleURhdGFcIjpcImNQNVc4S3d1ZXYreHlZMGExb1Rzd2ZQZWg5VVdpTlhhWWxaWlNnblFSRFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMjgxOTEyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ1ODg0NDE3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
