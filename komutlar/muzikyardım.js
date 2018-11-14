const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(' **Yapımcı: Kerem Sönmez(Quadriâ)** \n\n **Deneme E-Sports Müzik Komutları ** \n\nMüzik Eklemek İçin **/add [Müzik İsmi]** \n\n Müziği Açmak İçin **/play** \n\nBotu Kanala Almak İçin **/join** \n\n Botun Listesini Öğrenmek İçin **/queue** \nBotu Kanaldan Çıkarmak İçin **/leave** \n\n**:copyright: 2018-2019 BDAL**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['muzik yardim', 'muzikyardim', 'my', 'muziky', 'bbot', 'muzik', 'muzik hakkında', 'muzikhakkında'],
  permLevel: 0
};

exports.help = {
  name: 'muzikyardım',
  description: 'Müzik Komutlarını Gösterir',
  usage: 'muzikyardim'
};
