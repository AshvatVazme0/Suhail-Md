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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_27_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZIWjRjZGlEUWpwOEdQK0c2SVJZcW9mYTEwSE5kK3h6WkNacVpnQ3lSK0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njc5NDI1OTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTAwNzc2QUJCN0EyMzYyMjUyRENFRTc3OTVDNTk5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjA0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1BEc1RTNFdUeUtqNTAzUkRQQkU5d1wiLFxuICBcInBob25lSWRcIjogXCIwODE4YWVjYy00ZDI2LTQ3MzktODRmMy1iN2QxZWQ5Njc3NDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTg4LFxuICAgICAgMTgzLFxuICAgICAgNDAsXG4gICAgICA0MyxcbiAgICAgIDIyOSxcbiAgICAgIDgsXG4gICAgICA3NyxcbiAgICAgIDgwLFxuICAgICAgNzgsXG4gICAgICA5OSxcbiAgICAgIDExNCxcbiAgICAgIDIxNSxcbiAgICAgIDE4NyxcbiAgICAgIDIyNSxcbiAgICAgIDEwMSxcbiAgICAgIDIzMCxcbiAgICAgIDQ2LFxuICAgICAgMjA0LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTE0LFxuICAgICAgMTEyLFxuICAgICAgNjIsXG4gICAgICA3NixcbiAgICAgIDgsXG4gICAgICAzOCxcbiAgICAgIDI0NyxcbiAgICAgIDQ4LFxuICAgICAgOSxcbiAgICAgIDgsXG4gICAgICAxNyxcbiAgICAgIDIzMixcbiAgICAgIDExMyxcbiAgICAgIDQyLFxuICAgICAgMTc0LFxuICAgICAgMTY0LFxuICAgICAgNDEsXG4gICAgICA2OCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaVzJBNTNRVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1Njc5NDI1OTMxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MzIxMDI0OTk3MzgwMTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xxS3g4UUhFTHZON2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibHY1UC9rZjBjb04wdXRpSmtSc0pjdlRxbXFTdnl0TS84RCtpZnhtYWxFTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1d3VkVjVEQUFIdS93bmJLMkFnYTNOdXhoNmFIblNlcllvTDJsNEtWTnpKNU8xRUhOd0FKQnhSREpmOTVwb2VMeG5CeVRhTllneFpqbElmTnYvVjBBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJueU1oZFdBMjFQc1hLRGpyeFE5MDBPOFZyWmF4a1Y2TG85QkMxb20zekxYRlBZeldBdDRPLy9ybG5RV0hyQWxsTlFxZG9HZ3Q4L2ZpcXJRK0d1TzNqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Nzk0MjU5MzE6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2MDQxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdJYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0lhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY1A1VzhLd3Vldit4eVkwYTFvVHN3ZlBlaDlVV2lOWGFZbFpaU2duUVJEUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDIyODE5MTI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDU4ODQ0MTcxXCJ9Igp9"  // PUT your SESSION_ID 


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
