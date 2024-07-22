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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.save_status = process.env.AUTO_SAVE_STATUS || "true
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_10_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQM3V2dDl4QzMxL0F0ZmNiVU9uMmlKbER1YlF0K0d5V004Y3BnaWZ0UVNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6ZllEMlQzYVFhU2phajd3Z3RPYUZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhMmM1ZTJmLTM1YmMtNDU5My1hZmRkLTRjZTQwMzMzM2JjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAyMzksXG4gICAgICAxNyxcbiAgICAgIDI2LFxuICAgICAgMjI4LFxuICAgICAgMTgxLFxuICAgICAgNzEsXG4gICAgICA4NixcbiAgICAgIDExOCxcbiAgICAgIDIxOCxcbiAgICAgIDIwLFxuICAgICAgOTgsXG4gICAgICAxMTksXG4gICAgICAzMyxcbiAgICAgIDMyLFxuICAgICAgOTMsXG4gICAgICAyNDQsXG4gICAgICAzNixcbiAgICAgIDQ3LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDI0OCxcbiAgICAgIDE3NCxcbiAgICAgIDc4LFxuICAgICAgMTQwLFxuICAgICAgNDQsXG4gICAgICAxNTUsXG4gICAgICAxNDcsXG4gICAgICAxMTUsXG4gICAgICAxMixcbiAgICAgIDExOCxcbiAgICAgIDExNixcbiAgICAgIDYsXG4gICAgICAxMzYsXG4gICAgICA5MixcbiAgICAgIDIwMCxcbiAgICAgIDE1OCxcbiAgICAgIDEyNyxcbiAgICAgIDgsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMVg5Slc1OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njc5NDI1OTMxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTMyMTAyNDk5NzM4MDE6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVLeDhRSEVPV24rTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsdjVQL2tmMGNvTjB1dGlKa1JzSmN2VHFtcVN2eXRNLzhEK2lmeG1hbEVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZNK0RzbjgvZ1NrdGh3dXkrdUEwN0ZnTlVLZTRtRm5aUGU3VEZ0OXFwaWhnSlMwY0YrZ1BSRlZRcXdRYTc2UVlYVm9BTng0Sk1zd3hVYkV3bjl1bkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd3L0NWeS9GM0pFS2x2S2xFWFdxd0tKQjE5ZDZwVC95aEgzakZyMzFJdDloYTBzbThLWWI0cGdEOHdGQ1E0b3BtL2JqSmVhNk9yTEJvcDcxWVlsYmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3OTQyNTkzMToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYzNTgxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdJYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1A1VzhLd3Vldit4eVkwYTFvVHN3ZlBlaDlVV2lOWGFZbFpaU2duUVJEUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIyODE5MTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDU4ODQ0MTcxXCJ9Igp9"  // PUT your SESSION_ID 


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
