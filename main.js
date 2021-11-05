const
	{
WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const axios = require("axios")
const figlet = require("figlet");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const colors = require('colors');
const chalk = require('chalk')

baterai = {
    
baterai: 0,
    
cas: false

}

require('./kel.js')
nocache('./kel.js', module => console.log(`${module} is now updated!`))

const starts = async (ALDI = new WAConnection()) => {
    ALDI.logger.level = 'warn'
    ALDI.version = [2, 2143, 8]
    ALDI.browserDescription = [ 'Aldi Mengintai', '', '3.0' ]
    console.log(banner.string)
    ALDI.on('qr', () => {
    ALDI.sendMessage(`62857721057781@s.whatsapp.net`, `Hai mikel`, MessageType.extendedText)
        console.log(color('[','white'), color('!','red'), color(']','white'), color('scan the Qr code'))
    })
    console.log(color(figlet.textSync('                V3.0.0', {
    font: 'Standard',
    horizontalLayout: 'default',
    vertivalLayout: 'default',
    width: 80,
    whitespaceBreak: false
	}), 'cyan'))
    fs.existsSync('./mikel.json') && ALDI.loadAuthInfo('./mikel.json')
    ALDI.on('connecting', () => {
        start('2', 'Connecting...')
    })
    console.log(chalk.bgHex('#FFDF00').underline(color('HELLO IM MIkel','black')))
     console.log(chalk.bgHex('#FFDF00').underline(color('SCRIPT WAS RUN WELL..','red')))
    ALDI.on('open', () => {
        success('2', 'Connected')
    })
    await ALDI.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./mikel.json', JSON.stringify(ALDI.base64EncodedAuthInfo(), null, '\t'))


ALDI.on('group-participants-update', async (anu) => {
let mdata = await ALDI.groupMetadata(anu.jid)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    try {
    	console.log(anu)
    mem = anu.participants[0]
    try {
    var pp_user = await ALDI.getProfilePicture(mem)
    } catch (e) {
    var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    if (anu.action == 'add') {
    let mdata = await ALDI.groupMetadata(anu.jid)
    memeg = mdata.participants.length
    num = anu.participants[0]
    nam = anu.jid
    anu_user = ALDI.contacts[mem]
    teks = `
◧ ʜᴀʟʟᴏ
@${num.split('@')[0]}
□ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ
□ ${mdata.subject}


◧ ɪɴᴛʀᴏ ᴅᴜʟᴜ
□ ɴᴀᴍᴀ :
□ ᴜᴍᴜʀ :
□ ᴋᴇʟᴀs :
□ ᴀsᴋᴏᴛ :

Deskripsi
⌬━━━━━━━━━━━⌬
${mdata.desc}
⌬━━━━━━━━━━━⌬
`
   img = await getBuffer(pp_user)
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: img})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
	sendButImage(mdata.id, teks, 'Welcome message', img,  [{buttonId: 'X - Dev Team', buttonText: {displayText: 'welcome kak👋'}, type: 1},{buttonId: 'X - Dev Team', buttonText: {displayText: 'hallo selamat datang'}, type: 1}], {thumbnail: img, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} Join`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
      }
//================================\\
if (anu.action == 'remove') {
    let mdata = await ALDI.groupMetadata(anu.jid)
    memeg = mdata.participants.length
    num = anu.participants[0]
    nam = anu.jid
    anu_user = ALDI.contacts[mem]
    teks = `sayoooonara👋`
    let buffa = await getBuffer(pp_user)
    const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ALDI.prepareMessage(mdata.id, kma, image, {thumbnail: buffa})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ALDI.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
	sendButImage(mdata.id, teks, 'Leave message', buffa, [{buttonId: 'X - Dev Team', buttonText: {displayText: 'sayooonaraa 👋'}, type: 1},{buttonId: 'X - Dev Team', buttonText: {displayText: 'beban gc kluar:v'}, type: 1}], {thumbnail: buffa, "contextInfo": {mentionedJid: [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} Leave`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
    }
    if (anu.action == 'promote') {
    let mdata = await ALDI.groupMetadata(anu.jid)
    num = anu.participants[0]
    anu_user = ALDI.contacts[mem]
    memeg = mdata.participants.length
    try {
    var pp_user = await ALDI.getProfilePicture(mem)
    } catch (e) {
    var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    vipro = `[ *PROMOTE DETECTED* ]

Name : *@${num.split('@')[0]}*
Caption : *CIE JADI ATMIN:V*
GROUP : *${(mdata.subject)}*`
    buffop = await getBuffer(pp_user)
    ALDI.sendMessage(mdata.id, buffop, MessageType.image, {thumbnail: buffop,caption:vipro, contextInfo: {"mentionedJid": [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} PROMOTE ADMIN GROUP`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
    }
    if (anu.action == 'demote') {
    let mdata = await ALDI.groupMetadata(anu.jid)
    num = anu.participants[0]
    anu_user = ALDI.contacts[mem]
    memeg = mdata.participants.length
    try {
    var pp_user = await ALDI.getProfilePicture(mem)
    } catch (e) {
    var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    viproo = `[ *DEMOTE DETECTED* ]

Name : *@${num.split('@')[0]}*
Caption : *AWOKAWOK DEMOTE*
GROUP : *${(mdata.subject)}*`
    buffep = await getBuffer(pp_user)
    ALDI.sendMessage(mdata.id, buffep, MessageType.image, {thumbnail: buffep, caption:viproo, contextInfo: {"mentionedJid": [num]}, quoted: {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `+${num.split('@')[0]} DEMOTE ADMIN GROUP`, 'jpegThumbnail': fs.readFileSync('./image/thumb.jpeg')}}}})
    }
        } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    })
    



antidel = true

ALDI.on('message-delete', async (m) => {

if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
ALDI.sendMessage(m.key.remoteJid, `
𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀


*Nama  : @${m.participant.split("@")[0]}*
    
*Jam  : ${jam} ${week} ${calender}*
    
*Type  : ${type}*


𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
ALDI.copyNForward(m.key.remoteJid, m.message)
})


antical = false 
ALDI.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
ALDI.sendMessage(call, `*Sorry ${ALDI.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)

.then(() => ALDI.blockUser(call, "add"))
})








ALDI.on('group-update', async (anu) => {
if (!gcdetect.includes(anu.jid)) return
fkontakk = { key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6285697725326-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;ALDI FAUZI;;;\nFN:ALDI\nitem1.TEL;waid=6285697725326:+6285697725326\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
  metdata = await ALDI.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    ALDI.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
})
    ALDI.on('chat-update', async (message) => {
        require('./kel.js')(ALDI, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
