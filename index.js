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
            console.log("d20: " + num)
            message.channel.send(`Você tirou ${num} no d20`)
            break;
        case `${prefix}d12`:
            num = Math.trunc((Math.random() * 60) / 5)
            console.log("d12: " + num)
            message.channel.send(`Você tirou ${num} no d12`)
            break;
        case `${prefix}d8`:
            num = Math.trunc((Math.random() * 1000) / 125)
            console.log("d8: " + num)
            message.channel.send(`Você tirou ${num} no d8`)
            break;
        case `${prefix}d6`:
            num = Math.trunc((Math.random() * 60) / 10)
            console.log("d6: " + num)
            message.channel.send(`Você tirou ${num} no d6`)
            break;
        case `${prefix}d4`:
            num = Math.trunc((Math.random() * 100) / 25)
            console.log("d4: " + num)
            message.channel.send(`Você tirou ${num} no d4`)
            break;
        case `${prefix}moeda`:
            num = Math.trunc((Math.random() * 100)) % 2
            console.log("moeda: " + num)
            if (num == 1) {
                message.channel.send(`Você tirou cara na moeda`)
            } else {
                message.channel.send(`Você tirou coroa na moeda`)
            }
            break;
        case `${prefix}help`:
            message.channel.send(`Que foi porra? Que que você qué?`)
            message.channel.send(`&d20 &d12 &d8 &d6 &d4 &moeda `)
            break;
        default:
            //message.channel.send("Tá achando que aqui é a casa da mãe Joana?? QUEM GANHA DINHEIRO NA CAMA É PUTAAAAAAAAAAA")
            break;
    }
});

client.login(botconfig.token);
