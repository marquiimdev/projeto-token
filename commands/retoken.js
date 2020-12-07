const Discord = require("discord.js");
module.exports = {
    name: 'retoken',
    aliases: ['redefinirtoken'],
    run: async function(client, message, args, database) {
        const db = await database.ref(`Tokens/${message.guild.id}`).once('value');
        if (db.val() == null) {
            let randomChar1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let token = '';

            for (i = 0; i <= 8; i++) {
                token += randomChar1[Math.floor(Math.random() * randomChar1.length)];
            }

            database.ref(`Tokens/${message.guild.id}`)
            .set({
                token: token
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`> Seu token: ${token}\nNÃO COMPARTILHE COM NINGUÉM!`)
            .setColor("#2f3136");

            message.author.send(embed).catch(() => { message.channel.send(`Por favor, ative suas mensagens privadas, ${message.author}`) });
        } else {
            let randomChar1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let token = '';

            for (i = 0; i <= 8; i++) {
                token += randomChar1[Math.floor(Math.random() * randomChar1.length)];
            }

            database.ref(`Tokens/${message.guild.id}`)
            .set({
                token: token
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`> Seu token: ${token}\nNÃO COMPARTILHE COM NINGUÉM!`)
            .setColor("#2f3136");

            message.author.send(embed).catch(() => { message.channel.send(`Por favor, ative suas mensagens privadas, ${message.author}`) });
        }
    }
};