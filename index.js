const Discord = require('discord.js');

const botconfig = require("./bot-config.json")

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Pai tá on');
});

client.on('message', message => {
    let prefix = botconfig.prefix
    let num
    switch (message.content) {
        case `${prefix}d20`:
            num = Math.trunc((Math.random() * 100) / 5)
            resposta(message, "d20", num, message.author)
            break;
        case `${prefix}d12`:
            num = Math.trunc((Math.random() * 60) / 5)
            resposta(message, "d12", num, message.author)
            break;
        case `${prefix}d8`:
            num = Math.trunc((Math.random() * 1000) / 125)
            resposta(message, "d8", num, message.author)
            break;
        case `${prefix}d6`:
            num = Math.trunc((Math.random() * 60) / 10)
            resposta(message, "d6", num, message.author)
            break;
        case `${prefix}d4`:
            num = Math.trunc((Math.random() * 100) / 25)
            resposta(message, "d4", num, message.author)
            break;
        case `${prefix}moeda`:
            num = Math.trunc((Math.random() * 100)) % 2
            if (num == 1) {
                resposta(message, "moeda", "cara", message.author)
            } else {
                resposta(message, "moeda", "coroa", message.author)
            }
            break;
        case `${prefix}help`:
            message.channel.send(`${message.author} que foi porra? Que que você qué? Meus comandos são esses:`)
            message.channel.send(`&d20 &d12 &d8 &d6 &d4 &moeda `)
            break;
        default:
            //message.channel.send("Tá achando que aqui é a casa da mãe Joana?? QUEM GANHA DINHEIRO NA CAMA É PUTAAAAAAAAAAA")
            break;
    }
});

function resposta(message, dado, numero) {
    console.log(message.author + " : " + dado + " : " + numero)
    message.channel.send(`${message.author} você tirou ${numero} no(a) ${dado}`)
}

client.login(botconfig.token);
