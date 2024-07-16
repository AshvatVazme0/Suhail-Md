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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_07_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDYwL0pNRFRzVzZiMnJoU1hsNmRJZ2dLSktwSGFHZ1V3VVVYcXU5TDVWTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUxXODRPN19RdFdBVU1yVGhTN2lkUVwiLFxuICBcInBob25lSWRcIjogXCJiZTJlZGRkZC1mMTVmLTQ3MmQtYmU5NS0xNjY4ZWIwZWMzNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTU2LFxuICAgICAgMTc3LFxuICAgICAgMjU1LFxuICAgICAgMTQyLFxuICAgICAgMTEzLFxuICAgICAgMTQ1LFxuICAgICAgMTEsXG4gICAgICAxOTEsXG4gICAgICA1OCxcbiAgICAgIDUsXG4gICAgICAyMTIsXG4gICAgICAyMjYsXG4gICAgICAxMTcsXG4gICAgICAyMTYsXG4gICAgICAxNCxcbiAgICAgIDE0MyxcbiAgICAgIDE5MCxcbiAgICAgIDQ0LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDY2LFxuICAgICAgMTY5LFxuICAgICAgMCxcbiAgICAgIDM3LFxuICAgICAgMjEyLFxuICAgICAgMTI2LFxuICAgICAgMjMzLFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMTkzLFxuICAgICAgNDgsXG4gICAgICAyNDcsXG4gICAgICAxNTUsXG4gICAgICA2MSxcbiAgICAgIDE4OSxcbiAgICAgIDEyNCxcbiAgICAgIDkwLFxuICAgICAgNTAsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkJUSE41NzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3OTQyNTkzMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTMyMTAyNDk5NzM4MDE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS0t4OFFIRUxmdzJMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImx2NVAva2YwY29OMHV0aUprUnNKY3ZUcW1xU3Z5dE0vOEQraWZ4bWFsRU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXcrU3RDZU1wOVA2QVBDSkJGQUF0Q2psMmpBb2ZvWEpCdkEySWhSdGtmc1MrVVJrejdPMFVhSFZqZk5sQUhDQXg4cmo3TGtia0p1TXBBSGlIZldMQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVDJDZGRIb2pNM0Vqbmx1bWRaT0RRYm9kbU1NcHdGcHFtOXZleDBmWXBwSFdtZlF2QS9vakZKTHpLdGNnejVPblZTVHRCa3Z3bDlqQjR3NTFMVWQrZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc5NDI1OTMxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMjA4MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMNkhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw2SC5qc29uIjogIntcImtleURhdGFcIjpcIkVZdlRNaTdhUC9mWHdjd3BMZUcxcXpwdkRYcjBDK3NQd2hXVEVGa25xNTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMjgxOTEyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMTIwODMyMTI0XCJ9Igp9"  // PUT your SESSION_ID 


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
