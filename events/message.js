const config = require("../config.json");

module.exports = async (client, database, message) => {
    // O bot não coleta xp mensagens privadas ou de outros bots.
    if (message.channel.type == "dm") return;
    // Não responder bot
    if (message.author.bot) return;
    let prefixo = config.prefixo;

    // mencionar o bot
    if (message.mentions.has(client.user)) {
        if (message.content.startsWith(prefixo)) return;
        message.channel.send(`${message.author}, meu prefixo neste servidor é **${prefixo}**!`)
    }

    //comandos
    if (!message.content.toLowerCase().startsWith(prefixo)) return;
    const args = message.content.slice(prefixo.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
        
    if (!cmd) {
        client.commands.map(a => {
            if (a && a.aliases.includes(command)) cmd = client.commands.get(a.name);
        });
    }
    
    try {
        cmd.run(client, message, args, database)
    } catch(e) {
        console.log(e);
    }
}