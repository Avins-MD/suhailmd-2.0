const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254713972753";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_32_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2WXRBQTYrL3M4a3hGZHRBdE1qK3lCcUt0aWZvaHFjb2RSY0k3MlVCODlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrOVJDRE1jMVFqcUdfeWxmREhvdXV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJmMTg2ZDM2LTc2MzQtNDFjOC1hNWEyLTdmM2VkYjU2MTUwZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAyMzgsXG4gICAgICAxMjgsXG4gICAgICAxNzMsXG4gICAgICAxMDQsXG4gICAgICAxMjksXG4gICAgICAyMzUsXG4gICAgICA3MCxcbiAgICAgIDE3NSxcbiAgICAgIDc5LFxuICAgICAgMTMyLFxuICAgICAgMTM1LFxuICAgICAgODcsXG4gICAgICA1NixcbiAgICAgIDE0OSxcbiAgICAgIDIyOCxcbiAgICAgIDc1LFxuICAgICAgOTksXG4gICAgICAxNDEsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA5MyxcbiAgICAgIDE0LFxuICAgICAgMTA1LFxuICAgICAgNzUsXG4gICAgICAzNyxcbiAgICAgIDIzMyxcbiAgICAgIDEyOSxcbiAgICAgIDI0OCxcbiAgICAgIDUyLFxuICAgICAgMjE4LFxuICAgICAgMTQ0LFxuICAgICAgMTkxLFxuICAgICAgMTMzLFxuICAgICAgMTQ0LFxuICAgICAgNTAsXG4gICAgICAxMTgsXG4gICAgICAyMCxcbiAgICAgIDEzMixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNTFRSlZNR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzEzOTcyNzUzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1ODk0ODUwMjA2MTMwNDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIUDFmWUVFUGk4MkxvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamExUlM5LzdZWmpKK0VaS2E4TXFHcmY3ZTMreG5HazluZmRvZXdkWXppUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaa0k3WnhYWEJ3T2dNWjdXQXlNUzVQM0NTL3FiLzJkY2lzS3RyaEZud3d0bEdsRlVrSHRWNVI5NHJZOU16MGtkcWVCK1BibC9HWVlqVWVqL3V0cnBBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3Qm5jY2RKT2RMWXhpejFkcXpmSDhaT0R1dDVRVmc2Qm9SMldCTTloalpXWjQzTHk2RkF3WUdCdXd3VHE3SjNmcS9ub2FjWFJYRDM5V1QrZUMxdVlDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTM5NzI3NTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY5NzE0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZGbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkZsLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Avins",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
