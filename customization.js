const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  BOTNAME: "© 𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 ✨",
  OWNERNAME: "𝐌𝐑.𝐃𝐈𝐍𝐄𝐓𝐇",
  OWNERNUMBER: "94740433291",
  FOOTER: `> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*
`.trim(),
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
🧚‍♂️⃟🩵 © 𝚂𝙷𝙰𝙶𝙴𝙴 𝙼𝙳 𝗑ᴾᴿᴼ 💚 🧚‍♂️⃟🩵
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚂𝙷𝙰𝙶𝙴𝙴 𝙼𝙳 𝚇ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : 𝙳𝙸𝙽𝙴𝚃𝙷 𝚆𝙸𝚂𝙷𝙼𝙸𝚃𝙷𝙰
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> ᴛʜᴇ ʙᴇꜱᴛ ᴡʜᴛʜꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱʜᴀɢᴇᴇ.....
> © 𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
        `.trim();
  },
  REACTMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  SEARCHMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  HENTAIMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  DOWNLOADMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  MOVIEMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  GROUPMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ  𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  OWNERMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  CONVERTMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  SETTINGSMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  NSFWMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  MAINMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟🩵",
  FUNMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  AIMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  LOGOMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  USEFULLMENU: "🧚‍♂️⃟🩵 © ꜱʜᴀɢᴇᴇ ᴍᴅ 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟🩵",
  //=====================menu-img's================================
  ALLMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  REACTMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  SEARCHMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  HENTAIMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  DOWNLOADMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  MOVIEMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  GROUPMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  OWNERMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  CONVERTMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  SETTINGSMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  NSFWMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  MAINMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  FUNMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  AIMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  LOGOMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  USEFULLMENUIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *SHAGEE MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 SHAGEE MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 SHAGEE MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🧚‍♂️⃟🩵  𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🧚‍♂️⃟🩵

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚂𝙷𝙰𝙶𝙴𝙴 𝙼𝙳 V${packageJson.version}
┃🤖 𝙱𝚘𝚝 : © 𝚂𝙷𝙰𝙶𝙴𝙴 𝙼𝙳 V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*


        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝘾𝙄𝙉𝙀𝙈𝘼 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${movieData.title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 𝙓ᴾᴿᴼ 𝘾𝙄𝙉𝙀𝙈𝘼 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* 𝘾𝙝𝙚𝙘𝙠 𝙞𝙩 𝙤𝙪𝙩 → ${title}
       
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

📺 *𝚃𝚅 𝚂𝚑𝚘𝚠:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝙴𝚙𝚒𝚜𝚘𝚍𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝙳𝚊𝚝𝚎:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.releaseDate}
🌐 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*

> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*


        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿  
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿  

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  MVINFOCAPTION: "🎬 *『 𝙎𝙃𝘼𝙂𝙀𝙀 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿\n\n",
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 𝙎𝙃𝘼𝙂𝙀𝙀 𝙎𝙊𝙉𝙂 𝘿𝙊𝙒𝙉𝙇𝙊𝘿𝙀𝙍
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 CREATED BY Dineth Wishmitha
❤️ MAIN CREATER BY Janith Rashmika

> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*


        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by SHAGEE MD Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Created by Dineth Wishmitha
❤️ Main Creater By Janith Rashmika

> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*


        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by SHAGEE MD Bot!* 


> *🔐𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 -: ©𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃  💚*


        `.trim();
  },
};
