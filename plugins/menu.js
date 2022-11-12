const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'الاوامر', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/vUdEZMv.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━✨️*QUEEN ANGELLA*✨️━━━⛦


مرحبا👋 𝐈 𝐚𝐦 𝐚 الامبراطور انوس .
            *انوس*

■□■□■□■□■□■□■□■□■□■□
♕ *اوامر البوت* ♕

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
🍙𝙐𝙨𝙚➜ تحميل الاغاني .
⚠️.song  اكتب 

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
🍙𝙐𝙨𝙚➜ تحميل الفيديو من رابط يوتيوب.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
🍙𝙐𝙨𝙚➜   يقوم بتنزيل المحتوى من  instagram.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
🍙𝙐𝙨𝙚➜   يمنحك روابط YT.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
🍙𝙐𝙨𝙚➜   احصل على معلومات متعلقة بالمسلسلات التلفزيونية والعروض
👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
🍙𝙐𝙨𝙚➜ يحول الفيديو إلى gif..

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
🍙𝙐𝙨𝙚➜ يحول الفيديو إلى صوت.
👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
🍙𝙐𝙨𝙚➜ يحول النص إلى صوت..

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
🍙𝙐𝙨𝙚➜ يرسل صورة من جوجل.
👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
🍙𝙐𝙨𝙚➜ ترجم النص الذي قمت بوضع علامة عليه.
👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
🍙𝙐𝙨𝙚➜ يرسل نتيجة ويكيبيديا..

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
🍙𝙐𝙨𝙚➜ Finds the lyrics of the song.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
🍙𝙐𝙨𝙚➜ Send the covid stats of your country.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
🍙𝙐𝙨𝙚➜ Tells you about the weather of your place.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
🍙𝙐𝙨𝙚➜ Removes the background of tge image.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
🍙𝙐𝙨𝙚➜ Finds the text written on the image.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
🍙𝙐𝙨𝙚➜ It sends you random wallpaper.


■□■□■□■□■□ANGELLA■□■□■□■□■□


♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
🍙𝙐𝙨𝙚➜ It sends a random joke.
 
👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
🍙𝙐𝙨𝙚➜ It sends a random quote.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
🍙𝙐𝙨𝙚➜ It sends the screenshot of the website.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
🍙𝙐𝙨𝙚➜ Converts text into changesay meme image.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
🍙𝙐𝙨𝙚➜ Convert text into Trump's tweet.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
🍙𝙐𝙨𝙚➜ Gives you a compliment.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
🍙𝙐𝙨𝙚➜   Shorten your link.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🍙𝙐𝙨𝙚➜   Dictionary [-dict en;anime]

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🍙𝙐𝙨𝙚➜   Tells you about your horoscope.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🍙𝙐𝙨𝙚➜   Converts text into qr code.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🍙𝙐𝙨𝙚➜  Gives you info about movie.
⚠️movie master

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🍙𝙐𝙨𝙚➜  Gives you info about anime.
⚠️anime angella


■□■□■□■□■ANGELLA□■□■□■□■□■□


♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🍙𝙐𝙨𝙚➜ يحول اي صوره الي ملصق .

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
🍙𝙐𝙨𝙚➜ Converts sticker into image.

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🍙𝙐𝙨𝙚➜ Converts text into glowing sticker.
⚠️ex  attp Angella


■□■□■□■□■ANGELLA□■□■□■□■□■□


👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -activate
🍙𝙐𝙨𝙚➜ It can activate antispam

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ - emergencycrash
🍙𝙐𝙨𝙚➜ it will send Whatsapp virus

👸𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ - List 
🍙𝙐𝙨𝙚➜ المزيد من الاوامر 
■□■□■□■□■□■□■□■□■□■□
═════💢الامبراطور انوس💢═════
▣▣▣▣▣▣dripsmemes▣▣▣▣▣▣

`}) 

}));
