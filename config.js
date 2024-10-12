//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wonderwise93658951@gmail.com";
global.location = "Lome, Togo";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lome";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "22893658951";
global.owner = process.env.OWNER_NUMBER || "22893658951";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0EwdnIvaG1IOEtrWWE4ZW9EL0pMc1Mwb2liUWtCVlBFSTRqZWZGSFJGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVRuTFRHR1ZLNUlCZHA4YzQ3RGJTNWVieFg3K3lYUWxScHhBSlZ3WTZXQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSFZWdkpoYnpTMy9HT21YcUd4eVptRENBN0hpSWM3RDNSbHo2cUZJUFdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3ZTBhMmpQaHNNN2ovK0FCWHVqV04xQ3BTdnpxYTU2c1c0WmNlb2dnM21FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKOVFWTWZYUmxKWmhCQkk2WVE0MEZYb1o3OFZVeGNoSSsrT2szRkJIMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ZcEFweXpQQmlHZXNaVEZjYThNd1RwczliL3VlVHFkamhWSlZMZ1F5Qmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxWdk1Ya1AxM095Ry9LRHVDZUp6dFFubWlWY0lMU05LYVpHL1NuVVowQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEtKR0k3c2ZjSGJETXdWWFk2OEJlREVJODhNbk9rTG8xWXR1K2V2cXBERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNSUXUzMnZnL0VJOFF4TENzSkJ4N1BSWEEzb0RkSHd1bTJHWFo0bkRlS292bWpIWlpLbEJmQml0YU9EbDVHY0R6VEJGUnZCTllTV3dWUmVucUloSGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiI2czBETWVURlVjUXNvYnByWlZkZ1NKaUJ4aEg3THhibGtkd293b1J3czVBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3bXRTSnFNcFJ3dTJsNlJTN20ydmt3IiwicGhvbmVJZCI6IjIzNzg2MzkzLWFiMGEtNGQzMi1iNDM5LTg0NzY4Y2Q2YmI2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJcUJndHhZSmdVaFV4UndTSUpFMmxZUXJwdXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnBVNFV5MGZJVm42NDByVE1YcFNJNGxKbXY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhTMzM0RFc4IiwibWUiOnsiaWQiOiIyMjg5MzY1ODk1MTo0NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSytzK3Y0RUVKWHVxYmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidG9QeHJTand5RmliZld5c0hyMkovSVZ6QzJ0RmxrQ1B2L1RvaGhxUk55dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiektvWnorWjMzeEx0cnRxT2w3b09YeDZGbDQ5cllrZVFiNldNMVM4MlZGSHdpTWlIOEFGK25BRWdxaGxnUG16dG5RZ3JxTGhPUGdxRy9YUzJNeHZ3QVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjdBTVhkd0ZiZUZOR2ZOb0g5WElGNzl4Q25paFlndHZQOXNUWnBGTytodHZhcjFqaCt3ZHJsRGNjWE4zbWR6SzJ1Z2Q4ZkdJUFpnakgxYTNxbE9FaWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTM2NTg5NTE6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmFEOGEwbzhNaFltMzFzckI2OWlmeUZjd3RyUlpaQWo3LzA2SVlha1RjcyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODczOTEwN30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CAMÉLÉON SOCIAL™`",
  author: process.env.PACK_AUTHER || "CAMÉLÉON SOCIAL",
  packname: process.env.PACK_NAME || "CAMÉLÉON SOCIAL",
  botname: process.env.BOT_NAME || "CAMÉLÉON SOCIAL",
  ownername: process.env.OWNER_NAME || "Caméléon Social",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
