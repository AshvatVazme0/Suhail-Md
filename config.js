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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJld21jc3RkTk5HbWFNSmFPWVlkN0hub0RsOWdOdnpFbnFWUHQxWms5YzM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYR0NhSHNZRVFtLW5uMU9CQ0pkeERRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5MmIwYTI1LTFiM2EtNGFhOC1hN2NjLWM4YjI2NTBjOTY0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDY5LFxuICAgICAgMTk3LFxuICAgICAgMTE0LFxuICAgICAgMTMzLFxuICAgICAgMTIxLFxuICAgICAgMjQ3LFxuICAgICAgMTE3LFxuICAgICAgMTIyLFxuICAgICAgMTQzLFxuICAgICAgMTE2LFxuICAgICAgMTI1LFxuICAgICAgMTgsXG4gICAgICA0NCxcbiAgICAgIDIxLFxuICAgICAgMTc1LFxuICAgICAgMTE3LFxuICAgICAgOSxcbiAgICAgIDUzLFxuICAgICAgODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgOTUsXG4gICAgICAxOTUsXG4gICAgICAyNixcbiAgICAgIDM1LFxuICAgICAgMTQxLFxuICAgICAgMTA3LFxuICAgICAgMTQ2LFxuICAgICAgOTMsXG4gICAgICA1OSxcbiAgICAgIDIyNCxcbiAgICAgIDIxMixcbiAgICAgIDI1MyxcbiAgICAgIDIyNixcbiAgICAgIDIxOCxcbiAgICAgIDE2MixcbiAgICAgIDUsXG4gICAgICAyMzMsXG4gICAgICA3NSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGMUFEWkVXTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njc5NDI1OTMxOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTMyMTAyNDk5NzM4MDE6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHlLeDhRSEVLTzIrTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsdjVQL2tmMGNvTjB1dGlKa1JzSmN2VHFtcVN2eXRNLzhEK2lmeG1hbEVNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlHMXEzQWFEVnJtckY5d3YwalBzSTNXKzgrRWc1K2tWRUthbFlNdDRZVTdUMjM0bjA1ekhnVVZtdFRWMFQvRmgyZ0ZET01qUjNFUkJCZ1QrRTd5aERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZkbVo2bnJ6UUhKdnJzekhmRVltOVF5UndvM0xOSGcxejBkUlNUdDlmY0FTTGpkRklpNEVGanBxKzVZT0NPVXJEbVRGdzdOM1I0ZGp3cHBUbDVBN0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3OTQyNTkzMToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYzNzY3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdJYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1A1VzhLd3Vldit4eVkwYTFvVHN3ZlBlaDlVV2lOWGFZbFpaU2duUVJEUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIyODE5MTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDU4ODQ0MTcxXCJ9Igp9"  // PUT your SESSION_ID 


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
