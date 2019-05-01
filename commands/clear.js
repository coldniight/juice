const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let messageembed = new Discord.RichEmbed()
    .setTitle("Juice Bot")
    .setDescription(`Please supply a number of messages to delete, ${message.author}.`)
    .setColor(0x00fffa)
    .setFooter(message.id)
    .setTimestamp();

    let staffRole = message.guild.roles.find('name', 'Staff');
    if(!message.member.roles.has(staffRole.id)) return message.channel.send(permembed);
    if(!args[0]) return message.channel.send(messageembed);
    message.delete();
    message.channel.bulkDelete(args[0]);
}

module.exports.help = {
    name: "clear"
}