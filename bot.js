const Discord = require('discord.js');
const process = require("process")

const botconfig = require("./bot-config.json")

const client = new Discord.Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.once('ready', () => {
    console.log('Pai tá on');
});

client.on('message', message => {
    let prefix = "&"
    
    let command = message.content.split(" ")

    if(!command[0].startsWith(prefix)) return
    
    switch (command[0]) {
        case `${prefix}d`:
            if (!isNaN(Number(command[1]))) 
            resposta(message, "d20", rollDice(command[1]), message.author)
            break;
        case `${prefix}moeda`:
            let num = Math.trunc((Math.random() * 10)) % 2
            if (num == 1) {
                resposta(message, "moeda", "cara", message.author)
            } else {
                resposta(message, "moeda", "coroa", message.author)
            }
            break;
        case `${prefix}help`:
            message.channel.send(`${message.author} que que você qué? Meus comandos são esses:`)
            message.channel.send(`&d [numero] -> rola um dado com a quantidade de lados específicados`)
            message.channel.send(`&moeda -> joga uma moeda e diz se deu cara ou coroa`)
            break;
        /* default:
            //message.channel.send("Tá achando que aqui é a casa da mãe Joana?? QUEM GANHA DINHEIRO NA CAMA É PUTAAAAAAAAAAA")
            break; */
    }
});

function rollDice(sides) {
    return Math.trunc((Math.random() * sides))
}

function resposta(message, dado, numero) {
    console.log(message.author.username + " : " + dado + " : " + numero)
    message.channel.send(`${message.author} você tirou ${numero} no(a) ${dado}`)
}