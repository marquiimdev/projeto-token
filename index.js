const Discord = require("discord.js");
const client = new Discord.Client()
const config = require("./config.json");
const firebase = require("firebase");
const Enmap = require("enmap");
const fs = require("fs")

// Insira suas informações do firebase aqui ou embaixo.

// Inicialização do firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Essa é a parte responsável pelos eventos.
client.commands = new Enmap();
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);

    files.forEach((file) => {

        const Event = require(`./events/${file}`)

        let EventName = file.split(".")[0];

        client.on(EventName, Event.bind(null, client, database));

    });

});

// Essa é a parte responsável pelos comandos.
fs.readdir("./commands", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {

      if (!file.endsWith(".js")) return;

      let Props = require(`./commands/${file}`);

      let CommandName = file.split(".")[0];

      client.commands.set(CommandName, Props);

  });

});

client.login(config.token);